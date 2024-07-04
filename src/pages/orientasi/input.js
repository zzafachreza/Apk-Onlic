import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'


export default function OrientasiInput({navigation}) {
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

 <View style={{alignSelf:'center', justifyContent:"center", left:80}}>
    <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:"center"}}>Langkah Pertama</Text>
    <Text style={{fontFamily:fonts.primary[600], fontSize:25, textAlign:'center'}}>Orientasi</Text>
 </View>

 </View>


    <ScrollView>
    <View style={{padding:10,}}>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12 , }}>Ayo temukan unsur pembangun dalam puisi tersebut !</Text>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12 , }}>A. Unsur Fiksi Puisi</Text>
        <MyGap jarak={10}/>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>1. Diksi</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>

        <MyGap jarak={0}/>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>2. Imaji</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>

        <MyGap jarak={0}/>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>3. Rima</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>

        <MyGap jarak={0}/>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>4. Tipografi</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>

        <MyGap jarak={0}/>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>5. Gaya Bahasa</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>
        <MyGap jarak={10}/>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12 , }}>B. Unsur Batin Puisi</Text>
        <MyGap jarak={10}/>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>1. Tema</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>2. Rasa</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>3. Nada</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>
        <View style={{padding:10}}>
        <Text style={{fontFamily:fonts.primary[400], }}>4. Amanat</Text>
            <TextInput style={{backgroundColor:'white', borderWidth:0.5, borderRadius:30,
            paddingLeft:10, paddingRight:10, fontFamily:fonts.primary[400], fontSize:12, top:3}} 
                placeholder='Isi Jawaban' placeholderTextColor='gray'
            />
        </View>
            <MyGap jarak={10}/>
        <TouchableNativeFeedback onPress={() => navigation.navigate('OrientasiFinal')}>
            <View style={{padding:10, backgroundColor:colors.tertiary, borderRadius:30, }}>
                <Text style={{fontFamily:fonts.primary[600], textAlign:'center', color:'white'}}>Selanjutnya</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
    </ScrollView>
  </ImageBackground>
  )
}