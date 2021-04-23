import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabAboutScreen from '../pages/TabAboutScreen';
import TabConfigScreen from '../pages/TabConfigScreen';
import TabBarIcon from '../components/TabBarIcon';
import HomeStack from './HomeStack';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => (
    <Navigator 
        screenOptions={({route}) => ({
            tabBarIcon:() => <TabBarIcon name={route.name}/>
        })}
    >
        <Screen name="TabAbout" component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
        <Screen name="TabHome" component={HomeStack} options={{tabBarLabel:'Home'}} />
        <Screen name="TabConfig" component={TabConfigScreen} options={{tabBarLabel:'Config', tabBarVisible:false}} />

        {/* tabBarVisible:false: Oculta o tabBar quando a tela for selecionada */}
    </Navigator>
);