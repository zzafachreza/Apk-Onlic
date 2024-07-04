import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TouchableNativeFeedback } from 'react-native';
import { MyGap, MyHeader } from '../../components';
import { MyDimensi, colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

export default function Orientasi({navigation}) {
  const backPage = () => {
    navigation.goBack();
  };

  const JustifiedText = ({ children, style }) => (
    <Text style={[style, styles.justifiedText]}>{children}</Text>
  );

  return (
    <ImageBackground source={require('../../assets/bghome.png')} style={{ flex: 1, width: '100%', height: "100%" }}>
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

          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Tahap Orientasi: Mengenal Puisi dan <Text style={{ fontStyle: 'italic' }}>Dolabololo</Text> </Text>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>• Apa itu puisi ?</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Puisi merupakan jenis karya sastra yang bentuknya dipilih dan ditata dengan cermat sehingga mampu mempertajam kesadaran orang akan sesuatu pengalaman dan membangkitkan tanggapan khusus melalui bunyi, irama, dan makna khusus. Puisi juga merupakan seni berbahasa, yang disusun dengan menggunakan bahasa sebagai bahan baku dalam sebuah karya sastra.
              </JustifiedText>
            </View>
          </View>

          <View style={{ padding: 10, top: -10 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>• Apa saja unsur pembangun sebuah puisi ?</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Unsur pembangun sebuah puisi terdiri dari unsur instrinstik dan ektrinstik. Unsur pembangun intrinsik adalah unsur yang terdapat di dalam puisi dan terbagi menjadi dua, yaitu unsur batin dan fisik. Dalam unsur batin terdapat amanat, tema, rasa, dan nada, sedangkan dalam unsur fisik terdapat diksi, tipografi, imaji, rima, dan gaya bahasa.
              </JustifiedText>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10, top: 10 }}>Berikut penjelasanya :</JustifiedText>
            </View>
          </View>

          <View style={{ padding: 10, top: -10 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Unsur Batin</Text>
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Tema</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Tema adalah gagasan pokok dalam puisi, dengan adanya tema maka seorang penyair dapat menentukan diksi yang akan digunakannya
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Rasa</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Rasa adalah ungkapan perasaan seorang penyair yang dituangkan ke dalam puisinya.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Nada</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Nada adalah cara seorang penyair menyampaikan puisi dengan susunan kata-katanya, nada juga dianggap sebagai sikap seorang penyair dalam puisi sehingga efeknya dapat terasa oleh para pembaca.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Amanat</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Amanat adalah pesan yang ingin disampaikan seorang penyair kepada pembaca puisinya.
              </JustifiedText>
            </View>
          </View>

          <View style={{ padding: 10, top: -10 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Unsur Fiksi</Text>
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Diksi</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Diksi adalah pilihan kata yang tepat. Dengan menggunakan diksi maka puisi jadi terkesan lebih indah dan berguna sebagai unsur yang membantu penyair dalam mengungkapkan ekspresinya.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Tipografi</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Tipografi adalah tata cara peletakan huruf dalam puisi, tipografi juga berguna untuk menggambarkan tema dan isi pada puisi.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Imaji</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Nada adalah cara seorang penyair menyampaikan puisi dengan susunan kata-katanya, nada juga dianggap sebagai sikap seorang penyair dalam puisi sehingga efeknya dapat terasa oleh para pembaca.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Rima</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Rima adalah kesamaan bunyi atau nada.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Gaya Bahasa</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Gaya bahasa adalah cara penyair dalam menggunakan rangkaian kata guna mengungkapkan sesuatu.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Selanjutnya Unsur pembangun ekstrinsik adalah unsur yang terdapat di luar puisi dan terbagi menjadi tiga, yaitu unsur biografi, unsur sosial, dan unsur nilai. Berikut ini penjelasannya:
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Biografi</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Unsur biografi adalah unsur yang berkaitan dengan latar belakang seorang penyair.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Sosial</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Unsur sosial adalah unsur yang berkaitan dengan kondisi masyarakat ketika puisi itu dibuat.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>• Nilai</Text>
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                Unsur nilai adalah unsur yang berkaitan dengan pendidikan, politik, sosial, ekonomi, budaya, adat istiadat, dan lainnya.
              </JustifiedText>
            </View>
            <MyGap jarak={10} />
            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>
                <Text style={{ fontFamily: fonts.primary[600] }}>Contoh Puisi</Text> Karya Sapardi Djoko Damono dengan Judul “yang fana adalah waktu”
              </JustifiedText>
            </View>
          </View>

          <View style={{ padding: 10, backgroundColor: colors.white, borderRadius: 10 }}>
            <Text style={{ fontFamily: fonts.primary[800], textAlign: 'left', fontSize: 10 }}>YANG FANA ADALAH WAKTU - SAPARDI DJOKO DAMONO</Text>
            <JustifiedText style={{ fontFamily: fonts.primary[400], textAlign: 'left', fontSize: 10 }}>
              Yang fana adalah waktu. Kita abadi:{'\n'}
              memungut detik demi detik, merangkainya seperti bunga{'\n'}
              sampai pada suatu hari{'\n'}
              kita lupa untuk apa.{'\n'}
              “Tapi, yang fana adalah waktu, bukan?”{'\n'}
              tanyamu.{'\n'}
              Kita abadi.{'\n'}
              {'\n'}
              Perahu Kertas,{'\n'}
              Kumpulan Sajak,{'\n'}
              1982
            </JustifiedText>
          </View>
          <MyGap jarak={20} />
          <TouchableNativeFeedback onPress={() => navigation.navigate('OrientasiInput')}>
            <View style={{ padding: 10, backgroundColor: colors.tertiary, borderRadius: 30 }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, textAlign: 'center', color: "white" }}>Selanjutnya</Text>
            </View>
          </TouchableNativeFeedback>

        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  justifiedText: {
    textAlign: 'justify'
  }
});
