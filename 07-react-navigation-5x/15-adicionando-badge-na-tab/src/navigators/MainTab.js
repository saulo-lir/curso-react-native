import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';
import TabConfigScreen from '../pages/TabConfigScreen';
import TabBarIcon from '../components/TabBarIcon';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => (
    <Navigator 
        screenOptions={({route}) => ({
            tabBarIcon:() => <TabBarIcon name={route.name}/>
        })}
    >
        <Screen name="TabAbout" component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
        <Screen name="TabHome" component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Screen name="TabConfig" component={TabConfigScreen} options={{tabBarLabel:'Config'}} />
    </Navigator>
);