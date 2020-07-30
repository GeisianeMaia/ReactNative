import React from 'react';
import { View, Text } from 'react-native';
import useStorage from '../../hooks/useStorage';

export default function Home({ navigation }) {
  // pega os parametros da navegação
  // const feedback = navigation.getParam('feedback');

  //pega os feedbacks salvos no AsyncStorage
  const [feedbacks] = useStorage('feedbacks');
  console.log(feedbacks);

  return (
    <View>
      <Text>Minha Home </Text>
      {feedbacks?.map((feed, index) => (
        <View key={index}>
          <Text >{feed?.name}</Text>
          <Text >{feed?.cpf}</Text>
          <Text >{feed?.description}</Text>
        </View>
      ))}
    </View>
  );
}
