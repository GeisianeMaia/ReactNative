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
        <>
          <Text key={index}>{feed?.name}</Text>
          <Text key={index}>{feed?.cpf}</Text>
          <Text key={index}>{feed?.description}</Text>
        </>
      ))}
    </View>
  );
}
