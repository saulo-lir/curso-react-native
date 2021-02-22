import React from 'react';
import styled from 'styled-components/native';

/* 
Para aplicar o Swipe, o ideal é usarmos o TouchableHighlight ao invés do TouchableOpacity, 
pois neste último, ao clicar no item e ele ficar transparente, o usuário irá ver o componente que está atrás do item, o que não é interessante. O ideal é o usuário ver o componente apenas quando o item for arrastado para a direita.
*/

const Item = styled.TouchableHighlight` 
  background-color:#EEE;
  flex-direction:row;
  height:50px;
  align-items:center;
  padding-left:20px;
  padding-right:20px;
`;

const ItemText = styled.Text`
  font-size:15px;
  flex:1;
`;

const ItemCheck = styled.View`
  width:20px;
  height:20px;
  border-radius:10px;
  border:5px solid #CCC;
  background-color:${props=>props.done ? '#CCC' : '#FFF'};
`;

export default (props) => {
    return (
        <Item onPress={props.onPress} underlayColor="#DDD" activeOpacity={1}>
          <>
          <ItemText>{props.data.task} - {props.data.done.toString()}</ItemText>
          <ItemCheck done={props.data.done}></ItemCheck>
          </>
        </Item>
    );
}