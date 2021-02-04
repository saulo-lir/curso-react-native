import React, { Component } from 'react';
import { Text } from 'react-native';

/* Tudo é baseado em componentes no react. Componentes são agrupamento de códigos que rederizam determinado elemento na tela */

/*
export default () => {
  return (<Text>Hello World!</Text>);
}
*/

/* Criando um componente */

const TextoInicial = () => {
  return (
    <Text>Texto Qualquer</Text>
  );
}

/* Outra forma de criar um componente, com funções */

function TextoInicial(){
  return (
    <Text>Texto 2</Text>
  );
}

/* Utilizando classes para criar componentes (Commum para as versões 15 e anteriores do react) */

class TextoInicial extends Component {

  render() {
    return (
      <Text>Texto 3</Text>
    );
  }

}

/* Criando um componente de forma simplificada */

const TextoInicial = ()=><Text>Texto 4</Text> 


/* Todas as formas estão corretas e funcionam. A diferença só está no tempo de escrita do código e na elegância do mesmo. */


/* Exportar o componente criado */

export default TextoInicial;