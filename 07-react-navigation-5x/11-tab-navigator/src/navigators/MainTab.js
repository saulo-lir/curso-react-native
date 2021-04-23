import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // npm install @react-navigation/bottom-tabs
import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';

// const Tab = createBottomTabNavigator();
const {Navigator, Screen} = createBottomTabNavigator();

export default () => (
    <Navigator>
        <Screen name="TabHome" component={TabHomeScreen} />
        <Screen name="TabAbout" component={TabAboutScreen} />
    </Navigator>
);