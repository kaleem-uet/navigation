import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native'


export default function Profile({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        <Button title='CLick Me' onPress={()=>navigation.navigate('New')}/>
      </View>
    )
}

const styles = StyleSheet.create({})
