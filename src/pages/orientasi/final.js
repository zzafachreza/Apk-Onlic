import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { MyGap, MyHeader } from '../../components';
import { MyDimensi, colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

export default function OrientasiFinal({navigation}) {
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

                <View style={{ alignSelf: 'center', justifyContent: "center", left: 80 }}>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, textAlign: "center" }}>Langkah Pertama</Text>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 25, textAlign: 'center' }}>Orientasi</Text>
                </View>
            </View>

            <ScrollView>
                <View style={{ padding: 10 }}>
                    <View>
                        <JustifiedText style={{ fontFamily: fonts.primary[400] }}>
                            Sekarang ayoooo kita kenal <Text style={{ fontWeight: '600', fontStyle: 'italic' }}>dolabololo..</Text>
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>
                            Apa itu <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>dolabololo?</Text>
                        </JustifiedText>
                        <MyGap jarak={5} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Dolabololo adalah sastra lisan Ternate yang berbentuk peribahasa atau ungkapan Tradisional. Penggunaan dolabololo dalam berinteraksi dimaksudkan agar menyadarkan dan meluluhkan hati orang yang mendengar, bahkan pesan yang di dalamnya dapat meredakan amarah, serta membangkitkan semangat.
                        </JustifiedText>
                        <MyGap jarak={10} />
                        <JustifiedText style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>
                            Nilai apa saja yang terdapat dalam <Text style={{ fontStyle: 'italic' }}>dolabololo?</Text>
                        </JustifiedText>
                        <MyGap jarak={5} />
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                            Dolabololo merupakan bagian integral dari kebudayaan lokal yang menjadi warisan adat, kebiasaan, nilai dan identitas masyarakat Maluku Utara. Sastra lisan dolabololo memiliki fungsi yang dapat direvitalisasi untuk mengantisipasi dampak negatif dari perubahan masyarakat modern Ternate.
                        </JustifiedText>
                    </View>
                    <MyGap jarak={10} />
                    <View>
                        <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 11 }}>
                            Berikut contoh dua bentuk ungkapan dolabololo tersebut!
                        </JustifiedText>
                        <MyGap jarak={5} />
                        <View style={{ padding: 10, backgroundColor: colors.primary, borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: 283, height: 126, alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontFamily: fonts.primary[600], textAlign: "center", color: "white", fontStyle: 'italic', fontSize: 12, fontWeight: 'bold' }}>
                                    Dodoto se biasa poha biasa ua
                                </Text>
                                <Text style={{ fontFamily: fonts.primary[400], textAlign: "center", color: "white", fontSize: 12 }}>
                                    (yang telah diajarkan akan kalah dengan kebiasaan)
                                </Text>
                            </View>
                        </View>
                    </View>
                    <MyGap jarak={32} />
                    <View>
                        <MyGap jarak={5} />
                        <View style={{ padding: 10, backgroundColor: colors.primary, borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: 283, height: 126, alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontFamily: fonts.primary[600], textAlign: "center", color: "white", fontStyle: 'italic', fontSize: 12, fontWeight: 'bold' }}>
                                    Rio-rio fo maku rio, haso mai I dadi kaahe
                                </Text>
                                <Text style={{ fontFamily: fonts.primary[400], textAlign: "center", color: "white", fontSize: 12 }}>
                                    (saling tolong menolong yang berat akan menjadi ringan)
                                </Text>
                            </View>
                        </View>
                    </View>
                    <MyGap jarak={20} />
                    <TouchableNativeFeedback onPress={() => navigation.navigate('Jelajahi')}>
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
