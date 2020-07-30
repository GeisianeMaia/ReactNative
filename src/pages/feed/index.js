import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import useStorage from "../../hooks/useStorage";

export default function feed({ navigation }) {
  // pega os parametros da navegação
  // const feedback = navigation.getParam('feedback');

  //pega os feedbacks salvos no AsyncStorage
  const [feedbacks, setFeedbacks] = useStorage("feedbacks");
  console.log(feedbacks);

  const handleDelete = (id) => {
    const filtered = feedbacks.filter((feedback)=>feedback.id !== id)
    setFeedbacks(filtered);
  };
  return (
    <ScrollView style={{width:'100%'}}>
      <Text>Meu Feed </Text>
      {feedbacks?.map((feed, index) => (
        <View key={index}>
          <Text>{feed?.name}</Text>
          <Text>{feed?.empresa}</Text>
          <Text>{feed?.title}</Text>
          <Text>{feed?.description}</Text>
          <TouchableOpacity
            style={{width:100, padding: 20, backgroundColor: "#0099ff" }}
            onPress={() => handleDelete(feed.id)}
          >
            <Text style={{ color: "#fff" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
