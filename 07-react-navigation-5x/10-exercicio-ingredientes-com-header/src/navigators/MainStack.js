import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components/native';
import IndexScreen from '../pages/IndexScreen';

const HeaderTitle = styled.Text`
    font-size:12px;
    font-weight:bold;
    margin-left:10px;
`;

const {Navigator, Screen} = createStackNavigator();

export default () => (
    <Navigator screenOptions={{
        headerTitle:'',
        headerStyle:{
            backgroundColor:'#B5B5B5'
        },
        headerTitleStyle:{
            fontSize:12,
            fontWeight:'bold'
        },
        headerRightContainerStyle:{
            paddingRight:10
        }
    }}>
        <Screen name="Index" component={IndexScreen} options={{
            headerLeft: () => <HeaderTitle>Exercício</HeaderTitle>
        }} />
    </Navigator>
);