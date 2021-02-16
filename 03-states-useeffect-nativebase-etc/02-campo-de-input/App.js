import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

/* Criando um input text */
const Input = styled.TextInput`
  width:200px;
  height:40px;
  border:1px solid #000;
`;

const Hello = () => {
  const [name, setName] = useState('Gandalf');
  const [backupName, setBackupName] = useState('');

  function mudarTexto(texto){
    setName(texto);
  }

  /* 
    O nome handleClick é usado por convensão para ações no botão 
    Aqui estamos usando o const com arrow function apenas para demonstrar que também existe esse formato
  */
  const handleClick = () => {
    //alert("Clicou no botão!");
    setBackupName(name);
  }

  /* Associar o input com a state, e adicionar a ação de mudar essa state */
  return (
    <View>
      <Input value={name} onChangeText={mudarTexto} />
      <Text>Olá {name}</Text>

      <Button title="Salvar" onPress={handleClick} />

      <Text>{backupName}</Text>
    </View>
  );

  /* Outros formatos (Criando e já executando a função no componente):
  
    <Input value={name} onChangeText={(texto) => {setName(texto)}} />
    <Input value={name} onChangeText={(texto) => setName(texto)} />
    <Input value={name} onChangeText={texto => setName(texto)} />
  */
}

export default function App() {
  return (
    <Page>
      <Hello />
    </Page>
  );
}
