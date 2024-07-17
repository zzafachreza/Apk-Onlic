import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { MyHeader } from '../../components';
import { colors, fonts } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';

export default function EditNotes({ navigation, route }) {
    const item = route.params;
    const [title, setTitle] = useState(route.params.judul);
    const [content, setContent] = useState(route.params.isi);
    const backPage = () => {
        navigation.goBack()
    };

    const saveNote = async () => {
        try {
            if (title.length == 0) {
                showMessage({ message: 'Judul wajib diisi' })
            } else if (content.length == 0) {
                showMessage({ message: 'isi wajib diisi' })
            } else {
                axios.post(apiURL + 'edit_notes', {
                    id_notes: route.params.id_notes,
                    judul: title,
                    isi: content
                }).then(res => {
                    console.log(res.data);
                    if (res.data == 200) {
                        showMessage({
                            type: 'success',
                            message: 'Berhasil di simpan !'
                        });
                        navigation.pop(2);
                    }
                })
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to save the note.');
        }
    };

    return (
        <ImageBackground source={require('../../assets/bgsplash.png')} style={styles.background}>
            <MyHeader judul="My Notes" onPress={backPage} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.label}>Judul :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tulis judul notes"
                        placeholderTextColor="gray"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Text style={styles.label}>Isi :</Text>
                    <TextInput
                        style={styles.inputLarge}
                        placeholder="Tulis isi notes"
                        placeholderTextColor="gray"
                        value={content}
                        onChangeText={setContent}
                        multiline
                    />
                    <TouchableOpacity onPress={saveNote} style={styles.button}>
                        <Text style={styles.buttonText}>Simpan</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    label: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.primary,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        fontFamily: fonts.primary[400],
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    inputLarge: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        fontFamily: fonts.primary[400],
        height: 150,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: fonts.primary[600],
    }
});
