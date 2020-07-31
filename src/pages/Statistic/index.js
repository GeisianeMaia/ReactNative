import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

export default function Statistic() {
  return (
    
     <ImageBackground style={styles.container}>
       <Image source={require('./img/status.jpg')}/>
     </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})