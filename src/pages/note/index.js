import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { MyHeader } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, fonts } from '../../utils';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';

export default function NotesPage({ navigation, route }) {
    const mac = route.params.mac;
    const [notes, setNotes] = useState([]);
    const isFocused = useIsFocused();

    const backPage = () => {
        navigation.goBack()
    };

    const __getData = () => {
        axios.post(apiURL + 'notes', {
            mac: mac
        }).then(res => {
            console.log(res.data);
            setNotes(res.data)
        })
    }

    useEffect(() => {
        __getData()
    }, [isFocused]); // Refresh notes when screen is focused

    return (
        <ImageBackground source={require('../../assets/bgsplash.png')} style={styles.background}>
            <MyHeader judul="My Notes" onPress={backPage} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    {notes.map((note, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.noteContainer}
                            onPress={() => navigation.navigate('ResultNotes', note)}
                        >
                            <Text style={styles.noteTitle}>{note.judul}</Text>
                            {/* <Text style={styles.noteDate}>{note.isi}</Text> */}
                            <Text style={styles.noteDate}>{note.last_update}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.addButtonContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('InputNotes', {
                    mac: mac
                })}>
                    <View>
                        <Image style={styles.addButton} source={require('../../assets/plus.png')} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: "100%"
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20
    },
    container: {
        width: '100%',
    },
    noteContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2
    },
    noteTitle: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.primary,
    },
    noteDate: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: 'gray',
        marginTop: 5
    },
    noteDateTgl: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: 'gray',
        marginTop: 5
    },
    addButtonContainer: {
        padding: 10,
        flexDirection: "row",
        marginBottom: 50,
        justifyContent: 'flex-end'
    },
    addButton: {
        width: 73,
        height: 73,
    }
});
