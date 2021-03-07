import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

/* 
Existem 3 formas de passarmos propriedades no navigator:

- 1º Dentro da tela (scr/screen/NomeDaTela)
- 2º Dentro da tela através do navigator (Nesse aquivo atual)
- 3º Aplicando de forma geral para todos as telas do navigator
*/

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome
    },
    Login:{
        screen:Login,
        navigationOptions:{ // 2ª Forma de passar propriedades
            title:'Login Teste'
        }
    }
}, { // 3ª Forma de passar parâmetros
    defaultNavigationOptions:{
        title:'TELA' // Esse título será aplicado em todas as telas, caso não existam títulos configurados individualmente em cada tela
    }
});

export default MainNavigator;