import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeDrawer from '../navigators/HomeDrawer';
import Config from '../screens/Config';

const MainNavigator = createBottomTabNavigator({
    Home:{
        screen:HomeDrawer
    },
    Config:{
        screen:Config
    }
});

export default MainNavigator;
