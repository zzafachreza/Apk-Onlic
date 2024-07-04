import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'


export default function JelajahiNomor({navigation}) {
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
            <View style={{padding:10}}>
            {/* BAGIAN ATAS */}
                <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                {/* 1 */}
                    <TouchableNativeFeedback onPress={() => navigation.navigate('JelajahiInput')}>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>1</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 2 */}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>2</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 3 */}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>3</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <MyGap jarak={26}/>
         {/* BAGIAN ATAS 2 */}
         <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                {/* 4 */}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>4</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 5*/}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>5</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 6 */}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>6</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <MyGap jarak={26}/>
{/* BAGIAN TENGAH */}
<View style={{flexDirection:"row", justifyContent:"space-around"}}>
                {/* 7 */}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>7</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 8*/}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>8</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 9 */}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>9 </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>


                <MyGap jarak={26}/>
{/* BAGIAN bawah 2 */}
<View style={{flexDirection:"row", justifyContent:"space-around"}}>
                {/* 10 */}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>10</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 11*/}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>11</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 12*/}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>12 </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>


                
                <MyGap jarak={26}/>
{/* BAGIAN bawah 1 */}
<View style={{flexDirection:"row", justifyContent:"space-around"}}>
                {/* 13 */}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>13</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 14*/}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>14</Text>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 15*/}
                    <TouchableNativeFeedback>
                        <View style={{padding:10, backgroundColor:'white', width:83, height:83 , borderWidth:0.5, borderRadius:30, justifyContent:"center", backgroundColor:'white'}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tertiary, textAlign:'center'}}>15</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </View>
    </View>
    </ScrollView>
  </ImageBackground>
  )
}