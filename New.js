import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function New({navigation}) {
    return (
        <View>
            <Text>this is new Screen</Text>
            <Button title='go to Hi Page' onPress={()=>navigation.navigate('HiPage')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
