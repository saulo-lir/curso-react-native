import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => (
    // Inserindo ícones
    <Navigator
        screenOptions={({route})=>({
            tabBarIcon: ({focused, color, size}) => {
                let imgSource = null;

                switch(route.name){
                    case 'TabHome':
                        imgSource = require('../assets/home.png');
                    break;
                    case 'TabAbout':
                        imgSource = require('../assets/interface.png');
                    break;
                }

                return <Image source={imgSource} style={{width:32, height:32}}/>
            }
        })}
    >
        <Screen name="TabHome" component={TabHomeScreen} />
        <Screen name="TabAbout" component={TabAboutScreen} />
    </Navigator>
);