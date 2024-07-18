import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking, BackHandler } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'moment/locale/id';
import { MyGap, MyHeader } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});
  const isFocus = useIsFocused();

  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});
  const [mac, setMac] = useState('');

  const _getTransaction = async () => {



    DeviceInfo.getMacAddress().then((mac) => {
      // "E5:12:D8:E5:69:97"
      // console.log(mac);
      setMac(mac);
      storeData('mac', mac)
    });


    await getData('user').then(u => {
      setUser(u);
    });

    await axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    });
    getUrlAsync();
  }

  const getUrlAsync = async () => {
    let initialUrl = await Linking.getInitialURL();
    console.log(initialUrl);
    if (initialUrl === null) {
      return;
    }

    if (initialUrl.includes('ResultNotes')) {
      let ID = initialUrl.split("ResultNotes/")[1];
      navigation.replace('ResultNotes', {
        id_notes: ID
      });

    } else if (initialUrl.includes('Detail')) {
      let ID = initialUrl.split("Detail/")[1];
      navigation.replace('Detail', {
        id_desain: ID
      });

    }
  };

  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }


    // getUrlAsync();

  }, [isFocus]);




  const __renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(item.modul, item)}>
        <View style={{
          flex: 1,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.secondary,
          margin: 5,
          height: windowHeight / 8,
        }}>
          <Image source={{ uri: item.image }} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
          <Text style={{
            marginTop: 10,
            fontFamily: fonts.secondary[600],
            fontSize: 8,
            color: colors.secondary,
            textAlign: 'center'
          }}>{item.judul}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <ImageBackground source={require('../../assets/bghome.png')} style={{ flex: 1, width: "100%", height: "100%" }}>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Image source={require('../../assets/logo.png')} style={{ width: 281, height: 66 }} />
          </View>

          {/* MAIN CONTENT */}
          <View style={{ padding: 10, top: 0, marginTop: 20 }}>
            {/* DESAIN TUMBUHANMU */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('Tumbuhanmu')}>
              <View style={{
                padding: 10,
                borderWidth: 2.5,
                borderRadius: 20,
                borderColor: '#dededede',
                flexDirection: "row",
                justifyContent: 'space-around',
                backgroundColor: 'white'
              }}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                  <Text style={{
                    fontFamily: fonts.primary[700],
                    fontSize: 20,
                    color: colors.primary,
                    textAlign: "right"
                  }}>DESAIN {'\n'}TUMBUHANMU</Text>
                </View>
                <View>
                  <Image source={require('../../assets/tumbuhan.png')} style={{ width: 93, height: 109 }} />
                </View>
              </View>
            </TouchableNativeFeedback>
            <MyGap jarak={15} />

            {/* QUIZ MENARIK */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('Quiz')}>
              <View style={{
                padding: 10,
                borderWidth: 2.5,
                borderRadius: 20,
                borderColor: '#dededede',
                flexDirection: "row",
                justifyContent: 'space-between',
                backgroundColor: 'white'
              }}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{
                    fontFamily: fonts.primary[700],
                    fontSize: 20,
                    color: colors.primary,
                    textAlign: "right"
                  }}>YUK COBA{'\n'}QUIZ MENARIK!</Text>
                </View>
                <View style={{ right: 20 }}>
                  <Image source={require('../../assets/quiz.png')} style={{ width: 102, height: 102 }} />
                </View>
              </View>
            </TouchableNativeFeedback>
            <MyGap jarak={15} />

            {/* MY NOTES */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('Notes', {
              mac: mac
            })}>
              <View style={{
                padding: 10,
                borderWidth: 2.5,
                borderRadius: 20,
                borderColor: '#dededede',
                flexDirection: "row",
                justifyContent: 'space-between',
                backgroundColor: 'white'
              }}>
                <View style={{ justifyContent: 'center', left: 50 }}>
                  <Text style={{
                    fontFamily: fonts.primary[600],
                    fontSize: 20,
                    color: colors.primary
                  }}>MY NOTES</Text>
                </View>
                <View style={{ right: 30 }}>
                  <Image source={require('../../assets/note.png')} style={{ width: 94, height: 99 }} />
                </View>
              </View>
            </TouchableNativeFeedback>
            <MyGap jarak={15} />
          </View>
        </View>
      </ScrollView>
      <View style={{
        padding: 20, backgroundColor: "white", flexDirection: "row", justifyContent: 'space-around',
        marginBottom: 0, borderTopRightRadius: 10, borderTopLeftRadius: 10
      }}>
        <View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../assets/homeicon.png')} style={{ width: 20, height: 19 }} />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => {
            Alert.alert(
              "Konfirmasi Logout",
              "Apakah Anda ingin keluar dari aplikasi?",
              [
                {
                  text: "Tidak",
                  style: "cancel"
                },
                {
                  text: "Iya",
                  onPress: () => BackHandler.exitApp()
                }
              ],
              { cancelable: false }
            );
          }}>
            <Image source={require('../../assets/logouticon.png')} style={{ width: 19, height: 20 }} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
});
