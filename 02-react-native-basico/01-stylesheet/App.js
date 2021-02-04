import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; /* O componente View é semelhante as divs do html */
import styled from 'styled-components/native'; /* npm install styled-components --save */


export default () => {
  
  /* 
    - Aplicando no componente o estilo criado;
    - Aplicando no componente o stilo in line;
    - Aplicando no componente ambos os formatos de estilização.
  */
  return (
    <View style={styles.page}>
      <Text style={{color:'#FFF', fontSize:25}}>Hello World!</Text>
      <Text style={styles.texto}>Hello World 2!</Text>
      <Text style={[styles.texto, {fontSize:22}]}>Hello World 3!</Text>
    </View>
  );

  
  /* 
    Renderizando o styled component criado 
    Utilizando props para alterar a cor
  */
  return (
    <Page>
      <Texto cor="red">Texto de Exemplo 1</Texto>
      <Texto cor="white">Texto de Exemplo 2</Texto>
    </Page>
  );
}

/* Criando estilos com StyleSheet */
const styles = StyleSheet.create({
  page:{   /* Demos o nome page para esse estilo, mas poderia ser qualquer nome */
    width:200,
    height:200,
    backgroundColor:'#FF0000'
  },
  texto:{
    color:'#FFF',
    fontSize:25
  }
});


/* Estilizando com styled components */

const Page = styled.View`
  background-color:#0000FF;
`;

const Texto = styled.Text`
  color:${props=>props.cor};
  font-size:30px;
`;

/* 
  OBS.: font-size ou fontSize estão corretos
*/