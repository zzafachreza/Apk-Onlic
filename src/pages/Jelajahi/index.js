import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { MyGap, MyHeader } from '../../components';
import { MyDimensi, colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

export default function Jelajahi({navigation}) {
    const backPage = () => {
        navigation.goBack();
    };

    const JustifiedText = ({ children, style }) => (
        <Text style={[style, styles.justifiedText]}>{children}</Text>
    );

    return (
        <ImageBackground source={require('../../assets/bghome.png')} style={{
            flex: 1,
            width: '100%',
            height: "100%"
        }}>
            {/* HEADERS */}
            <View style={{ padding: 10, backgroundColor: colors.secondary, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, flexDirection: "row" }}>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableNativeFeedback onPress={backPage}>
                        <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
                    </TouchableNativeFeedback>
                </View>

                <View style={{ alignSelf: 'center', justifyContent: "center", left: 90 }}>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, textAlign: "center" }}>Langkah Kedua</Text>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 25, textAlign: 'center' }}>Jelajahi</Text>
                </View>
            </View>

            <ScrollView>
                <View style={{ padding: 10 }}>
                    <View style={{ padding: 10 }}>
                        <JustifiedText style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>
                            Ayo... kita jelajahi…. mencari dan menemukan unsur-unsur konstruksi puisi yang ada dalam bentuk <Text style={{ fontStyle: "italic" }}>dolabololo.</Text>
                        </JustifiedText>
                    </View>

                    <MyGap jarak={20} />

                    <View style={{ padding: 10 }}>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Yuukk… Ikuti langkah-langkah dibawah ini ya…!
                        </JustifiedText>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            1. Bersama guru, siswa membentuk kelompok kecil yang berjumlah 2 orang.
                        </JustifiedText>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            2. Masing-masing siswa bisa membuka kartu yang berisikan dolabololo dalam kotak dibagian pojok atas!
                        </JustifiedText>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            3. Masing-masing anggota kelompok diberikan waktu untuk :{'\n'}
                            • saling melisankan bentuk dolabolo yang terdapat dalam kartu yang telah mereka miliki masing-masing.{'\n'}
                            • mengartikan bentuk dolabololo yang terdapat dalam kartu ke dalam bahasa Indonesia.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Contoh:
                        </JustifiedText>
                        <Image source={require('../../assets/langkahteks.png')} style={{
                            width: 307, height: 192
                        }} />
                        <MyGap jarak={20} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            • berdikusi menemukan unsur pembangun puisi( tema, gaya bahasa, serta pesan moral) yang terdapat dalam dolabololo yang telah diartikan dalam bahasan Indonesia sebelumya.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Contoh:
                        </JustifiedText>
                        <Image source={require('../../assets/langkahteksdua.png')} style={{
                            width: 302, height: 474
                        }} />
                    </View>

                    <MyGap jarak={27} />
                    <TouchableNativeFeedback onPress={() => navigation.navigate('JelajahiNomor')}>
                        <View style={{ padding: 10, backgroundColor: colors.tertiary, borderRadius: 30 }}>
                            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', color: 'white' }}>Selanjutnya</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    justifiedText: {
        textAlign: 'justify'
    }
});
