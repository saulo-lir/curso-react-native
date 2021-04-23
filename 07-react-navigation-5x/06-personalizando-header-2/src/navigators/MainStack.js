import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const {Navigator, Screen} = createStackNavigator();

/* 

2) Alterando o header no próprio navigator. Dessa forma será aplicado em todas as telas.

Estilos declarados individualmente nas telas, sobreescrvem os estilos do navigator.

*/

export default () => (
    /* Alterando o header através da prop 'screenOptions' */
    <Navigator screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#ccc',
            height:80
        },
        headerTitleStyle:{
            color:'#FFF',
            fontSize:16
        }
    }}>
        <Screen name="Home" component={HomeScreen} options={{
            title:'Título grande de teste apenas para testar'
        }} />

        <Screen name="About" component={AboutScreen} options={(props)=>({
            title:props.route.params?.name ?? 'Visitante',
            headerBackTitleVisible: true,
            headerBackTitle: 'Voltar',
            headerBackTitleStyle: {
                color: '#FFF'
            },
        })}/>
    </Navigator>
);