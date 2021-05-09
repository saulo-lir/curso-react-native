import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import rootReducer from './reducers';

/* 
stateReconciler: 

Toda aplicação precisa saber quantos níveis de "profundidade" o state vai considerar, bem como como as mensagens de chegada vão ser tratadas pelo state. por padrão, o default é 1. para alterar, usamos o stateReconciler.

hardSet:

Isso definirá definitivamente o estado de entrada. Isso pode ser desejável em alguns casos onde persistReducer está aninhado mais profundamente em sua árvore de redutor ou se você não confiar em initialState em seu redutor.

https://github.com/rt2zz/redux-persist#state-reconciler
*/

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler:hardSet
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);