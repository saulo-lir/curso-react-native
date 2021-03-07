import { createStackNavigator } from 'react-navigation-stack'; // npm install react-navigation-stack
import Welcome from '../screens/Welcome';

// Aqui passamos a lista das telas que iremos utilizar
const MainNavigator = createStackNavigator({
    Welcome:{ // Pode ser qualquer nome na chave
        screen:Welcome
    }
});

export default MainNavigator;