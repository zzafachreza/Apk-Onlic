import React, { useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home, Account, AccountEdit, TeknisiHome, AccountTeknisi, History, Tumbuhanmu, Quiz, TingkatSatu, NotesPage, InputNote, ResultNote, TingkatDua, Logout } from '../pages';
import { colors } from '../utils';
import { BottomNavigator, TeknisiBottomNavigator } from '../components';
import TingkatTiga from '../pages/quiz/tingkattiga';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      if (e.target.includes('Logout')) {
        e.preventDefault();
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
      }
    });

    return unsubscribe;
  }, [navigation]);


};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Tumbuhanmu"
        component={Tumbuhanmu}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="QuizTingkatPertama"
        component={TingkatSatu}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="QuizTingkatKedua"
        component={TingkatDua}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="QuizTingkatTiga"
        component={TingkatTiga}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Notes"
        component={NotesPage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="InputNotes"
        component={InputNote}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ResultNotes"
        component={ResultNote}
        options={{
          headerShown: false,
        }}
      />

  
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
