import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { MyGap, MyHeader } from '../../components';
import { MyDimensi, colors, fonts } from '../../utils';
import { MYAPP } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';

export default function EksplorasiInput({navigation}) {
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
                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, textAlign: 'center' }}>Lembar Kerja Siswa</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>Kelompok:</JustifiedText>
                        <MyGap jarak={5} />
                        <TextInput style={{ borderWidth: 1, borderRadius: 10, backgroundColor: 'white', paddingLeft: 10, paddingRight: 10, color: 'black', fontSize: 12 }}
                            placeholder='Isi Kelompok' placeholderTextColor='gray'
                        />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>Nama Anggota Kelompok:</JustifiedText>
                        <MyGap jarak={5} />
                        <TextInput style={{ borderWidth: 1, borderRadius: 10, backgroundColor: 'white', paddingLeft: 10, paddingRight: 10, color: 'black', fontSize: 12 }}
                            placeholder='Isi Nama Anggota Kelompok' placeholderTextColor='gray'
                        />
                    </View>
                    <MyGap jarak={10} />

                    <TouchableNativeFeedback>
                        <View style={{ padding: 10, backgroundColor: '#D9D9D9', borderRadius: 30 }}>
                            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', color: '#989898' }}>Tambah</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <MyGap jarak={20} />

                    <View>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Tujuan :{'\n'}
                            Siswa dapat menulis puisi dengan memanfaatkan{'\n'}
                            <Text style={{ fontStyle: 'italic' }}>dolabololo.</Text>
                        </JustifiedText>
                    </View>

                    <MyGap jarak={10} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, textAlign: 'center' }}>
                            Puisi Bermuatan <Text style={{ fontStyle: 'italic' }}>Dolabololo</Text>
                        </Text>
                    </View>

                    <MyGap jarak={10} />

                    <View>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Petunjuk : {'\n'}
                            1. Tulislah nama kelompok dan anggota kelompok pada tempat yang disediakan. {'\n'}
                            2. Ambil kartu yang berisikan <Text style={{ fontStyle: "italic" }}>dolabololo</Text> yang telah disiapkan oleh guru. {'\n'}
                            3. Bekerjalah dengan teman kelompokmu untuk dapat menyelesaikan tugas dalam LKS ini. {'\n'}
                        </JustifiedText>
                    </View>

                    <MyGap jarak={20} />

                    <View>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Kegiatan:{'\n'}
                            Ikuti langkah-langkah berikut untuk dapat menulis puisi dengan memanfaatkan dolabololo.{'\n'}
                            {'\n'}
                            1. Baca dan lisankanlah bersama teman kelompokmu bentuk <Text style={{ fontStyle: 'italic' }}>dolabololo</Text> dalam kartu yang telah disiapkan oleh guru.{'\n'}
                            2. Terjemahkanlah dolabololo dalam kartu tersebut ke dalam bahasa Indonesia. Tuliskanlah terjemahan tersebut ke dalam kotak 1 berikut.
                        </JustifiedText>
                    </View>

                    <MyGap jarak={10} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Kotak 1</Text>
                        <MyGap jarak={10} />
                        <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, color: 'black', fontFamily: fonts.primary[400], fontSize: 12, borderRadius: 10, borderWidth: 1 }}
                            placeholder='Terjemahkan' placeholderTextColor='gray' />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            3. Tentukanlah tema yang terdapat dalam dolabololo yang telah diterjemahkan tersebut. Tulislah tema tersebut pada kotak 2 berikut.
                        </JustifiedText>
                    </View>

                    <MyGap jarak={10} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Kotak 2</Text>
                        <MyGap jarak={10} />
                        <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, color: 'black', fontFamily: fonts.primary[400], fontSize: 12, borderRadius: 10, borderWidth: 1 }}
                            placeholder='Tema' placeholderTextColor='gray' />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            4. Tentukanlah gaya bahasa yang digunakan dalam dolabololo yang telah diterjemahkan tersebut. Tulislah bentuk gaya bahasa tersebut pada kotak berikut.
                        </JustifiedText>
                    </View>

                    <MyGap jarak={10} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Kotak 3</Text>
                        <MyGap jarak={10} />
                        <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, color: 'black', fontFamily: fonts.primary[400], fontSize: 12, borderRadius: 10, borderWidth: 1 }}
                            placeholder='Gaya Bahasa' placeholderTextColor='gray' />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            5. Tentukanlah nilai atau pesan moral yang terdapat dalam dolabololo yang telah diterjemahkan tersebut. Tulislah nilai atau pesan moral tersebut pada kotak 4 berikut.
                        </JustifiedText>
                    </View>

                    <MyGap jarak={10} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Kotak 4</Text>
                        <MyGap jarak={10} />
                        <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, color: 'black', fontFamily: fonts.primary[400], fontSize: 12, borderRadius: 10, borderWidth: 1 }}
                            placeholder='Pesan' placeholderTextColor='gray' />
                    </View>

                    <MyGap jarak={20} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Tantangan!</Text>
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Buatlah sebuah puisi dengan memanfaatkan unsur –unsur pembangun yang terdapat dalam dolabololo yang telah diidentifikasi sebelumnya. Ikutilah instruksi yang diberikan oleh guru dan tata cara yang telah disediakan dalam kotak berikut ini!
                        </JustifiedText>
                    </View>

                    <MyGap jarak={10} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>1. Mari ciptakan imajinasi!</Text>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            a. Isilah kotak dibawah ini dengan terjemahan {'\n'}<Text style={{ fontStyle: 'italic' }}>dolabololo</Text> pada kotak 1
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, fontSize: 12, fontFamily: fonts.primary[400], color: "black", borderWidth: 1, borderRadius: 10 }}
                            placeholder='Isi jawaban' />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            b. Ciptakanlah sepenggal kalimat imajinatif yang memiliki bentuk dan jumlah larik seperti terjemahan <Text style={{ fontStyle: 'italic' }}>dolabololo</Text> pada kotak sebelumnya. Tulislah kalimat imajinatif tersebut pada kotak di bawah ini.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, fontSize: 12, fontFamily: fonts.primary[400], color: "black", borderWidth: 1, borderRadius: 10 }}
                            placeholder='Isi jawaban' />
                    </View>

                    <MyGap jarak={20} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>2. Mari membangun ide dan gagasan!</Text>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            a. Isilah kotak dibawah ini dengan tema <Text style={{ fontStyle: 'italic' }}>dolabololo</Text> pada kotak 2.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, fontSize: 12, fontFamily: fonts.primary[400], color: "black", borderWidth: 1, borderRadius: 10 }}
                            placeholder='Isi jawaban' />
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            b. Ciptakanlah sebuah judul yang menggambarkan tema yang terdapat pada kotak sebelumnya.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, fontSize: 12, fontFamily: fonts.primary[400], color: "black", borderWidth: 1, borderRadius: 10 }}
                            placeholder='Isi jawaban' />
                    </View>

                    <MyGap jarak={20} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>3.Mari merakit puisi!</Text>
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Rakitlah sebuah puisi dengan memanfaatkan unsur –unsur pembangun yang terdapat dalam dolabololo yang telah diidentifikasi sebelumnya dan ikutilah instruksi yang diberikan oleh guru. Gunakanlah kotak untuk merakit puisi bermuatan dolabololo yang terdapat pada halaman berikutnya.
                        </JustifiedText>
                    </View>

                    <MyGap jarak={20} />

                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, textAlign: 'center' }}>Kotak Merakit Puisi yang Bermuatan{'\n'}
                            <Text style={{ fontStyle: "italic" }}>Dolabololo</Text>
                        </Text>

                        <MyGap jarak={20} />

                        <View>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12, fontStyle: "italic" }}>
                                Dolabololo :
                            </JustifiedText>
                            <MyGap jarak={5} />
                            <TextInput style={{ backgroundColor: 'white', fontSize: 12, fontFamily: fonts.primary[400], paddingRight: 10, paddingLeft: 10, borderRadius: 10, borderWidth: 1 }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                Tema :
                            </JustifiedText>
                            <MyGap jarak={5} />
                            <TextInput style={{ backgroundColor: 'white', fontSize: 12, fontFamily: fonts.primary[400], paddingRight: 10, paddingLeft: 10, borderRadius: 10, borderWidth: 1 }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                Judul :
                            </JustifiedText>
                            <MyGap jarak={5} />
                            <TextInput style={{ backgroundColor: 'white', fontSize: 12, fontFamily: fonts.primary[400], paddingRight: 10, paddingLeft: 10, borderRadius: 10, borderWidth: 1 }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                Kalimat Imajinatif :
                            </JustifiedText>
                            <MyGap jarak={5} />
                            <TextInput style={{ backgroundColor: 'white', fontSize: 12, fontFamily: fonts.primary[400], paddingRight: 10, paddingLeft: 10, borderRadius: 10, borderWidth: 1 }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                Gaya Bahasa :
                            </JustifiedText>
                            <MyGap jarak={5} />
                            <TextInput style={{ backgroundColor: 'white', fontSize: 12, fontFamily: fonts.primary[400], paddingRight: 10, paddingLeft: 10, borderRadius: 10, borderWidth: 1 }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                Kalimat Imajinatif :
                            </JustifiedText>
                            <MyGap jarak={5} />
                            <TextInput style={{ backgroundColor: 'white', fontSize: 12, fontFamily: fonts.primary[400], paddingRight: 10, paddingLeft: 10, borderRadius: 10, borderWidth: 1 }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                Pesan :
                            </JustifiedText>
                            <MyGap jarak={5} />
                            <TextInput style={{ backgroundColor: 'white', fontSize: 12, fontFamily: fonts.primary[400], paddingRight: 10, paddingLeft: 10, borderRadius: 10, borderWidth: 1 }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                Kalimat Imajinatif :
                            </JustifiedText>
                            <MyGap jarak={5} />
                            <TextInput style={{ backgroundColor: 'white', fontSize: 12, fontFamily: fonts.primary[400], paddingRight: 10, paddingLeft: 10, borderRadius: 10, borderWidth: 1 }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>3. Mari memadukan Keutuhan Puisi!</Text>
                            <MyGap jarak={10} />
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                Susunlah kembali bagungunan struktur puisi yang telah dikerjakan pada kegiatan merakit puisi sebelumnya menjadi sebuah karya puisi yang utuh. Tuliskanlah puisi tersebut ke dalam kotak di bawah ini.
                            </JustifiedText>
                        </View>

                        <MyGap jarak={10} />

                        <View>
                            <Text style={{ fontSize: 12, fontFamily: fonts.primary[600] }}>Puisi:</Text>
                            <MyGap jarak={10} />
                            <TextInput style={{ backgroundColor: 'white', paddingRight: 10, paddingLeft: 10, borderWidth: 1, borderRadius: 10, fontSize: 12, fontFamily: fonts.primary[400] }}
                                placeholder='Isi jawaban' placeholderTextColor='gray' />
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                    </View>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('Komunikasi')}>
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
