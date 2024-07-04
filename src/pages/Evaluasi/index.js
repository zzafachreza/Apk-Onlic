import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { MyGap, MyHeader } from '../../components';
import { MyDimensi, colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

export default function Evaluasi({navigation}) {
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
            <View style={{ padding: 10, backgroundColor: colors.secondary, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, flexDirection: "row" }}>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableNativeFeedback onPress={backPage}>
                        <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
                    </TouchableNativeFeedback>
                </View>

                <View style={{ alignSelf: 'center', justifyContent: "center", left: 80 }}>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, textAlign: "center" }}>Langkah Kelima</Text>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 25, textAlign: 'center' }}>Evaluasi</Text>
                </View>
            </View>

            <ScrollView>
                <View style={{ padding: 10 }}>
                    <View style={{ padding: 10 }}>
                        <View>
                            <JustifiedText style={{ fontSize: 12, fontFamily: fonts.primary[600], textAlign: 'left' }}>
                                Ayooo.. menilai hasil karya puisi yang telah dihasilkan serta merefleksi pembelajaran yang telah berlangsung.
                            </JustifiedText>
                            <MyGap jarak={10} />
                            <JustifiedText style={{ fontSize: 12, fontFamily: fonts.primary[400] }}>
                                Yuukk… Ikuti langkah-langkah dibawah ini ya…!
                            </JustifiedText>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                1. Seluruh anggota kelompok mengumpulkan hasil karya mereka kepada guru.
                            </JustifiedText>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                2. Masing-masing anggota kelompok yang tidak mendapatkan kesempatan untuk mempresentasikan atau membacakan hasil karyanya di depan, diwajibkan untuk menyampaikan komentar mereka terhadap hasil karya kelompok lain yang telah dipersentasikan di depan kelas sebelumnya. Komentar tersebut berupa masukan dan saran tentang penggunaan diksi, gaya bahasa, bunyi, pesan ataupun makna yang terdapat dalam puisi tersebut.
                            </JustifiedText>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                3. Guru juga memberikan komentar berupa masukan dan saran tentang penggunaan diksi, gaya bahasa, bunyi, pesan ataupun makna terhadap hasil karya siswa yang telah dipresentasikan di depan kelas.
                            </JustifiedText>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                4. Siswa dan guru sama-sama merefleksi proses pembelajaran yang telah berlangsung.
                            </JustifiedText>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                5. Hasil karya puisi siswa yang telah dikumpulkan akan dinilai oleh guru dengan menggunakan pedoman penskoran hasil karya puisi siswa.
                            </JustifiedText>

                            <View style={{ padding: 20 }}>
                                <TouchableNativeFeedback onPress={() => navigation.navigate('Pendoman')}>
                                    <View style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 30 }}>
                                        <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, textAlign: 'center' }}>Pedoman Penskoran</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                        <MyGap jarak={20} />
                    </View>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
                        <View style={{ padding: 10, backgroundColor: colors.tertiary, borderRadius: 30 }}>
                            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', color: 'white' }}>Selesai</Text>
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
