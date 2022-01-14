import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyTab from './MyTab';
export default function FirstPage({navigation}) {
    return (
        <View style={{flex:1,backgroundColor:"red"}}>
          <TouchableOpacity onPress={()=>navigation.navigate('MyTab')} style={{width:"80%",height:50,borderRadius:20,}}>
               <Text>Go To</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
