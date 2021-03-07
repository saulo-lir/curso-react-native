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

            {/* Caso queiramos abrir o menu sem precisar arrastar a tela para o lado, podemos colocar essa ação num botão com o openDrawer() */}
            <Botao title="Abrir Drawer" onPress={()=>props.navigation.openDrawer()} />
        </Container>
    );
}

Page.navigationOptions = () => {
    const DrawerSaquare = styled.View`
        width:25px;
        height:25px;
        background-color:#000;    
    `;

    const DrawerImage = styled.Image`
        width:25px;
        height:25px;   
    `;

    return {
        title:'Início',
        drawerIcon:(focused, tintColor) => ( // Inserir ícone no menu
            /* <DrawerSaquare></DrawerSaquare> */
            <DrawerImage source={focused ? require('../images/home_1.png') : require('../images/home_2.png')} />
        )
    }
}

export default Page;