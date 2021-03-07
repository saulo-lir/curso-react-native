import React, {useState} from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Texto = styled.Text`
    font-size:20px;
`;

const Botao = styled.Button``;

const Input = styled.TextInput`
    font-size:15px;
    border:1px solid #000;
    height:50px;
    width:200px;
`;

const Screen = (props) => {
    const [nome, setNome] = useState('');

    const fazerLogin = () => {
        props.navigation.navigate('Login', {nome});
    }

    return (
        <Page>
            <Texto>Seja Bem Vindo(a)!</Texto>

            <Input value={nome} onChangeText={e=>setNome(e)} />

            <Botao title="Fazer Login" onPress={fazerLogin}/>
        </Page>
    );
}

// Inserindo opções na tela através do navigationOptions
Screen.navigationOptions = () => {
    return {
        title:'Bem vindo(a)' // 1ª Forma de passar propriedades
    }
}

export default Screen;