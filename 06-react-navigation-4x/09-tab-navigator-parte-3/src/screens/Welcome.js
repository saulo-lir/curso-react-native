import React, {useState, useEffect} from 'react';
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

const Input = styled.TextInput`
    font-size:15px;
    border:1px solid #000;
    height:50px;
    width:200px;
`;

const Imagem = styled.Image`
    width:30px;
    height:30px;
`;

const Screen = (props) => {
    const [nome, setNome] = useState('');

    const mudarTela = () => {
        props.navigation.navigate('Login');
    }

    useEffect(()=>{
        props.navigation.setParams({
            titulo:nome
        });
    },[nome]);

    return (
        <Page>
            <Texto>Seja bem vindo(a)!</Texto>

            <Input value={nome} onChangeText={e=>setNome(e)} />

            <Botao title="Fazer Login" onPress={mudarTela}/>
        </Page>
    );
}

Screen.navigationOptions = ({navigation}) => {


    /* Utilizar na tabBar o botão criado */
    return {
    }
}

export default Screen;