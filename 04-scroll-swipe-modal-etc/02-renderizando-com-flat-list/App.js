import React, { useState } from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';

const Page = styled.View`
  flex:1;
`;

/* 
O ScrollView renderiza todos os elementos na tela. 
Isso pode ser uma desvantagem quando se tem muitos dados.

Então uma alternativa ao ScrollView é o FlatList, que faz a paginação dos itens na tela, economizando memória do celular.
*/
const Listagem = styled.FlatList`
  flex:1;
`;

/* 
  data: Array contendo os itens
  renderItem: Função que será executada em cada item renderizado. Devemos colocar um componente aqui.
*/

export default () => {
  const [items, setItems] = useState(lista);

  return (
    <Page>
      {/* 1ª forma de adicionar itens (De fora para dentro do componente): Passando como props os itens e a função que muda o estado do componente de listagem dos itens */}
      <AddItemArea items={items} setItems={setItems}/>
      <Listagem 
        data={items}
        renderItem={({item}) => <ListaItem data={item}/>}
        keyExtractor={ (item) => item.id}
      />
    </Page>
  );
}
