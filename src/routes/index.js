import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  MasukSebagai,
  LoginTeknisi,
  RegisterTeknisi,
  PenggunaanAC,
  PemesananServiceAC,
  PemesananServiceACWA,
  RiwayatPemesanan,
  TeknisiHome,
  TeknisiRiwayatPemesanan,
  PemesananServiceACTeknisi,
  AccountTeknisi,
  Orientasi,
  OrientasiInput,
  OrientasiFinal,
  Jelajahi,
  JelajahiNomor,
  JelajahiInput,
  Eksplorasi,
  EksplorasiInput,
  Komunikasi,
  Evaluasi,
  Pendoman,
  History,
  Tumbuhanmu,
  Quiz,
  TingkatSatu,
  NotesPage,
  InputNote,
  ResultNote,



} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator, TeknisiBottomNavigator } from '../components';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

const TeknisiMainApp = () => {
  return(
    <Tab.Navigator initialRouteName='' tabBar={props => <TeknisiBottomNavigator {...props}/>}>
    <Tab.Screen name="TeknisiHome" component={TeknisiHome}/>
    <Tab.Screen name="AccountTeknisi" component={AccountTeknisi}/>
    </Tab.Navigator>
  )
}

export default function Router() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
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
        name="Eksplorasi"
        component={Eksplorasi}
        options={{
          headerShown: false,

        }}
      />

      
<Stack.Screen
        name="EksplorasiInput"
        component={EksplorasiInput}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Komunikasi"
        component={Komunikasi}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Evaluasi"
        component={Evaluasi}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Pendoman"
        component={Pendoman}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="History"
        component={MainApp}
        options={{
          headerShown: false,

        }}
/>


<Stack.Screen
        name="AccountTeknisi"
        component={TeknisiMainApp}
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
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

   












    </Stack.Navigator>
  );
}
