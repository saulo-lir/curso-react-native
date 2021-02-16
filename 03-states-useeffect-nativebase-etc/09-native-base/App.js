import React from 'react';
import styled from 'styled-components/native';
import { Button, Text } from 'native-base'; // npm install native-base

/* O NativeBase é um conjunto de componentes UI criadas para react native */

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

export default () => {
  
  return (
    <Page>
      <Button>
        <Text rounded danger>Botão de Teste</Text>
      </Button>
    </Page>
  );
}
