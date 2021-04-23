import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler'; // Necessário importar essa biblioteca após instalação das dependências, caso queiramos utilizar o efeito de gesture-handler.


/* 
Instalação das dependências:

npm install @react-navigation/native

Via expo: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

Via Projeto Nativo: npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

Documentação: https://reactnavigation.org

O react navigation 5x também possui os 3 tipos de telas: Stack Navigator, Tab Navigator e Drawer Navigator

Exemplo de estruturação das telas:

    Whatsapp:

        Conversas - Tab Navigator
            - Stack Navigator
                - Tela de lista de conversas
                - Tela da própria conversa

Instalar o stack navigator:

npm install @react-navigation/stack


Comando completo (para projetos com expo): npm install @react-navigation/native react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack

*/

function App(){
    return (
        /* Dentro do container é que inserimos todas as telas do app */
        <NavigationContainer>

        </NavigationContainer>
    );
}

export default App;