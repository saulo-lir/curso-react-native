import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const {Navigator, Screen} = createStackNavigator();

export default () => (
    <Navigator screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#ccc',
            height:80
        },
        headerTitleStyle:{
            color:'#000',
            fontSize:16
        }
    }}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="About" component={AboutScreen} />
    </Navigator>
);