import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'


export default function JelajahiInput({navigation}) {
    const backPage = () => {
        navigation.goBack()
      };
  return (
  <ImageBackground source={require('../../assets/bghome.png')} style={{
    flex:1,
    width:'100%',
    height:"100%"
  }}>
 {/* HEADERS */}
 <View style={{padding:10, backgroundColor:colors.secondary, borderBottomRightRadius:20, borderBottomLeftRadius:20,
 flexDirection:"row"}}>
 <View style={{justifyContent:'center'}}>
        <TouchableNativeFeedback onPress={backPage}>
        <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
        </TouchableNativeFeedback>
 </View>

 <View style={{alignSelf:'center', justifyContent:"center", left:90}}>
    <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:"center"}}>Langkah Kedua</Text>
    <Text style={{fontFamily:fonts.primary[600], fontSize:25, textAlign:'center'}}>Jelajahi</Text>
 </View>

 </View>

    <ScrollView>
    <View style={{padding:10,}}>

         <View style={{padding:10, }}>
<Text style={{fontFamily:fonts.primary[400], textAlign:'center', fontSize:20, fontStyle:'italic', color:colors.tertiary,
}}>“Bara jou no gulaha,{'\n'}
no tuduba nage adi”</Text>

        <MyGap jarak={20}/>

            <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}> 1. Terjemah Bahasa Indonesia</Text>
                <MyGap jarak={5}/>
                <TextInput style={{fontFamily:fonts.primary[400], fontSize:12, paddingLeft:10, paddingRight:10, borderWidth:1,
                borderRadius:30, color:'black', backgroundColor:'white'}} placeholder='Isi Jawaban' placeholderTextColor='gray'/>
            </View>
                    <MyGap jarak={10}/>
            <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}> 2. Tema</Text>
                <MyGap jarak={5}/>
                <TextInput style={{fontFamily:fonts.primary[400], fontSize:12, paddingLeft:10, paddingRight:10, borderWidth:1,
                borderRadius:30, color:'black', backgroundColor:'white'}} placeholder='Isi Jawaban' placeholderTextColor='gray'/>
            </View>
            <MyGap jarak={10}/>
            <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}> 3. Gaya Bahasa</Text>
                <MyGap jarak={5}/>
                <TextInput style={{fontFamily:fonts.primary[400], fontSize:12, paddingLeft:10, paddingRight:10, borderWidth:1,
                borderRadius:30, color:'black', backgroundColor:'white'}} placeholder='Isi Jawaban' placeholderTextColor='gray'/>
            </View>
            <MyGap jarak={10}/>
            <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}> 4. Pesan Moral</Text>
                <MyGap jarak={5}/>
                <TextInput style={{fontFamily:fonts.primary[400], fontSize:12, paddingLeft:10, paddingRight:10, borderWidth:1,
                borderRadius:30, color:'black', backgroundColor:'white'}} placeholder='Isi Jawaban' placeholderTextColor='gray'/>
            </View>

            <MyGap jarak={27}/>

         </View>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Eksplorasi')}>
            <View style={{padding:10, backgroundColor:colors.tertiary, borderRadius:30, }}>
                <Text style={{fontFamily:fonts.primary[600], textAlign:'center', color:'white'}}>Selanjutnya</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
    </ScrollView>
  </ImageBackground>
  )
}