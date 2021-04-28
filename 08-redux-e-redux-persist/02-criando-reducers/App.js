import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react'; // npm install redux-persist
import { createAppContainer } from 'react-navigation';
import {Provider} from 'react-redux';
// import Store from './src/Store';
import {store, persistor} from './src/Store';
import MainNavigator from './src/navigators/  ';

/* 
Redux é uma ferramenta/recurso que permite compartilhar dados entre telas

Redux não é exclusivo para react, mas para aplicações javascript em geral, podendo também ser aplicado com react.

Intalação do redux: npm install redux react-redux

Provider: Componente que permite a comunicação entre reducers.
*/

const AppContainer = createAppContainer(MainNavigator);

export default () => (
  <Provider store={store}> {/* Store */}
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>
);