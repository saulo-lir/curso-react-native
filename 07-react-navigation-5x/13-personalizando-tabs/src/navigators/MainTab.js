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

        lazy={true} // Só carrega a página quando a aba for selecionada, ao invés de carregar todas as janelas de uma vez

        tabBarOptions={{
            // showIcon:false
            showLabel:false,
            activeBackgroundColor:'#FF0000',
            style:{
                height:80
            },
            labelStyle:{
                fontSize:18
            },
            tabStyle:{

            },
            keyboardHidesTabBar: true // Quando o teclado do app aparecer, oculta as tabs
        }}
    >
        <Screen name="TabHome" component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Screen name="TabAbout" component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
    </Navigator>
);