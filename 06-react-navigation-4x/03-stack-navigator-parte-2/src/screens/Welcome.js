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

/* 
Toda tela que está dentro de um navigator pode receber uma prop chamada 'navigation'. 
É através dessa prop que aplicamos as ações do navigator na tela.
*/

export default (props) => {
    const [nome, setNome] = useState('');

    const fazerLogin = () => {
        // Navegar para a tela de login (1º parâmetro), enviando informações para ela (2º parâmetro)
        props.navigation.navigate('Login', {nome});

        /* Mesa coisa que:
            props.navigation.navigate('Login', {
                nome:nome
            });
        */
    }

    return (
        <Page>
            <Texto>Seja Bem Vindo(a)!</Texto>

            <Input value={nome} onChangeText={e=>setNome(e)} />

            <Botao title="Fazer Login" onPress={fazerLogin}/>
        </Page>
    );
}