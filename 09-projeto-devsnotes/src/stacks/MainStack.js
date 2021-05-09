import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../pages/ListScreen';
import EditNoteScreen from '../pages/EditNoteScreen';

const {Navigator, Screen} = createStackNavigator();

export default () => (
    <Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#222'
        },
        headerTintColor:'#FFF'
    }}>
        <Screen name="List" component={ListScreen} />
        <Screen name="EditNote" component={EditNoteScreen} />
    </Navigator>
);