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

const TituloLogo = styled.Image`
    width:60px;
    height:60px;
`;

const Screen = (props) => {
    const [nome, setNome] = useState('');

    const fazerLogin = () => {
        props.navigation.navigate('Login');
    }

    return (
        <Page>
            <Texto>Seja Bem Vindo(a)!</Texto>

            <Input value={nome} onChangeText={e=>setNome(e)} />

            <Botao title="Fazer Login" onPress={fazerLogin}/>
        </Page>
    );
}

Screen.navigationOptions = ({navigation}) => {
    /* 
        Por padrão o stack navigator procura a propriedade headerTitle. Caso não encontre, então ele procura a 'title'. No headerTitle, além de inserirmos texto, também podemos inserir componentes.
    */

    /* Esse componente poderia ter sido criado aqui ou fora */
    const Titulo = (props) => {
        return (
            <TituloLogo source={props.source}/>
        );
    }

    return {
        headerTitle:<Titulo source={require('../images/logo.png')}/>,
        headerRight:<Botao title='Login' onPress={()=>navigation.navigate('Login')}/>,
        headerLeft:<Botao title='Login' onPress={()=>navigation.navigate('Login')}/>
    }
}

export default Screen;