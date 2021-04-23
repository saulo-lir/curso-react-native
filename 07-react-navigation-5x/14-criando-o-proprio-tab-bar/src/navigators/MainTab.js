import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';
import TabConfigScreen from '../pages/TabConfigScreen';
import CustomTabBar from '../components/CustomTabBar';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => (
    // Utilizando nosso tabBar criado
    <Navigator 
        initialRouteName="TabHome" // Inicia o app nessa tela
        tabBar={(props) => <CustomTabBar {...props} />}
    >
        <Screen name="TabAbout" component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
        <Screen name="TabHome" component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Screen name="TabConfig" component={TabConfigScreen} options={{tabBarLabel:'Config'}} />
    </Navigator>
);