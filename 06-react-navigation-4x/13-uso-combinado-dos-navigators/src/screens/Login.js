import React from 'react';
import styled from 'styled-components/native';
import {StackActions, NavigationActions} from 'react-navigation'; 
// StackActions: Responsável pelo reset do histórico 
// NavigationActions: Faz o envio para outra tela quando o histórico é resetado

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

    const handleLogin = () => {
        // Resetar o histórico
        const resetAction = StackActions.reset({
            index:0,
            actions:[ // Enviar para a tela HomeTab
                NavigationActions.navigate({routeName:'HomeTab'})
            ]
        });

        // Executa a ação criada
        props.navigation.dispatch(resetAction);
    }

    return (
        <Page>
            <Texto>TELA DE LOGIN</Texto>
            <Botao title="Fazer Login" onPress={handleLogin} />
        </Page>
    );
}

Screen.navigationOptions = () => {
    return {
        title: 'Fazer Login'
    }
}

export default Screen;