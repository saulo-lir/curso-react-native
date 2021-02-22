import React from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';

const Page = styled.View`
  flex:1;
`;

/* Por padrão o aplicativo não tem scroll, então devemos utilizar o componente ScrollView para possibilitar esse recurso */
const Scroll = styled.ScrollView`
  flex:1;
`;

/* Esses componentes são clicáveis 

    TouchableOpacity

    TouchableHighlight: Esse só funciona se colocarmos um evento de click. 
    Inclusive, podemos aplicar a mesma prop de opacidade activeOpacity usada no TouchableOpacity. Contudo, a opacidade que será alterada é a do conteúdo.
*/

const Item = styled.TouchableHighlight`
  padding:10px;
  background-color:#CCC;
  flex-direction:row;
`;

const ItemText = styled.Text`
  font-size:15px;
  flex:1;
`;

const ItemCheck = styled.View`
  width:20px;
  height:20px;
  border-radius:10px;
  border:5px solid #FFF;
`;

export default () => {
  return (
    <Page>
      <Scroll>
        {/* 
          Para o TouchableOpacity, podemos controlar a opacidade com a prop activeOpacity={0.5}. O padrão é 0.2 (20%) 
          Para o TouchableHighlight, o default do activeOpacity é 0.85

          underlayColor="transparent" permite ver o fundo da tela

          <></> Corresponde a um elemento neutro. Serve para simular um container.
        */}
        {
          lista.map((item, index) => {
            return (
              <Item key={index} onPress={()=>{}} underlayColor="#FFF" activeOpacity={0.5}>
                <>
                <ItemText>{item.task}</ItemText>
                <ItemCheck></ItemCheck>
                </>
              </Item>
            );
          })
        }
      </Scroll>
    </Page>
  );
}
