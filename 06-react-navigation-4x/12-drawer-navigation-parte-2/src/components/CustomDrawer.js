import React from 'reat';
import styled from 'styled-components/native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

const Scroll = styled.ScrollView`
    flex:1;
`;

const Area = styled.SafeAreaView`
    flex:1;
    align-items:center;
`;

const Logo = styled.View`
    width:50px;
    height:50px;
    background-color:#000;
    margin-bottom:30px;
`;

const Botao = styled.Button``;

export default (props) => {
    //props.items Contem todos os itens do menu

    return (
        <Scroll>
            <Area>
                <Logo></Logo>
                <DrawerNavigatorItems 
                    {...props}
                    itemsContainerStyle={{width:'100%'}}
                />
                <Botao title="Sair" />
            </Area>
        </Scroll>
    );
}