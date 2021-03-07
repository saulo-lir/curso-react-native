import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome,
        params:{ // Enviar parâmetros para a tela
            titulo:'Teste'
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            title:'Login Teste'
        }
    }
}, {
    defaultNavigationOptions:{
        
    }
});

export default MainNavigator;