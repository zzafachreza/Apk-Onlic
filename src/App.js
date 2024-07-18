import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import Router from './routes';
import { LogBox, StatusBar, Text, View, Button, Linking, Alert } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { colors } from './utils';
import * as RootNavigation from './RootNavigation';
import moment from 'moment';

export default function App({ navigation }) {
  LogBox.ignoreAllLogs();

  const config = {
    screens: {
      ResultNote: 'ResultNote/:id',
    },
  };

  const linking = {
    prefixes: ['https://onlic.okeadmin.com', 'onlic://'],
    config
  };

  // const isFocus = useIsFocused();





  useEffect(() => {

    // Get the deep link used to open the app
    // const getUrl = async () => {
    //   const initialUrl = await Linking.getInitialURL();
    //   console.log('teest url -> ' + moment().format('YYYY-MM-DD H:mm:s') + ' = ', initialUrl);
    //   if (initialUrl === null) {
    //     return;
    //   }

    //   if (initialUrl.includes('ResultNotes')) {
    //     let ID = initialUrl.split("ResultNotes/")[1];
    //     RootNavigation.navigate('ResultNotes', {
    //       id_notes: ID
    //     });
    //   } else if (initialUrl.includes('Detail')) {
    //     let ID = initialUrl.split("Detail/")[1];
    //     RootNavigation.navigate('Detail', {
    //       id_desain: ID
    //     });
    //   }
    // };


    // getUrl();

  }, []);
  return (
    <NavigationContainer linking={linking} ref={RootNavigation.navigationRef}>
      <StatusBar hidden backgroundColor={colors.white} barStyle="dark-content" />
      <Router />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
}
