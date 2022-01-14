import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feed from './Feed';
import Notifications from './Notifications';
import Profile from './Profile';
const Tab = createBottomTabNavigator();
export default function MyTab() {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Feed}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      
      name="Notifications"
      component={Notifications}
      options={{
              tabBarLabel:"update",

        tabBarIcon: ({ color, size }) => (
          <View style={{ height:40,width:40,top:-18,borderWidth:1,borderRadius:20,justifyContent:"center",alignItems:'center',elevation:20,shadowColor:"gray", backgroundColor:"white" }}>
          <MaterialCommunityIcons name="bell" color={color} size={size} />
                  
          </View>
             
        
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
