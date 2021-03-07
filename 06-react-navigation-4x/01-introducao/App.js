import React from 'react';
import {View} from 'react-native';

/* Instalar as dependências do react navigation 4x (necessário para qualquer um dos 3 navigators existentes: Stack Navigator, Tab Navigator e Drawer Navigator):
  
    npm install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens

    react-navigation: Possibilita a navegação em várias telas no app
    react-native-gesture-handle: Efeitos com gestos do usuário no app
    react-native-reanimated: Animações, transições de telas
    react-native-screens: Possibilita a navegação em várias telas no app

    Os 3 principais navigators do react são:

    StackNavigator: Componente geral em que podemos inserir várias telas.
      - Ex.: Temos a tela A e tela B. Queremos navegar de uma para outra. Então devemos inserir as duas telas dentro do StackNavigator.

      Então, o StackNavigator armazena a lista de telas do app e faz seu gerenciamento


    TabNavigator: Tem o mesmo funcionamento do StackNavigator, porém o que muda é o visual. O que será renderizado na tela é uma barra de tabs. Na StackNavigator não conseguimos ver quais telas temos para navegar, enquanto que no TabNavigator sim.

    DrawerNavigator: Semelhante ao TabNavigator, porém o que é renderizado na tela é um botão que ao ser clicado, exibe a lista de telas.
      - Ex.: Botões de menus laterais

    Para estruturar melhor o projeto, é interessante separarmos as pastas correspondentes aos seus respectivos componentes:

    src/navigators: Irá armazenar os navigators
    src/screens: Irá armazenar as telas que serão usadas pelos navigators
*/

export default () => {
  return (
    <View></View>
  );
}