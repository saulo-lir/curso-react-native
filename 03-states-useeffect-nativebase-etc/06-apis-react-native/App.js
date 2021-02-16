import React, {useEffect} from 'react';
import { Dimensions, Alert } from 'react-native';
import styled from 'styled-components/native';

/* 
Dimensions: Utilizado para pegar as dimensões do dispositivo
Alert: Criar alertas mais personalizados
*/

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

export default () => {

  useEffect(()=>{
    var {height, width} = Dimensions.get("window");
    // Ou const window = Dimensions.get("window");
    // Ou let width = Dimensions.get("window").width;
    alert(`Largura: ${width}, Altura: ${height}`);
    
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }, []);

  return (
    <Page>
      
    </Page>
  );
}