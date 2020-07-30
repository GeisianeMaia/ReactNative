import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useStorage from "../../hooks/useStorage";

export default function Covid({ navigation }) {
  const [feedbacks, setFeedbacks] = useStorage("feedbacks");
  const [name, setName] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cpf, setCpf] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Send = () => {
    // passando parametros com navigation
    navigation.navigate("Feed");
    //   feedback: {
    //     name,
    //     empresa,
    //     cpf,
    //     title,
    //     description,
    //   },
    // });

    const id = String(Math.floor(Math.random() * 999999));
    const dados = feedbacks?.length
      ? [
          ...feedbacks,
          {
            id,
            name,
            empresa,
            cpf,
            title,
            description,
          },
        ]
      : [
          {
            id,
            name,
            empresa,
            cpf,
            title,
            description,
          },
        ];
    //salva os dados no AsyncStorage
    setFeedbacks(dados);
    setName('');
    setTitle('');
    setEmpresa('');
    setCpf('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>
      <TextInput
        value={name}
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={setName}
      />

      <TextInput
        value={empresa}
        style={styles.input}
        placeholder="Empresa"
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={setEmpresa}
      />

      <TextInput
        value={cpf}
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={setCpf}
      />

      <TextInput
        value={title}
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={setTitle}
      />

      <TextInput
        value={description}
        style={styles.textarea}
        placeholder=""
        textAlignVertical="top"
        multiline={true}
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={setDescription}
      />

      <TouchableWithoutFeedback onPress={Send}>
        <Animated.View style={styles.button}>
          <Feather
            name="arrow-right"
            size={26}
            color={"#fff"}
            style={styles.IconLock}
          ></Feather>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#000',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },

  input: {
    width: 300,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 0.5,
    marginBottom: 20,
    paddingLeft: 10,
  },

  textarea: {
    height: 120,
    width: 300,
    borderColor: "#ccc",
    borderWidth: 2,
    paddingLeft: 10,
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#07b8bf",
    // position: 'absolute',
    marginTop: 60,
    marginLeft: 235,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    shadowColor: "#07b8bf",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    },
  },
  // textButton:{
  //   textAlign: 'center',
  //   color: '#fff'
  // }
});
