import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Dimensions, View, Button, StyleSheet, AsyncStorage } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { api } from './src/services/api';

import { Entypo } from '@expo/vector-icons';

import { StorageProvider } from './src/hooks/useStorage';

import {
  Home,
  Profile,
  Message,
  Statistic,
  SignOut,
  Covid,
  Contact,
  Feedback,
  Register,
  Feed,
} from './screens';

import Sidebar from './components/SideBar';

const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor}></Feather>,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
      },
    },
    Message: {
      screen: Message,
      navigationOptions: {
        title: 'Message',
        drawerIcon: ({ tintColor }) => (
          <Feather name="message-square" size={16} color={tintColor}></Feather>
        ),
      },
    },
    Statistic: {
      screen: Statistic,
      navigationOptions: {
        title: 'Statistic',
        drawerIcon: ({ tintColor }) => (
          <Feather name="trending-up" size={16} color={tintColor}></Feather>
        ),
      },
    },

    Feedback: {
      screen: Feedback,
      navigationOptions: {
        title: 'Feedback',
        drawerIcon: ({ tintColor }) => (
          <Feather name="file-text" size={16} color={tintColor}></Feather>
        ),
      },
    },

    Covid: {
      screen: Covid,
      navigationOptions: {
        title: 'Covid-19',
        drawerIcon: ({ tintColor }) => (
          <Feather name="clipboard" size={16} color={tintColor}></Feather>
        ),
      },
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        title: 'Contact',
        drawerIcon: ({ tintColor }) => (
          <AntDesign name="contacts" size={16} color={tintColor}></AntDesign>
        ),
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register',
        drawerIcon: ({ tintColor }) => (
          <Entypo name="new-message" size={16} color={tintColor}></Entypo>
        ),
      },
    },
    SignOut: {
      screen: SignOut,
      navigationOptions: {
        title: 'SignOut',
        drawerIcon: ({ tintColor }) => (
          <Feather name="log-out" size={16} color={tintColor}></Feather>
        ),
      },
    },

    Feed: {
      screen: Feed,
      navigationOptions: {
        title: 'Feed',
        drawerIcon: ({ tintColor }) => (
          <Feather name="log-out" size={16} color={tintColor}></Feather>
        ),
      },
    },
  },
  {
    contentComponent: (props) => <Sidebar {...props} />,
  }
);

const Routes = createAppContainer(DrawerNavigation);

const App = () => {
  return (
    <StorageProvider>
      <Routes />
    </StorageProvider>
  );
};
export default App;
// export class App extends Component{
//   signIn = async () => {
//     const response = await api.post('repositories', {
//       title: 'Teste',
//       owner: "Geisiane Maia"
//     });

//      const { user, token } =response.data;
//      await AsyncStorage.multiSet([
//        []
//      ])
//     return(
//       <View style={styles.container}>
//         <Button onPress={this.signIn} title="Entrar"/>
//       </View>
//     )
//   }
// }

// const style = StyleSheet.create({
//   container:{
//     flex:1
//   }
// });
