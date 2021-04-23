import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabHomeScreen from '../pages/TabHomeScreen';
import TabHome2Screen from '../pages/TabHome2Screen';

const {Navigator, Screen} = createStackNavigator();

export default () => (
    <Navigator>
        <Screen name="TabHomeScreen" component={TabHomeScreen} />
        <Screen name="TabHome2Screen" component={TabHome2Screen} />
    </Navigator>
);