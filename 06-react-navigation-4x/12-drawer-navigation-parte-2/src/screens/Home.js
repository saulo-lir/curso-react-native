import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
    background-color:#FFF;
`;

const Texto = styled.Text`
    font-size:15px;
`;

const Botao = styled.Button``;

const Page = (props) => {
    return (
        <Container>
            <Texto>PÁGINA HOME</Texto>

            <Botao title="Fulano de tal" onPress={()=>props.navigation.navigate('Perfil')} />

            <Botao title="Abrir Drawer" onPress={()=>props.navigation.openDrawer()} />
        </Container>
    );
}

Page.navigationOptions = () => {
    return {
        title:'Home'
    }
}

export default Page;