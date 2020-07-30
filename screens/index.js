import React from 'react';
import Screen from './Screen';
import HomeScreen from '../src/pages/home';
import ProfileScreen from '../src/pages/Login';
import MessageScreen from '../src/pages/message';
import StatisticScreen from '../src/pages/Statistic';
import SignOutScreen from '../src/pages/SignOut';
import CovidScreen from '../src/pages/Covid';
import FeedbackScreen from '../src/pages/feedback';
import ContactScreen from '../src/pages/Contact'
import RegisterScreen from '../src/pages/Register'
import FeedScreen from '../src/pages/feed'



export const Home = ({navigation}) => <Screen navigation={navigation} name="Home" ><HomeScreen navigation={navigation}/></Screen>;

export const Profile = ({navigation}) => <Screen navigation={navigation} name="Profile"><ProfileScreen/></Screen>;

export const Message = ({navigation}) => <Screen navigation={navigation} name="Message"><MessageScreen/></Screen>;

export const Statistic = ({navigation}) => <Screen navigation={navigation} name="Statistic" ><StatisticScreen/></Screen>;

export const SignOut = ({navigation}) => <Screen navigation={navigation} name="Logout" ><SignOutScreen/></Screen>;

export const Covid = ({navigation}) => <Screen navigation={navigation} name="About Covid"><CovidScreen/></Screen>;

export const Feedback = ({navigation}) => <Screen navigation={navigation} name="Feedback"><FeedbackScreen navigation={navigation}/></Screen>;

export const Contact = ({ navigation }) => <Screen navigation={navigation}name="Contact"><ContactScreen /></Screen>;

export const Register = ({ navigation }) => <Screen navigation={navigation} name="Register"><RegisterScreen /></Screen>;

export const Feed = ({navigation}) => <Screen navigation={navigation} name="Feed" ><FeedScreen navigation={navigation}/></Screen>;


