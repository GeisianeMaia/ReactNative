import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

import{
  Home,
  Profile,
  Message,
  Statistic,
  SignOut,
  Covid,
  Contact,
  Register
} from './screens';

import Sidebar from './components/SideBar';

const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor}></Feather>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor}></Feather>
        ),
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
  },
  {
    contentComponent: (props) => <Sidebar {...props} />,
  },
);

export default createAppContainer(DrawerNavigation);