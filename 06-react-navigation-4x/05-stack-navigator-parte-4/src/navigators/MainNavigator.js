import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome
    },
    Login:{
        screen:Login,
        navigationOptions:{
            title:'Login Teste'
        }
    }
}, {
    // Indica a primeira rota que deve ser aberta: initialRouteName:'Login', 
    defaultNavigationOptions:{
        headerStyle:{ // Alterar estilo do cabeçalho
            backgroundColor:'#FF0000'
        },
        headerTitleStyle:{ // Alterar o estilo da fonte do cabeçalho
            fontSize:30
        },
        headerTintColor:'#FFF', // Alterar a cor da fonte do cabeçalho
        headerTitleContainerStyle:{ // Alterar o estilo do container do título do cabeçalho
            justifyContent:'center',
            alignItems:'center'
        },
        headerLeftContainerStyle:{
            backgroundColor:'#00FF00'
        },
        headerRightContainerStyle:{
            backgroundColor:'#000'
        }
    }
});

export default MainNavigator;