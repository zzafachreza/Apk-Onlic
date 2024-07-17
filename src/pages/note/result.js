import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Alert, Image, ActivityIndicator, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MyHeader } from '../../components';
import { colors, fonts } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { useIsFocused } from '@react-navigation/native';
import Share from 'react-native-share';

export default function ResultNote({ route, navigation }) {
    const [note, setNotes] = useState(route.params);
    const [loading, setlLoading] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            __getData();
        }
    }, [isFocused]);

    const __getData = () => {
        setlLoading(true);
        axios.post(apiURL + 'detail_notes', {
            id_notes: route.params.id_notes
        }).then(res => {
            setNotes(res.data[0]);
            setlLoading(false);
        })
    }

    const backPage = () => {
        navigation.goBack()
    };


    const deleteNote = async () => {
        try {
            axios.post(apiURL + 'delete_notes', {
                id_notes: note.id_notes
            }).then(res => {
                console.log(res.data);
                if (res.data == 200) {
                    showMessage({ type: 'success', message: 'Berhasil dihapus!' });
                    navigation.goBack()
                }
            })
        } catch (error) {
            Alert.alert('Error', 'Failed to delete the note.');
        }
    };

    const shareNote = () => {
        // Logic to share the note

        // navigation.navigate('https://onlic.okeadmin.com/linking/notes/?id_notes' + note.id_notes)
        Share.open({
            url: 'https://onlic.okeadmin.com/linking/notes?id_notes=' + note.id_notes

        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    };

    const editNote = () => {
        navigation.navigate('EditNotes', note);
    };

    return (
        <ImageBackground source={require('../../assets/bgsplash.png')} style={styles.background}>
            <MyHeader judul="My Notes" onPress={backPage} />
            {!loading &&
                <>
                    <View style={styles.container}>
                        <Text style={styles.label}>Judul :</Text>
                        <Text style={styles.noteTitle}>{note.judul}</Text>
                        <Text style={styles.label}>Isi :</Text>
                        <Text style={styles.noteContent}>{note.isi}</Text>

                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={editNote}>
                            <Image style={styles.icon} source={require('../../assets/edit.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={deleteNote}>
                            <Image style={styles.icondelete} source={require('../../assets/delete.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={shareNote}>
                            <Image style={styles.icon} source={require('../../assets/share.png')} />
                        </TouchableOpacity>
                    </View>
                </>
            }

            {
                loading && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            }
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: "100%"
    },
    container: {
        flex: 1,
        padding: 20
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.primary,
        marginBottom: 10
    },
    noteTitle: {
        fontSize: 18,
        fontFamily: fonts.primary[400],
        marginBottom: 20
    },
    noteContent: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: '#000',
        textAlign: 'justify'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginBottom: 20
    },
    icon: {
        width: 17,
        height: 17,
    },
    icondelete: {
        width: 17,
        height: 19,
    },
});
