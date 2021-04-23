import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';

// Criando um stack navigator
const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
);

/* Também é possível dessa forma:

const {Navigator, Screen} = createStackNavigator();

<Navigator>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="About" component={AboutScreen} />
</Navigator>
*/