import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({width,bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: width,
        paddingVertical: 5,
        marginVertical: 10
      }}>
      <Text style={{color: textColor, fontSize: 17, fontWeight: 'bold',paddingTop:8,paddingBottom:8}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
