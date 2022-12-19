import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Tabs from './Tabs';



const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    
    <Stack.Navigator
    initialRouteName={Tabs}
    screenOptions={{
      headerShown: false,
      
    
    }}
    >
      <Stack.Screen
      options={{
        headerTitleStyle: {
          fontWeight:'bold',
          
        }
      }}
      name="tabs" component={Tabs} />
     
    </Stack.Navigator>

  )
}

export default MainNavigator