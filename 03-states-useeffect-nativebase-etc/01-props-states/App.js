import React, { useState } from 'react'; /* Importando o hook useSate para utilizar os states */
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

/*
  - Props: 
    -> São fixas;
    -> São externas ao componente;

  - States: 
    -> Variam;
    -> São internas ao componente;
    -> Sempre que uma state é alterada, o componente é renderizado novamente
*/

/* Usando props */
const Hello = (props) => {
  return <Text>{props.frase}</Text>
}

/* Usando props de forma resumida */
const Hello2 = ({frase2}) => {
  return <Text>{frase2}</Text>
}


const Hello3 = () => {
  /* Criando um state. Eles são criados dentro do componente */
  /* variável que corresponde ao state, função que mudará o valor da vairável*/
  const [name, setName] = useState('Gandalf'); /* A função useState setará o valor inicial da state */

  /* Resumindo: Foi criada a state chamada name, que usará a função setName para alterar seu valor. O valor inicial dessa state é 'Gandalf'. */


  return <Text>Nome: {name}</Text>
}

export default function App() {
  return (
    <Page>
      <Hello frase="Seja bem vindo!" />
      <Hello frase="Frase 2" />

      <Hello2 frase2="Teste 123" />

      <Hello3 />
    </Page>
  );
}
