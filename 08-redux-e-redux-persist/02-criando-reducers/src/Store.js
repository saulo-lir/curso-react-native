import {createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import Reducers from './reducers/index';
import {persistStore, persistReducer} from 'redux-persist'; // npm install redux-persist

// Configurar o redux persist para armazenar informações no celular
const persistedReducer = persistReducer({
    key:'root',
    storage:AsyncStorage,
    whitelist:['userReducer'], // O que queremos gravar
    // blacklist:[],  O que não queremos gravar
}, Reducers);

// const store = createStore(Reducers); Usamos esse formato caso não quisermos gravar os dados
const store = createStore(persistedReducer); 
let persistor = persistStore(store);

// export default store; Usamos esse formato caso não quisermos gravar os dados

export {store, persistor};