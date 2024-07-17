import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, FlatList, Alert, ActivityIndicator, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { MyButton, MyHeader } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, fonts } from '../../utils';
import axios from 'axios';
import { apiURL, MYAPP, webURL } from '../../utils/localStorage';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import SoundPlayer from 'react-native-sound-player'
import Share from 'react-native-share';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';


export default function Detail({ navigation, route }) {
    const [editDesain, setEditDesain] = useState(false)
    const [item, setItem] = useState(route.params);
    const [play, setPlay] = useState(false);

    const [loading, setlLoading] = useState(false);
    const isFocused = useIsFocused();


    useEffect(() => {
        if (isFocused) {
            __getData();
        }
    }, [isFocused]);

    const __getData = () => {
        setlLoading(true);
        axios.post(apiURL + 'detail_desain', {
            id_desain: route.params.id_desain
        }).then(res => {
            setItem(res.data[0]);
            setlLoading(false);
        })
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [kirim, setKirim] = useState({
        audio: {},
        gambar: {},
    })
    const pickImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            console.log('Image Picker Response: ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.uri) {
                setKirim({ ...kirim, gambar: response })
                const source = response.uri;
                console.log('Selected Image URI:', source); // Log URI to check if it is valid
                setSelectedImage(source);
            } else {
                console.log('No valid URI in response');
            }
        });
    };

    const pickAudio = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.audio],
            });
            console.log('Audio Picker Response: ', res);


            // Convert content URI to file path
            const uri = res[0].uri;
            const destPath = `${RNFS.DocumentDirectoryPath}/${res[0].name}`;
            await RNFS.copyFile(uri, destPath);

            new Sound(selectedAudio, '', (error) => {
                if (error) {
                    console.log('Failed to load the sound', error);
                    return;
                }
            });
            setSelectedAudio(destPath);
            console.log(destPath)
            setKirim({ ...kirim, audio: res[0] });



        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled audio picker');
            } else {
                console.log('AudioPicker Error: ', err);
            }
        }
    };




    const deleteDesain = () => {
        Alert.alert(MYAPP, 'Apakah kamu yakin akan hapus desain ini ?', [
            { text: 'Tidak' },
            {
                text: 'Ya, Hapus',
                onPress: () => {
                    axios.post(apiURL + 'delete_desain', {
                        id_desain: item.id_desain,
                        audio: item.audio,
                        gambar: item.gambar,
                    }).then(res => {
                        console.log(res.data);
                        if (res.data == 200) {
                            navigation.goBack();
                        }
                    })
                }
            }
        ])
    }

    const shareDesain = () => {
        Share.open({
            url: 'https://onlic.okeadmin.com/linking/desain?id_desain=' + item.id_desain

        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    }
    return (
        <ImageBackground source={require('../../assets/bgsplash.png')} style={{
            flex: 1,
        }}>
            <MyHeader judul="Detail Desain Tumbuhan" onPress={() => navigation.goBack()} />
            {!loading &&
                <View style={{
                    flex: 1,
                    padding: 16,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image source={{
                            uri: selectedImage == null ? webURL + item.gambar : selectedImage,
                        }} style={{
                            width: '100%',
                            height: 300,
                            resizeMode: 'contain'
                        }} />

                        {editDesain && <TouchableOpacity onPress={pickImage} style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                            marginVertical: 5,
                        }}>
                            <Icon type='ionicon' name='create-outline' />
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: 12,
                            }}>Ubah Gambar</Text>
                        </TouchableOpacity>}

                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[400],
                            color: colors.black,
                        }}>{item.last_update}</Text>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10,
                        }}>
                            <TouchableOpacity onPress={() => {
                                try {
                                    if (!play) {
                                        if (selectedAudio === null) {
                                            SoundPlayer.playUrl(webURL + item.audio);
                                            SoundPlayer.addEventListener('FinishedLoadingURL', (x) => {
                                                if (x.success) {
                                                    setPlay(true);
                                                }
                                            })
                                            SoundPlayer.addEventListener('FinishedPlaying', (x) => {
                                                if (x.success) {
                                                    setPlay(false);
                                                }
                                            })
                                        } else {


                                            Sound.play((success) => {
                                                if (success) {
                                                    console.log('Successfully finished playing');

                                                } else {
                                                    console.log('Playback failed due to audio decoding errors');
                                                }
                                            });
                                            // SoundPlayer.addEventListener('FinishedLoadingFile', (x) => {
                                            //     if (x.success) {
                                            //         setPlay(true);
                                            //     }
                                            // })
                                        }
                                    } else {
                                        SoundPlayer.stop();
                                        setPlay(false);
                                    }
                                } catch (e) {
                                    console.log(`cannot play the sound file`, e)
                                }

                            }} style={{
                                width: 80,
                                borderRadius: 12,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: colors.primary,

                            }}>
                                <Icon type='ionicon' name={play ? 'stop' : 'play'} color={colors.white} size={32} />
                            </TouchableOpacity>


                            {editDesain && <TouchableOpacity onPress={pickAudio} style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10,
                                marginVertical: 5,
                            }}>
                                <Icon type='ionicon' name='create-outline' />
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 12,
                                }}>Ubah Audio</Text>
                            </TouchableOpacity>}
                        </View>
                    </View>
                    <View style={styles.iconContainer}>

                        <TouchableOpacity onPress={deleteDesain}>
                            <Image style={styles.icondelete} source={require('../../assets/delete.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Edit', item)}>
                            <Image style={styles.icon} source={require('../../assets/edit.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={shareDesain}>
                            <Image style={styles.icon} source={require('../../assets/share.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            }

            {
                loading && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            }

            <MyButton onPress={() => Linking.openURL('https://onlic.okeadmin.com/desain/detail/' + item.id_desain)} title="Download" warna={colors.danger} radius={0} colorText={colors.white} iconColor={colors.white} Icons="download-outline" />
        </ImageBackground>
    )
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