import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Texto = styled.Text`
    font-size:15px;
`;

const Page = () => {
    return (
        <Container>
            <Texto>PÁGINA PERFIL</Texto>
        </Container>
    );
}

export default Page;