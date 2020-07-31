import React from 'react';
import { View, Text, StyleSheet,  ImageBackground, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Contact() {
  return (
    <View style={styles.container}>
    
        <ImageBackground
          source={require('../../../assets/image/background.png')}
          style={(styles.cx1, { padding: 50, height: 205 })}
        >
          {/* <Text style={styles.nomeApp}>Nome do app</Text> */}
          <Image
            source={require('./img/splash.png')}
            style={styles.profile}
          />
        </ImageBackground>
      
      <View style={styles.cx2}>
        <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center', marginTop:70}}>
          SPACE PLACE
        </Text>
        <Text style={{fontSize:18, textAlign:'center'}}>São Paulo, Brasil</Text>

        <Text style={styles.contact}>
        <Feather name="mail" size={22} color={'#35AAFF'} style={styles.IconLock}></Feather>
        </Text>

        <Text style={styles.contactEmail}>equipe18ibm@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'
  },

  nomeApp: {
    fontSize: 32,
    textAlign: 'center',
  },

  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#000',
    marginTop: 50,
    marginLeft: 70,
  },

  cx1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cx2: {
    flex: 2,
  },

  contact: {
    paddingTop: 70,
    textAlign: 'center',
    fontSize: 20,
  },

  contacts: {
    paddingTop: 10,
    paddingLeft: 5,
    textAlign: 'center',
    fontSize: 24,
  },

  contactEmail: {
    textAlign: 'center',
    fontSize: 20,
    color:'#35AAFF'
  },
});
