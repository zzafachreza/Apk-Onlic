import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { MyGap, MyHeader } from '../../components';
import { MyDimensi, colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

export default function Eksplorasi({navigation}) {
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

                <View style={{ alignSelf: 'center', justifyContent: "center", left: 20 }}>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, textAlign: "center" }}>Langkah ketiga</Text>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 25, textAlign: 'center' }}>Eksplorasi & Kreasi</Text>
                </View>
            </View>

            <ScrollView>
                <View style={{ padding: 10 }}>
                    <View style={{ padding: 10 }}>
                        <JustifiedText style={{ fontFamily: fonts.primary[600] }}>
                            Ayo... Menciptakan sebuah puisi dengan mengadaptasikan unsur yang terdapat dalam dolabololo
                        </JustifiedText>
                        <MyGap jarak={20} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Yuukk… Ikuti langkah-langkah dibawah ini ya…!
                        </JustifiedText>
                        <MyGap jarak={5} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            1. Langkah pertama adalah belajar Menciptakan imajinasi.{'\n'}
                            • Siswa diajak oleh guru untuk belajar berimajinasi dengan tidak melihat dolabololo sebagai ungkapan tradisional yang kuno, tetapi sebagai sebuah ungkapan syair yang indah dan memiliki unsur pembangun yang bisa dimanfaatkan dalam menulis sebuah puisi.{'\n'}
                            • Guru memberi contoh kepada siswa, melengkapi sepenggal dolabololo dengan menyusun frasa dan kalimat imajinatif, misalnya sepenggal dolabololo berikut ini:
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <Image source={require('../../assets/eksplorasiteks.png')} style={{
                            width: 301, height: 162, alignSelf: 'center'
                        }} />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            2. Langkah kedua setelah Setelah menciptakan imajinasi adalah <Text style={{ fontWeight: 'bold' }}>membangun ide atau gagasan.</Text> Guru mengajak siswa menjadikan Tema yang telah ditemukan dalam dolabololo pada kegiatan sebelumnya, sebagai titik fokus siswa menumpahkan kosa kata imajinatif mereka. Terutama judul yang diciptakan dari puisi tersebut haruslah menggambarkan tema dari dolabololo tersebut.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            Contoh proses membangun ide atau gagasan dengan memanfaatkan dolabololo:
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <Image source={require('../../assets/eksplorasiteksdua.png')} style={{
                            width: 288, height: 162, alignSelf: 'center'
                        }} />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            3. Langkah ketiga adalah siswa <Text style={{ fontWeight: 'bold' }}>merakit struktur puisi</Text> (Unsur-unsur pembangun dolabololo yang ditemukan dalam kegiatan sebelumnya akan disusun dan diadaptasikan ke dalam sebuah struktur pembangun puisi yang telah di tentukan judul dari tema dolabololo dalam kegiatan sebelumnya).{'\n'}
                            • Siswa menuliskan kembali ide atau tema serta judul yang telah ditentukan pada langkah sebelumnya sebelumnya.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <Image source={require('../../assets/eksplorasitekstiga.png')} style={{
                            width: 288, height: 162, alignSelf: 'center'
                        }} />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            • Siswa menuliskan lagi kalimat imajinatif, sambungan dari dolabololo yang telah ditentukan pada langkah belajar berimajinasi sebelumnya.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <Image source={require('../../assets/eksplorasiteksempat.png')} style={{
                            width: 217, height: 70, alignSelf: 'center'
                        }} />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            • Selanjutnya siswa berimajinasi kembali menciptakan frase dan kalimat imajinatif yang memiliki gaya bahasa. Gaya bahasa yang dikembangkan bisa sama dengan gaya bahasa yang terdapat dalam dolabololo ataupun bukan.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <Image source={require('../../assets/eksplorasitekslima.png')} style={{
                            width: 298, height: 227, alignSelf: 'center'
                        }} />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            • Siswa menciptakan kalimat imajinatif yang memiliki pesan yang sama dengan dolabololo serta memiliki keterpaduan diksi dengan kalimat imajinatif yang ditentukan sebelumnya.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <Image source={require('../../assets/eksplorasiteksenam.png')} style={{
                            width: 298, height: 157, alignSelf: 'center'
                        }} />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            Berikut alur proses merakit unsur puisi yang telah dideskripsikan sebelumnya.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <Image source={require('../../assets/eksplorasitekstuju.png')} style={{
                            width: 314, height: 599, alignSelf: 'center'
                        }} />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            4. Langkah terakhir adalah siswa memadukan keutuhan puisi.
                        </JustifiedText>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            • Siswa menyusun kembali bangunan stuktur puisi yang telah dikerjakan dalam kegitan sebelumnya.
                        </JustifiedText>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            • Guru memberikan pemahaman kepada siswa bahwa puisi yang utuh bukan berarti harus panjang dan lebar, puisi yang pendek juga belum tentu utuh dan padu. Akan tetapi puisi yang utuh adalah puisi yang tuntas, yakni tidak menyisahkan batahan dan pertanyaan. Dengan demikian, dalam model pembelajaran bermuatan dolabololo ini tidak ada ketetapan jumlah larik dan bait dalam sebuah puisi, melainkan siswa sendirilah yang menentukan jumlah larik dan baitnya.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            Berikut contoh puisi bermuatan dolabololo yang telah selesai di susun.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <Image source={require('../../assets/eksplorasiteksdelapan.png')} style={{
                            width: 312, height: 238, alignSelf: 'center'
                        }} />
                    </View>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('EksplorasiInput')}>
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
