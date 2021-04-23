import React from 'react';
import { Button, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import Logo from '../components/Logo';

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
        {/* Adicionando componentes no header pelas options da screen */}
        <Screen name="Home" component={HomeScreen} options={{
            // title: Funciona em todos os navigators (stack, tab e drawer), enquanto que o headerTitle, apenas no stack, pois só ele possui cabeçalho
            headerLeft: () => <Text>Hello World</Text>,
            headerTitle: () => <Logo />,
            headerRight: () => <Button title="Opa" onPress={()=>alert('Oi')} />
        }} />
        <Screen name="About" component={AboutScreen} />
    </Navigator>
);