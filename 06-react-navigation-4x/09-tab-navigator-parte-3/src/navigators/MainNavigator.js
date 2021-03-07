import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const MainNavigator = createBottomTabNavigator({
    Welcome:{
        screen:Welcome
    },
    Login:{
        screen:Login
    }
}, {
    tabBarOptions:{
    },
    defaultNavigationOptions:{
        // Utilizando o tabBar criado
        tabBarComponent: (props) => (
            <CustomTabBar 
                {...props} // Passando todas as props
                items={[ // Passando quais itens serão exibidos
                    {text:'Início', route:'Welcome'},
                    {text:'Sobre', route:'Login'},
                    {text:'Configurações', route:'Welcome'}
                ]}
            />
        )
    }
});

export default MainNavigator;
