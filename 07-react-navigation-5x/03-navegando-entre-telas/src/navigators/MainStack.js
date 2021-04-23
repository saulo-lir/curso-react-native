import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const {Navigator, Screen} = createStackNavigator();

export default () => (
    <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="About" component={AboutScreen} />
    </Navigator>
);