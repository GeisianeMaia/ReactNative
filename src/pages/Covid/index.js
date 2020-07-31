import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

export default function Covid() {
  return (
    
     <ImageBackground style={styles.container}>
       <Image source={require('./img/covid19.jpg')}/>
     </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})