import React from 'react';
import Screen from './Screen';

export const Profile = ({navigation}) => <Screen navigation={navigation} name="Home" />;
export const MessageScreen = ({navigation}) => <Screen navigation={navigation} name="Message" />;
export const ContactScreen = ({navigation}) => <Screen navigation={navigation} name="Contact" />;
export const CovidScreen = ({navigation}) => <Screen navigation={navigation} name="About Covid" />;