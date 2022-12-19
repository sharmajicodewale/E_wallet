import { View, Text,StyleSheet ,Keyboard} from 'react-native'
import React,{useEffect,useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import MoreSetting from '../Screens/MoreSetting'
import MyBooking from '../Screens/MyBooking'
import MyProfile from '../Screens/MyProfile'
import Icon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
 



  return (

<>
      <Tab.Navigator
   
   screenOptions={{
  
        headerShown: false,
        tabBarShowLabel:false,
        tabBarLabelStyle:{
            fontSize:15
        },
        tabBarStyle: {
             position:'absolute',
            backgroundColor: '#ffff',
            paddingTop:10,
          paddingHorizontal: 10,
          bottom: 10,
          left:20,
          right:20,
          elevation:0,
          borderRadius:15,
          height:60,
          //width:350,
          paddingBottom:15,
          ...styles.shadow,
          labeStyle:{fontSize:50}

        },
       
      }}
    >
     
    <Tab.Screen
     options={{
        tabBarIcon: ({focused}) => (
            <Icon name="home" size={35} color={focused ? '#4834d4' :'gray'} />
          ),
          }}
    name="Home" component={Home} />
    <Tab.Screen
     options={{
        tabBarIcon: ({focused}) => (
            <Foundation name="ticket" size={35} color={focused ? '#4834d4' :'gray'} />
          ),
          
         }}
    name="My Booking" component={MyBooking} />
    <Tab.Screen
     options={{
        tabBarIcon: ({focused}) => (
            <FontAwesome5 name="user-circle" size={35} color={focused ? '#4834d4' :'gray'} />
          ),
         }}
    name="My Profile" component={MyProfile} />
    <Tab.Screen
     options={{
        tabBarIcon: ({focused}) => (
            <Icon name="ios-settings" size={35} color={focused ? '#4834d4' :'gray'} />
          ),
         }}
    name="More" component={MoreSetting} /> 
  </Tab.Navigator>  
 

  </> )
}

const styles=StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            height:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
})

export default Tabs