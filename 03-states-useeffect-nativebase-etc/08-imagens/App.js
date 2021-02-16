import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

export default () => {
  const [status, setStatus] = useState('');
  
  return (
    <Page>
      <Image 
        source={require('./src/images/zelda.png')} 
        style={{width:150, height:100}}
        resizeMode="cover"
        defaultSource={require('./src/images/placeholder.png')}
        onLoadStart={()=>setStatus('Carregando...')}
        onLoad={()=>setStatus('Carregou!')}
        onError={(e)=>setStatus(e.nativeEvent.error)}
      />
      <Text>{status}</Text>
    </Page>
  );

  /* Para imagens remotas: source={{uri:'https://www.google.com.br/google.jpg'}} */
}
