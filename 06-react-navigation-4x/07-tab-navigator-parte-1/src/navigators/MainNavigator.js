import { createBottomTabNavigator } from 'react-navigation-tabs'; // npm install react-navigation-tabs
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
    /* Todas essas propriedades podem ser configuradas individualmente em cada tela */
    tabBarOptions:{
        /* Alterar cores do texto e background das tabs selecionadas e não selecionadas */
        activeTintColor:'#FF0000',
        activeBackgroundColor:'#CCC',
        inactiveTintColor:'#000',
        inactiveBackgroundColor:'#0000FF',
        // showLabel:false  Não exibe o texto das tabs
        showIcon:true, // Caso exista algum ícone configurado, ele exibe
        labelStyle:{
            fontSize:18
        },
        labelPosition:'bellow-icon',
        /*tabStyle:{
            height:100
        }*/

    },
    defaultNavigationOptions:{
        tabBarLabel:'TESTE'
    }
});

export default MainNavigator;
