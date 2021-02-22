import React, { useState } from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import uuid from 'react-native-uuid';

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

  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <Listagem 
        data={items}
        renderItem={({item, index}) => <ListaItem onPress={() => toggleDone(index)} data={item}/>} /* Não podemos usar o onPress={toggleDone(index)} diretamente (sem usar arrow function) pois nesse formato ele é executado assim que o componente é renderizado. OBS.: 'onPress' nesse caso foi apenas o nome dado a prop. Poderia ser qualquer outro nome. */
        keyExtractor={ (item) => item.id}
      />
    </Page>
  );
}
