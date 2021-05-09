import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
    Container, 
    TitleInput, 
    BodyInput,
    CloseButton,
    CloseButtonIcon,
    SaveButton, 
    SaveButtonIcon,
    DeleteButton,
    DeleteButtonText
} from './styles';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.notes.list);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('new');

    // Preenchendo ou não a tela de edição de notas
    useEffect(()=>{
        if(route.params?.key != undefined && list[route.params.key]){
            setStatus('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
        }
    }, []);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: status == 'new' ? 'Nova Anotação': 'Editar Anotação',
            headerLeft: () => (
                <CloseButton underlayColor="transparent" onPress={handleCloseButton}>
                    <CloseButtonIcon source={require('../../assets/close.png')} />
                </CloseButton>
            ),
            headerRight: () => (
                <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
                    <SaveButtonIcon source={require('../../assets/save.png')} />
                </SaveButton>
            )
        });
    }, [status, title, body]); // Monitorando a mudança de status e a mudança de valores no título e corpo

    const handleCloseButton = () => {
        navigation.goBack();
    }

    const handleSaveButton = () => {
        if(title != '' && body != ''){
            if(status == 'edit'){
                dispatch({
                    type:'EDIT_NOTE',
                    payload:{
                        key:route.params.key,
                        title:title,
                        body:body
                        /* Ou
                        title,
                        body
                        */
                    }
                });
            }else{
                dispatch({ // Executar uma ação dentro do reducer
                    type:'ADD_NOTE',
                    payload:{
                        title,
                        body
                    }
                });
            }

            navigation.goBack();
        }else{
            alert("Preencha Título e Corpo!");
        }
    }

    const handleDeleteNoteButton = () => {
        dispatch({
            type:'DEL_NOTE',
            payload:{
                key:route.params.key
            }
        });

        navigation.goBack();
    }

    return (
        <Container>
            <TitleInput 
                value={title}
                onChangeText={t=>setTitle(t)}
                placeholder="Digite o título da anotação"
                placeholderTextColor="#CCC"
                autoFocus={true}
            />
            <BodyInput 
                value={body}
                onChangeText={t=>setBody(t)}
                placeholder="Digite o corpo da anotação"
                placeholderTextColor="#CCC"
                multiline={true}
                textAlignVertical="top"
            />
            {status == 'edit' &&
                <DeleteButton underlayColor="transparent" onPress={handleDeleteNoteButton}>
                    <DeleteButtonText>Excluir Anotação</DeleteButtonText>
                </DeleteButton>
            }
        </Container>
    );
}