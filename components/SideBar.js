import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';
import { DrawerNavigatorItems} from 'react-navigation-drawer';

 
export default Sidebar = props => (
   <ScrollView>
       <ImageBackground
           source={require("../assets/mapa.png")}
           style={{width: undefined, padding: 50, height:210}}
       >
           
       <Image source={require("../assets/menina.jpg")} style={styles.profile}/>
        <Text style={styles.name}>Maria Silva</Text>
       </ImageBackground>

       <View style={styles.container}>
           <DrawerNavigatorItems {...props}/>
       </View>
       
   </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: -5,
  },

  name: {
    marginTop: 15,
    color: '#fff',
    fontSize: 25,
    fontWeight: '800',
    fontFamily: 'Roboto_400Regular',
  },
});


