import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { MyHeader } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, fonts } from '../../utils';
import axios from 'axios';
import { apiURL, webURL } from '../../utils/localStorage';

export default function Riwayat({ navigation, route }) {

    const [data, setData] = useState([]);
    const isFocused = useIsFocused();

    const backPage = () => {
        navigation.goBack()
    };

    const __getData = () => {
        axios.post(apiURL + 'desain').then(res => {
            console.log(res.data);
            setData(res.data);

        })
    }

    useEffect(() => {
        __getData()
    }, [isFocused]); // Refresh notes when screen is focused

    return (
        <ImageBackground source={require('../../assets/bgsplash.png')} style={styles.background}>
            <MyHeader judul="Hasil Desain Tumbuhan" onPress={backPage} />
            <View style={{
                flex: 1,
                padding: 16,
            }}>
                <FlatList data={data} renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                            <View style={{
                                borderColor: colors.border,
                                marginVertical: 4,
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 12,

                            }}>
                                <View>
                                    <Image source={{
                                        uri: webURL + item.gambar,
                                    }} style={{
                                        width: '100%',
                                        height: 300,
                                        resizeMode: 'contain'
                                    }} />
                                </View>
                                <View style={{
                                    padding: 10,
                                }}>
                                    <Text style={{
                                        textAlign: 'right',
                                        fontFamily: fonts.primary[400],
                                        color: colors.primary,
                                    }}>{item.last_update}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
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
