import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const {Navigator, Screen} = createStackNavigator();

/* 

1) Alterando o header em cada tela, individualmente.

*/

export default () => (
    <Navigator>
        {/* Alterando o header da página através da prop 'options' */}
        <Screen name="Home" component={HomeScreen} options={{
            title:'Início',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'#DDD',
                height:200
            },
            headerTitleStyle:{
                color:'#FFF',
                fontSize:23,
                fontWeight:'bold'
            }
        }} />

        {/* Utilizando funções nas options, é possível pegar como parâmetro as props da tela */}
        <Screen name="About" component={AboutScreen} options={(props)=>({
            title:props.route.params?.name ?? 'Visitante'
        })}/>
    </Navigator>
);