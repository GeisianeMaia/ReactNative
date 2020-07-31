import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SignOut() {
  return (
    <View style={{ backgroundColor: "#ebf8f9", width: "100%", height: "100%", flex:1 }}>
      <Text style={style.title}>Bye bye, </Text>
      <Text style={style.text}>take care! </Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 135,
    marginTop:250,
    color:'#07b8bf'
  },

  text: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 135,
    marginTop:10,
    color:'#07b8bf'
  },
});
