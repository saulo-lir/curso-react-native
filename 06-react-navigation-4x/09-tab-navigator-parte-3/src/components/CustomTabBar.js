import React from 'react';
import styled from 'styled-components/native';

const CustomTabBar = styled.SafeAreaView`
    width:100%;
    height:100px;
    background-color:#000;
    flex-direction:row;
`;

const CustomTabBarButton = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const CustomTabBarText = styled.Text`
    color:#FFF;
    font-size:15px;
`;

export default (props) => {

    // Criando nosso próprio tabBar
    return (
        <CustomTabBar> 
            {props.items.map((item, index) => { // Pegando todos os itens passados nas props
            return (
                <CustomTabBarButton key={index} onPress={() => props.navigation.navigate(item.route)}>
                    <CustomTabBarText>{item.text}</CustomTabBarText>
                </CustomTabBarButton>
            );
            })}
        </CustomTabBar>
    );
}