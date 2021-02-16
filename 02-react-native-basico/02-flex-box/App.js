import React from 'react';
import styled from 'styled-components/native';

/* 
  Por padrão o flex-direction é column

  Direção:

  flex-direction:column;
  flex-direction:row;
  flex-direction:column-reverse;
  flex-direction:row-reverse;

  Alinhamento:

  justify-content:flex-start; (Default)
  justify-content:flex-end;
  justify-content:center;
  justify-content:space-between;
  justify-content:space-around;

  Alinhamento reverso (Direção inversa do flex-direction atual):

  align-items:flex-start;
  align-items:flex-end;
  align-items:center;
  align-items:space-between;
  align-items:space-around;

*/
const Page = styled.View`
  flex:1;
  justify-content:center;
`;

const Header = styled.View`
  flex-direction:row;
  justify-content:center;
  background-color:#EEE;
  height:200px;
  flex-wrap:wrap;
`;

const Quadrado = styled.View`
  width:50px;
  height:50px;
  background-color:${props=>props.cor};
`;

export default () => {
  return (
    <Page>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado style={{alignSelf:'flex-end'}} cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
      </Header>
    </Page>
  );
}

/* 
<Quadrado flex={1} cor="red"></Quadrado>
<Quadrado flex={2} cor="green"></Quadrado>
<Quadrado flex={1} cor="blue"></Quadrado>
*/