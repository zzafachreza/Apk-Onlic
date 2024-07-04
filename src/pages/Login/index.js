import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking, ImageBackground, TextInput } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    telepon: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});

  const card = new Animated.Value(-30);
  const img = new Animated.Value(-20);

  const masuk = () => {
    if (kirim.telepon == null && kirim.password == null) {
      Alert.alert(MYAPP, 'telepon dan Password tidak boleh kosong !');
    } else if (kirim.telepon == null) {
      Alert.alert(MYAPP, 'telepon tidak boleh kosong !');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password tidak boleh kosong !');
    } else {
      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('MainApp')
          }
        });
    }
  }

  useEffect(() => {
    Animated.timing(card, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    }).start();
    Animated.timing(img, {
      toValue: 0,
      duration: 850,
      useNativeDriver: false,
    }).start();
    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })
  }, []);

  const [text, setText] = useState('');
  return (
    <ImageBackground source={require('../../assets/bgimg.png')} style={styles.background}>
      <ScrollView style={styles.scrollView}>
        <Animated.View style={[styles.animatedView, { bottom: card }]}>
          <View style={styles.innerView}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.subtitle}>Dalam Bahasa Ternate berarti “Rumahnya”</Text>
            <Text style={styles.title}>
              Mari Masuk ke Rumahnya Model{'\n'}Pembelajaran MPBD{'\n'}
              (Menulis Puisi Berbasis <Text style={styles.italicText}>Dolabololo</Text>)
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, styles.textInputCentered]}
                placeholder='Isi Nama Lengkap'
                placeholderTextColor='gray'
                onChangeText={setText}
                value={text}
              />
            </View>
            <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Masuk</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </Animated.View>
        {loading && <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.secondary} size="large" />
        </View>}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    position: "relative",
  },
  animatedView: {
    padding: 10,
    flex: 1,
    margin: 10,
    borderRadius: 0,
  },
  innerView: {
    padding: 10,
    marginTop: '30%',
  },
  logo: {
    height: 129,
    width: 227,
    alignSelf: "center",
  },
  subtitle: {
    fontFamily: fonts.primary[600],
    fontSize: 10,
    textAlign: 'center',
    color: colors.primary,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 15,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 24,
  },
  italicText: {
    fontStyle: 'italic',
  },
  inputContainer: {
    marginTop: 25,
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 30,
    paddingHorizontal: 10,
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center', // Center text
  },
  textInputCentered: {
    textAlign: 'center', // Center text even when typing
  },
  button: {
    padding: 10,
    backgroundColor: colors.secondary,
    borderRadius: 30,
    marginTop: 11,
  },
  buttonText: {
    fontFamily: fonts.primary[600],
    textAlign: "center",
    fontSize: 16,
    color: colors.tertiary,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
});
