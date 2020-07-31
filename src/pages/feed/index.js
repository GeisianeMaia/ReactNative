import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
} from "react-native";
import useStorage from "../../hooks/useStorage";
import { Feather } from "@expo/vector-icons";

export default function feed({ navigation }) {
  // pega os parametros da navegação
  // const feedback = navigation.getParam('feedback');

  //pega os feedbacks salvos no AsyncStorage
  const [feedbacks, setFeedbacks] = useStorage("feedbacks");
  console.log(feedbacks);

  const handleDelete = (id) => {
    const filtered = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(filtered);
  };
  return (
    // <ScrollView style={{width:'100%'}}>
    //   <Text>Meu Feed </Text>
    //   {feedbacks?.map((feed, index) => (
    //     <View key={index}>
    //       <Text>{feed?.name}</Text>
    //       <Text>{feed?.empresa}</Text>
    //       <Text>{feed?.title}</Text>
    //       <Text>{feed?.description}</Text>
    //       <TouchableOpacity
    //         style={{width:100, padding: 20, backgroundColor: "#0099ff" }}
    //         onPress={() => handleDelete(feed.id)}
    //       >
    //         <Text style={{ color: "#fff" }}>Delete</Text>
    //       </TouchableOpacity>
    //     </View>
    //   ))}
    // </ScrollView>

    <ScrollView style={{ width: "100%" }}>
      <Text
        style={{
          color: "#07b8bf",
          fontWeight: "bold",
          fontSize: 25,
          textAlign: "center",
        }}
      >
        FEEDBACKS{" "}
      </Text>
      {feedbacks?.map((feed, index) => (
        <View key={`Feedback-${index}`} style={{ color: "#fff" }}>
          <View style={styles.cardIcon}>
            <Feather name="user" size={26} color="#000" style={styles.icon} />
          </View>

          <View style={styles.card}>
            <View style={styles.cardContent} >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 22,
                  marginBottom: 5,
                  color: "#fff",
                }}
              >
                {feed?.empresa}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 5, color: "#fff" }}>
                Adress Company: {feed?.cpf}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 5, color: "#fff" }}>
                Name: {feed?.name}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 5, color: "#fff" }}>
                Title: {feed?.title}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 5, color: "#fff" }}>
                Description: {feed?.description}
              </Text>
            </View>

            <View style={styles.cardButton}>
              <TouchableWithoutFeedback onPress={() => handleDelete(feed.id)}>
                <Animated.View>
                  <Feather name="trash-2" size={26} color={"#fff"}></Feather>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#87CEFA",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 85,
    marginTop: -60,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  icon: {
    color: "#fff",
    paddingLeft: 10,
    paddingTop: 10,
    marginRight: 150,
    backgroundColor: "#87CEFA",
    borderRadius: 100,
    // borderWidth:1,
    width: 50,
    height: 50,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    // shadowColor: "#07b8bf",
  },

  cardIcon: {
    flex: 1,
    marginLeft: 15,
    marginTop: 40,
  },

  cardButton: {
    //  marginRight:-180,
    marginTop: 10,
    // position:'absolute'
    marginLeft: -50,
  },
});
