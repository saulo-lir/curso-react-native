import { createStackNavigator } from 'react-navigation-stack';
import HomeTab from '../navigators/HomeTab';
import Login from '../screens/Login';

const MainStack = createStackNavigator({
    Login:{
        screen:Login
    },
    HomeTab:{
        screen:HomeTab
    }
},{
    defaultNavigationOptions:{
        header:null
    }
});

export default MainStack;
