import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
    Container, 
    AddButton, 
    AddButtonIcon, 
    NotesList,
    NoNotes,
    NoNotesIcon,
    NoNotesText
} from './styles';

import NoteItem from '../../components/NoteItem'

export default () => {
    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list); // Pegar os dados do reducer
    //const list = [];

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suas notas',
            headerRight: () => (
                <AddButton underlayColor="transparent" onPress={()=>navigation.navigate('EditNote')}>
                    <AddButtonIcon source={require('../../assets/more.png')} />
                </AddButton>
            )
        });
    }, []);

    const handleNotePress = (index) => {
        navigation.navigate('EditNote', {
           key:index 
        });
    }

    return (
        <Container>
            {Object.keys(list).length > 0 &&
                <NotesList 
                    data={list}
                    renderItem={({item, index}) => (
                        <NoteItem // Essas props podem ter qualquer nome
                            data={item}
                            index={index}
                            onPress={handleNotePress}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            }

            {Object.keys(list).length == 0 &&
                <NoNotes>
                    <NoNotesIcon source={require('../../assets/note.png')} />
                    <NoNotesText>Nenhuma Anotação</NoNotesText>
                </NoNotes>
            }
        </Container>
    );
}