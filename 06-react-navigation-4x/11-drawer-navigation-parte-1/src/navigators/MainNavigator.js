import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeDrawer from '../navigators/HomeDrawer';
import Config from '../screens/Config';

// Utilizar o drawer navigator dentro do tab navigator (Ao invés de enviarmos uma tela para o tabs, enviamos um drawer)
const MainNavigator = createBottomTabNavigator({
    Home:{
        screen:HomeDrawer // Enviando uma drawer navigator
    },
    Config:{
        screen:Config // Enviando uma tela
    }
});

export default MainNavigator;
