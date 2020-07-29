import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback , Animated} from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Covid (){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>
      <TextInput 
      style={styles.input} 
      placeholder="Name"
      placeholderTextColor = "#35AAFF"
      autoCorrect={false} 
      onChangeText={()=>{}}/>

      <TextInput 
      style={styles.input} 
      placeholder="Empresa"
      placeholderTextColor = "#35AAFF"
      autoCorrect={false} 
      onChangeText={()=>{}}/>

      <TextInput  style={styles.input} 
       placeholder="CPF" 
       placeholderTextColor = "#35AAFF" 
       autoCorrect={false} 
       onChangeText={()=>{}}/>

      <TextInput  
      style={styles.input} 
      placeholder="Title"
      placeholderTextColor = "#35AAFF"
      autoCorrect={false} 
      onChangeText={()=>{}}/> 

      <TextInput  style={styles.textarea}
      placeholder=""
      placeholderTextColor = "#35AAFF"
      autoCorrect={false} 
      onChangeText={()=>{}}/>

      <TouchableWithoutFeedback >
       <Animated.View style={styles.button}>

          <Feather name="arrow-right" size={26} color={'#fff'} style={styles.IconLock}></Feather>
         
       </Animated.View>
      </TouchableWithoutFeedback >
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#000',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight:15,
  },

  input:{
    width: 300,
    height:40,
    borderColor: '#ccc',
    borderWidth: 0.5,
    marginBottom:20,
    paddingLeft:10,
  },

  textarea:{
    height:120,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 2,
    paddingLeft:10,
    
  },

  title:{
    textAlign: 'center',
    fontSize: 18,
    marginBottom:20,
  },

  button:{
    backgroundColor: '#07b8bf',
    // position: 'absolute',
    marginTop: 60,
    marginLeft:235,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems:'center',
    shadowRadius:10,
     shadowColor: '#07b8bf',
    shadowOpacity: 0.3,
    shadowOffset: {
      height:10
    },
   
  },
  // textButton:{
  //   textAlign: 'center',
  //   color: '#fff'
  // }
})