import React, { useEffect } from 'react';
import { Platform } from 'react-native'; // Utilizado para identificar qual o SO utilizado
import styled from 'styled-components/native';

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Logo = styled.View`
  width:100px;
  height:100px;
  background-color:#000;
  margin-bottom:20px;
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  border:1px solid #000;
`;

/* o KeyboardAvoidingView é um componente que possibilita a área do teclado se adaptar à tela, evitando que ele surja acima de outro componente. */
const KeyboardArea = styled.KeyboardAvoidingView`
  width:100%;
  flex:1;
  background-color:${Platform.OS=='ios'?'#00FF00':'#0000FF'}
  justify-content:center;
  align-items:center;
`;

/* 
  Para o correto funcionamento do KeyboardAvoidingView, precisamos passar algumas props:

  - behavior="padding" : O teclado irá se adequar ao espaçamento do input, não ficando em cima dele (é a prop mais utilizada)
  
  OBS.: Por padrão, o Android já utiliza esse efeito, mas o IOS não. Então o ideal é utilizarmos esse componente com essa prop apenas no IOS, mas no Android não.

  - behavior="position"
  - behavior="height"

*/

export default () => {

  useEffect(()=>{
    alert(`Sistema: ${Platform.OS} - ${Platform.Version}`);
  }, []);
  
  return (
    <Page>
      <KeyboardArea behavior={Platform.OS=='ios'?'padding':null}>
        <Logo></Logo>
        <Input />
      </KeyboardArea>
    </Page>
  );
}
