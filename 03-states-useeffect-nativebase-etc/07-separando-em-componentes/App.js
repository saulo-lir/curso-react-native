import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import Header from './src/components/Header';


const Page = styled.View`
  flex:1;
`;

export default () => {

  return (
    <Page>
      <Header />
    </Page>
  );
}