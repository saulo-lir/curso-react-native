import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeStack from '../navigators/HomeStack';
import Config from '../screens/Config';

// Utilizar o stack navigator dentro do tab navigator (Ao invés de enviarmos uma tela para o tabs, enviamos uma stack)
const MainNavigator = createBottomTabNavigator({
    Home:{
        screen:HomeStack // Enviando uma stack navigator
    },
    Config:{
        screen:Config // Enviando uma tela
    }
});

export default MainNavigator;
