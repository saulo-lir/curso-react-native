import React, {useState, useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Page = styled.View`
        flex:1;
        align-items:center;
        background-color: #363636;
        padding-top:16px;
    `;

const Title = styled.Text`
    font-size:18px;
    color:#FFF;
    font-weight:bold;
`;

const Input = styled.TextInput`
    width:260px;
    height:30px;
    border:1px solid #B5B5B5;
    background-color:#FFF;
    margin-top:16px;
    padding:5px;
`;

const List = styled.FlatList`
    flex:1;
`;

const ItemText = styled.Text`
  font-size:15px;
  margin-top:15px;
  color:#FFF;
`;

const Btn = styled.Button``;

function IndexScreen(){
    const navigation = useNavigation();
    const [items, setItens] = useState([]);
    const [text, setText] = useState('');

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:() => <Btn title="Adicionar" onPress={handleAddItem(text)} />
        });
    }, [text]);

    function handleChangeText(text){
        setText(text);
    }

    function handleAddItem(text){
        return () => {
            if(text.trim() != ''){
                let newItems = [...items];
                newItems.push(text);
                setItens(newItems);
            }
            setText('');
        }
    }

    return (
        <Page>
            <Title>Faça um Bolo</Title>
            <Input 
                placeholder="Digite um ingrediente"
                value={text}
                onChangeText={handleChangeText}
            />
            <List 
                data={items}
                renderItem={({item}) => <ItemText>{item}</ItemText>}
            />
        </Page>
    );
}

export default IndexScreen;