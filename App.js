import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Src/Navigation/Tabs';
import MainNavigator from './Src/Navigation/MainNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './Src/Storage/Redux/RootReducer';


const store=createStore(RootReducer)
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <MainNavigator />
    </NavigationContainer>
    </Provider>
  )
}

export default App