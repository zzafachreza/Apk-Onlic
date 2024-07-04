import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'


export default function History({navigation}) {
  return (
  <ImageBackground source={require('../../assets/bghome.png')} style={{
    flex:1,
    width:'100%',
    height:"100%"
  }}>
  {/* HEADERS */}
 <View style={{padding:10, backgroundColor:colors.secondary, borderBottomRightRadius:20, borderBottomLeftRadius:20,
 flexDirection:"row"}}>
 <View>
        <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
 </View>

 <View style={{alignSelf:'center', justifyContent:"center", left:90}}>
    <Text style={{fontFamily:fonts.primary[600], fontSize:25,}}>History</Text>
 </View>

 </View>
    <ScrollView>
    <View style={{padding:10,}}>

         <View style={{padding:10, }}>

            {/* NANTI DISINI AKAN ADA HASIL DARI PEDOMAN */}
            <Text>Belum ada History...</Text>
         </View>
    
    </View>
    </ScrollView>
  </ImageBackground>
  )
}