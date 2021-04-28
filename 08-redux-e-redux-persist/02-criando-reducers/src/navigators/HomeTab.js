import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStack from '../navigators/HomeStack';
import Config from '../screens/Config';

const HomeTab = createBottomTabNavigator({
    HomeStack:{
        screen:HomeStack
    },
    Config:{
        screen:Config
    }
});

export default HomeTab;