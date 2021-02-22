import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage'; // npm install @react-native-community/async-storage

const Page = styled.View`
  flex:1;
  align-items:center;
  padding-top:50px;
`;

const Input = styled.TextInput`
  font-size:15px;
  border:1px solid #000;
  height:50px;
  width:90%;
  padding:10px;
`;

const Salvar = styled.Button``;

const NameArea = styled.View`
  padding:20px;
  background-color:#CCC;
  width:100%;
`;

const Nome = styled.Text`
  font-size:18px;
`;

export default function App() {
  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');

  // Salvar informações na memória do celular
  const handleSave = async () => {
    if(novoNome != ''){
      await AsyncStorage.setItem('@nome', novoNome); // Nome da variável (por convenção precedido de @) que iremos salvar a informação, variável que contém a informação a ser salva
      setNome(novoNome);
      setNovoNome('');
    }
  }

  // Pegar a informação que foi salva na memória do celular
  const getNome = async () => {
    const n = await AsyncStorage.getItem('@nome');
    setNome(n);
  }

  useEffect(() => {
    getNome();
  }, []);

  return (
    <Page>
      <Input 
        placeholder="Qual seu nome?" 
        value={novoNome} 
        onChangeText={e=>setNovoNome(e)}
      />

      <Salvar title="Salvar" onPress={handleSave}/>

      <NameArea>
        <Nome>{nome}</Nome>
      </NameArea>
    </Page>
  );
}
