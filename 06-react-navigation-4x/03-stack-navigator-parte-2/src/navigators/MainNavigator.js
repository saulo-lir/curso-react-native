import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome
    },
    Login:{
        screen:Login
    }
});

export default MainNavigator;