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
    tabBarOptions:{
    },
    defaultNavigationOptions:{
    }
});

export default MainNavigator;
