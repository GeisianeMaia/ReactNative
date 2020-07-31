import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

export default function Covid() {
  return (
    
     <ImageBackground style={styles.container}>
       <Image source={require('./img/corona.jpg')}/>
     </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})