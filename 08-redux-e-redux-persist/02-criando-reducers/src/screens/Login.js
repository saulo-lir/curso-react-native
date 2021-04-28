import React from 'react';
import {connect} from 'react-redux'; // Realiza a conexão entre o redux e a tela
import styled from 'styled-components/native';
import {StackActions, NavigationActions} from 'react-navigation';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Texto = styled.Text`
    font-size:20px;
`;

const Input = styled.TextInput`
    border:1px solid #000;
    height:40px;
    font-size:15px;
    margin:20px;
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
            <Texto>TELA DE LOGIN - {props.name}</Texto>
            <Input value={props.name} onChangeText={e=>props.setName(e)} />
            <Texto>NOME: {props.name}</Texto>
            <Botao title="Fazer Login" onPress={handleLogin} />
        </Page>
    );
}

Screen.navigationOptions = () => {
    return {
        title: 'Fazer Login'
    }
}

/*
export default Screen;
Ao invés de exportar a tela, exportamos o connect
*/

/* 
Esse é o state do redux, e não da tela. Dentro dele, temos todas as informações de todos os reducers 

Através do state, passamos todas as informações que precisamos para serem acessadas como props na página.

Obs.: O nome das contantes pode ser qualquer um, mas por convenção, utilizamos esses.
*/
const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        email:state.userReducer.email
    };
}

// Alterando informações nos reducers. Aqui é criado a função 'setName', que pode ser acessada através das propos da tela.
const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name) => dispatch({type:'SET_NAME', payload:{name:name}})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);