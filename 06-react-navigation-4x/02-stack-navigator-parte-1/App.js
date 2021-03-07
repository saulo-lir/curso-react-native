import { createAppContainer } from 'react-navigation';
import MainNavigator from './src/navigators/MainNavigator';

/* 
  - O app container (createAppContainer) só é chamado e usado uma vez. 
  - Geralmente é utilizado no arquivo App.js
  - Ele cria um container que englobará toda a aplicação
*/


// Exportar o navigator dentro do container:
export default createAppContainer(MainNavigator);

