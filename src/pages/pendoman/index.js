import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'


export default function Pendoman({navigation}) {
    const backPage = () => {
        navigation.goBack()
      };
  return (
  <ImageBackground source={require('../../assets/bghome.png')} style={{
    flex:1,
    width:'100%',
    height:"100%"
  }}>
 <View style={{padding:10, backgroundColor:colors.secondary, borderBottomRightRadius:20, borderBottomLeftRadius:20,
 flexDirection:"row"}}>
 <View style={{justifyContent:'center'}}>
        <TouchableNativeFeedback onPress={backPage}>
        <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
        </TouchableNativeFeedback>
 </View>

 <View style={{alignSelf:'center', justifyContent:"center", left:70}}>
    <Text style={{fontFamily:fonts.primary[600], fontSize:25, textAlign:'center'}}>Pendoman</Text>
 </View>

 </View>
    <ScrollView>
    <View style={{padding:10,}}>

         <View style={{padding:10, }}>

            {/* NANTI DISINI AKAN ADA HASIL DARI PEDOMAN */}
           <Image source={require('../../assets/pedomanteks.png')} style={{
            width:321, height:975
           }}/>
         </View>
      
    </View>
    </ScrollView>
  </ImageBackground>
  )
}