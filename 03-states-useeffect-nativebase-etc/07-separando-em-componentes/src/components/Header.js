import React from 'react';
import styled from 'styled-components/native';

const Header = styled.View`
    height:60px;
    width:100%;
    background-color:#CCC;
    justify-content:center;
    align-items:center;
`;

const HeaderText = styled.Text`

`;

export default () => {
    return (
        <Header>
            <HeaderText>Texto Qualquer</HeaderText>
        </Header>
    );
}