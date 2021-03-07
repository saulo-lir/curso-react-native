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

    // Sempre que a state nome for modificada (segundo parâmetro no array sendo monitorado), então rode a função setParams que irá sobreescrever o valor do parâmetro 'titulo'
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
    return {
        tabBarLabel:'Bem Vindo :D',
        //tabBarVisible:false,
        tabBarIcon:(focused, tintColor) => { // O tabBarIcon retorna qualquer componente que criarmos
            /*
            if(focused){ // Verifica se a tab está ativa
                return <Imagem source={require('../images/home_1.png')}/>;
            }else{
                return <Imagem source={require('../images/home_2.png')}/>;
            }
            */
           return <TabBarIcon focused={focused} route="Welcome" badge={5}/>
        }
    }
}

export default Screen;