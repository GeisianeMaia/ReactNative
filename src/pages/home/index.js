import React from 'react';
import { View, Text } from 'react-native';

export default function Home ({navigation}){
  console.log(navigation.params);
  return(
    <View>
      <Text>Minha Home</Text>
    </View>
  );
}