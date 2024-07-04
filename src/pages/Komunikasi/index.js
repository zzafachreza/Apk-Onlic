import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { MyGap, MyHeader } from '../../components';
import { MyDimensi, colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

export default function Komunikasi({navigation}) {
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

                <View style={{ alignSelf: 'center', justifyContent: "center", left: 60 }}>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, textAlign: "center" }}>Langkah Keempat</Text>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 25, textAlign: 'center' }}>Komunikasi</Text>
                </View>
            </View>

            <ScrollView>
                <View style={{ padding: 10 }}>
                    <View style={{ padding: 10 }}>
                        <View>
                            <JustifiedText style={{ fontSize: 12, fontFamily: fonts.primary[600], textAlign: 'left' }}>
                                Ayoo… Bacakan hasil karya berupa puisi yang bermuatan dolabololo di depan kelas!
                            </JustifiedText>
                            <MyGap jarak={10} />
                            <JustifiedText style={{ fontSize: 12, fontFamily: fonts.primary[400] }}>
                                Yuukk… Ikuti langkah-langkah dibawah ini ya…!
                            </JustifiedText>
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                1. Guru memberikan kesempatan kepada beberapa kelompok untuk membacakan hasil karyanya di depan kelas dengan cara:{'\n'}
                                • Kelompok yang sudah siap untuk membacakan hasil karya mereka di depan kelas akan melontarkan yel-yel penyemangat kelompoknya, sebagai tanda bahwa kelompok tersebut siap untuk membacakan hasil karya mereka.{'\n'}
                                • Sebelum anggota kelompok membacakan hasil karya mereka, masing-masing dari mereka harus melisankan terlebih dahulu dolabololo yang terdapat dalam kartu materi mereka, menjelaskan arti serta unsur-unsur pembangun dolabololo yang mereka temui pada saat berdiskusi.{'\n'}
                                • Setelah melisankan dolabololo serta menjelaskan arti dan unsur pembangun dolabololo, masing-masing anggota kelompok kemudian membaca{'\n'}
                            </JustifiedText>
                            <MyGap jarak={10} />
                            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                                2. Kelompok yang tidak sedang presentasi atau maju membacakan hasil karyanya diwajibkan untuk memperhatikan dan menulis hal-hal yang dijadikan saran atau masukan, yang kemudian akan dibahas atau dijadikan bahan untuk refleksi pada tahap atau langkah berikutnya yakni tahap evaluasi.
                            </JustifiedText>
                        </View>
                        <MyGap jarak={20} />
                    </View>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('Evaluasi')}>
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
