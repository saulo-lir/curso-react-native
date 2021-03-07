import { createStackNavigator } from 'react-navigation-stack';
import HomeTab from '../navigators/HomeTab';
import Login from '../screens/Login';

/* 
    Estrutura dos navigators:

    - StackNavigator:
        - Login
        - TabNavigator: (Ao passar da tela de login para o HomeTab, haverá um reset no histórico, impedindo que o usuário volte para a tela de login)
            - StackNavigator:
                    - Home
                    - Perfil
            - Config
*/

const MainStack = createStackNavigator({
    Login:{
        screen:Login
    },
    HomeTab:{
        screen:HomeTab
    }
},{
    defaultNavigationOptions:{
        header:null // Remover cabeçalho da tela
    }
});

export default MainStack;
