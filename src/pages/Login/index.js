import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Login ({ navigation }){

  const Register = () => {
    // passando parametros com navigation
    navigation.navigate("Register");}

    const Login = () => {
      // passando parametros com navigation
      navigation.navigate("Home");}

  return(
    <View style={styles.container}>
      
        <Image 
        source={require("../Login/img/login.png")}
        style={styles.logo}
        />

       <Feather name="mail" size={16} color={'#000'} style={styles.IconMail}></Feather>
       <TextInput style={{width: 30}, styles.input} placeholder="      example@mail.com" placeholderTextColor = "#35AAFF" autoCorrect={false} onChangeText={()=>{}}/>
       <Feather name="lock" size={16} color={'#000'} style={styles.IconLock}></Feather>
       <TextInput style={styles.input}  secureTextEntry={true}  placeholder="      •••••••••" placeholderTextColor = "#35AAFF" autoCorrect={false} onChangeText={()=>{}}/>
       <TouchableOpacity style={styles.btnSubmit}  onPress={Login}>
         <Text style={styles.submitText}>Login</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.register} onPress={Register}>
         <Text style={styles.registerText}>Fazer cadastro</Text>
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
    height: 300,
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 40,
    color: '#000',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
  },
  btnSubmit: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#35AAFF',
    marginTop: 30,
    borderRadius: 5,
    bottom: 40,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
  },
  IconMail: {
    position: 'absolute',
    bottom: 290,
    left: 5,
    color: '#35AAFF',
  },

  IconLock: {
    position: 'absolute',
    top: 430,
    left: 5,
    color: '#35AAFF',
  },

  register: {
    bottom: 30,
  },
  registerText: {
    color: '#35AAFF',
    borderBottomColor: '#35AAFF',
    borderBottomWidth: 1,
  },
});