import React, {useState, useEffect} from 'react';

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

    // Mudar o background color do header ao clicar no botão
    const mudarBg = () => {
        props.navigation.setParams({
            bg:nome
        });
    }

    // Sempre que a state nome for modificada (segundo parâmetro no array sendo monitorado), então rode a função setParams que irá sobreescrever o valor do parâmetro 'titulo'
    useEffect(()=>{
        props.navigation.setParams({
            titulo:nome
        });
    },[nome]);

    return (
        <Page>
            {/* Acessar parâmetro informado no navigator */}
            <Texto>{props.navigation.state.params.titulo}</Texto>

            <Input value={nome} onChangeText={e=>setNome(e)} />

            <Botao title="Mudar BG do Header" onPress={mudarBg}/>
        </Page>
    );
}

Screen.navigationOptions = ({navigation}) => {
    let bg = '#EEE';

    if(navigation.state.params && navigation.state.params.bg){
        bg = navigation.state.params.bg;
    }

    return {
      title:navigation.state.params.titulo,
      headerStyle:{
          backgroundColor:bg
      }
    }
}

export default Screen;