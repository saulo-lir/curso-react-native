import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

/* 
## Passo a Passo ##

1- Instalar dependências
2- Configurar redux com redux persist
3- Configurar o react navigation
4- Criar as telas


## Dependências do Projeto ##

1- React Navigation (https://reactnavigation.org/):

npm install @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

Stack Navigation:

npm install @react-navigation/stack

2- Redux:

npm install redux react-redux redux-persist

3- Styled Components:

npm install styled-components

4- npm install @react-native-community/async-storage
*/

export default () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <MainStack />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}