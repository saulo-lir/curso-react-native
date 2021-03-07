import React from 'react';
import styled from 'styled-components/native';
import TabBarIcon from '../components/TabBarIcon';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Texto = styled.Text`
    font-size:20px;
`;

const Botao = styled.Button``;

const Screen = (props) => {

    const voltar = () => {
        props.navigation.goBack();
    }

    return (
        <Page>
            <Texto>TELA DE LOGIN</Texto>
            <Botao title="Voltar" onPress={voltar} />
        </Page>
    );
}

Screen.navigationOptions = () => {
    return {
        title: 'Fazer Login',
        tabBarIcon:(focused, tintColor) => {
           return <TabBarIcon focused={focused} route="Login" badge={2}/>
        }
    }
}

export default Screen;