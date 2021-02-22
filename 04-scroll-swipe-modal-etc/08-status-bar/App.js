import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
  background-color:#000;
`;

const Botao = styled.Button``;

/* 
  barStyle: light-content, dark-content
  Apenas no Android é possível alterar também o background-color
*/

export default () => {
  const [statusHide, setStatusHide] = useState(false);

  return (
    <Page>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#FF0000" 
        hidden={statusHide}
        animated={true} /* Funciona apenas no IOS. Quando houver uma mudança de propriedade no statusBar, ela será feita de forma animada */
      />

      <Botao title="Toggle StatusBar" onPress={() => setStatusHide(!statusHide)} />
    </Page>
  );
}
