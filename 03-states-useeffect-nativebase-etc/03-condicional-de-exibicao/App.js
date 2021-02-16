import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Input = styled.TextInput`
  width:200px;
  height:40px;
  border:1px solid #000;
`;

const Quadrado = styled.View`
  width:200px;
  height:200px;
  justify-content:center;
  align-items:center;
  border:3px dashed #000;
  margin-top:30px;
`;

const Hello = () => {
  const [name, setName] = useState('Gandalf');
  const [mostrar, setMostrar] = useState(false);

  const handleClick = () => {
    setMostrar(!mostrar);

    /* Equivale a:
      if(mostrar){
        setMostrar(false);
      }else{
        setMostrar(true);
      }
    */
  }

  /* Aplicando condicionais para exibir ou não o quadrado e mudar o nome do botão */
  return (
    <View>
      <Input value={name} onChangeText={t => setName(t)} />

      <Button title={mostrar ? 'Ocultar Nome' : 'Mostrar Nome'} onPress={handleClick} />

      {mostrar && 
        <Quadrado>
          <Text>Seu nome é</Text>
          <Text>{name}</Text>
        </Quadrado>
      }

    </View>
  );
}

export default function App() {
  return (
    <Page>
      <Hello />
    </Page>
  );
}
