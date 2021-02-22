import React, { useState } from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import uuid from 'react-native-uuid';
import { SwipeListView } from 'react-native-swipe-list-view'; // npm install react-native-swipe-list-view
import ListaItemSwipe from './src/components/ListaItemSwipe';

const Page = styled.View`
  flex:1;
`;

const Listagem = styled.FlatList`
  flex:1;
`;

export default () => {
  const [items, setItems] = useState(lista);

  const addNewItem = (texto) => {
    let newItems = [...items];
    
    newItems.push({
      id: uuid(), task: texto, done:false
    });

    setItems(newItems);
  }

  const toggleDone = (index) => {
    //alert("INDEX: "+index);
    let newItems = [...items];

    // Inverter valores
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  }

  const deleteItem = (index) => {
    //alert("Deletou item: "+index);
    let newItems = [...items];

    newItems = newItems.filter((it, i)=>i!=index);

    /* Equivale a:

      newItems = newItems.filter((it, i)=>{
        if(i != index){
          return true;
        }else{
          return false;
        }
      });
      
    */

    setItems(newItems);
  }

  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView 
        data={items}
        renderItem={({item, index}) => <ListaItem onPress={() => toggleDone(index)} data={item}/>}
        renderHiddenItem={({item, index})=> <ListaItemSwipe onDelete={() => deleteItem(index)} />} /* Semelhante ao renderItem, mas é específico para o item que ficará oculto */
        leftOpenValue={50} /* Quantos pixeis irão abrir quando o item for arrastado */
        disableLeftSwipe={true} /* Desativar a swipe da direita para a esquerda */
        keyExtractor={ (item) => item.id}
      />
    </Page>
  );
}
