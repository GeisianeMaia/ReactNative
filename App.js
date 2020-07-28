import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import{
  Profile,
  MessageScreen,
  ContactScreen,
  CovidScreen
} from './screens';

import Sidebar from './components/SideBar';

const DrawerNavigation = createDrawerNavigator({
  Profile,
  MessageScreen,
  ContactScreen,
  CovidScreen
},
{
  contentComponent: props => <Sidebar {...props}/>
});

export default createAppContainer(DrawerNavigation);