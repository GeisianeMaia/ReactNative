import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Register({ navigation }) {

  const Login = () => {
    // passando parametros com navigation
    navigation.navigate("Login");}

    const Register = () => {
      // passando parametros com navigation
      navigation.navigate("Home");}

  return (
    <View style={styles.container}>
      <Image source={require('./img/ICON617.jpg')} style={styles.logo} />

      <Feather
        name="users"
        size={16}
        color={'#000'}
        style={styles.IconUsers}
      ></Feather>
      <TextInput
        style={({ width: 30 }, styles.input)}
        placeholder="      Full name"
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <Feather
        name="mail"
        size={16}
        color={'#000'}
        style={styles.IconMail}
      ></Feather>
      <TextInput
        style={({ width: 30 }, styles.input)}
        placeholder="      example@mail.com"
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <Feather
        name="lock"
        size={16}
        color={'#000'}
        style={styles.IconLock}
      ></Feather>
      <TextInput
        style={styles.input}
        placeholder="     Password"
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <Feather
        name="lock"
        size={16}
        color={'#000'}
        style={styles.IconLock2}
      ></Feather>
      <TextInput
        style={styles.input}
        placeholder="     Repeat password"
        placeholderTextColor="#35AAFF"
        autoCorrect={false}
        onChangeText={() => {}}
      />
      <TouchableOpacity style={styles.btnRegister} onPress={Register}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.login} onPress={Login}>
        <Text style={styles.loginText}>Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 250,
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 25,
    color: '#000',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
  },
  btnRegister: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#35AAFF',
    marginTop: 30,
    borderRadius: 5,
    bottom: 40,
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
  },

  IconUsers: {
    position: 'absolute',
    top: 280,
    left: 5,
    color: '#35AAFF',
  },

  IconMail: {
    position: 'absolute',
    top: 345,
    left: 5,
    color: '#35AAFF',
  },

  IconLock: {
    position: 'absolute',
    top: 410,
    left: 5,
    color: '#35AAFF',
  },

  IconLock2: {
    position: 'absolute',
    top: 475,
    left: 5,
    color: '#35AAFF',
  },

  login: {
    bottom: 30,
  },
  loginText: {
    color: '#35AAFF',
    borderBottomColor: '#35AAFF',
    borderBottomWidth: 1,
  },
});