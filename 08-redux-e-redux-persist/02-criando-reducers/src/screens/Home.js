import React from 'react';
import {connect} from 'react-redux';
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
            <Texto>Nome: {props.name}</Texto>
            <Botao title="Sair" />
        </Container>
    );
}

Page.navigationOptions = () => {
    return {
        title:'Home'
    }
}

const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        email:state.userReducer.email
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name) => dispatch({type:'SET_NAME', payload:{name:name}})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);