import React from 'react';
import { View, Text, StyleSheet,  ImageBackground, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function Contact() {
  return (
    <View style={styles.container}>
    
        <ImageBackground
          source={require('../../../assets/image/background.png')}
          style={(styles.cx1, { padding: 50, height: 205 })}
        >
          <Text style={styles.nomeApp}>Nome do app</Text>
          <Image
            source={require('../../../assets/profile-pic.jpeg')}
            style={styles.profile}
          />
        </ImageBackground>
      
      <View style={styles.cx2}>
        <Text style={styles.contact}>
          Caso tenha alguma dúvida ou queira dar algum feedback, entre em
          contato:
        </Text>

        <Text style={styles.contact}>
          <Entypo name="email" size={44} color="black" />
        </Text>

        <Text style={styles.contactEmail}>equipe18ibm@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  nomeApp: {
    fontSize: 32,
    textAlign: 'center',
  },

  profile: {
    width: 150,
    height: 150,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: 30,
    marginLeft: 85,
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
    fontSize: 26,
  },
});
