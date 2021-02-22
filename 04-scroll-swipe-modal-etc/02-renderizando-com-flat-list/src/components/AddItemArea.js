import React, { useState } from 'react';
import styled from 'styled-components/native';
import uuid from 'react-native-uuid';

const AddItemArea = styled.View`
    background-color:#CCC;
    padding:10px;
`;

const AddItemInput = styled.TextInput`
    background-color:#FFF;
    font-size:15px;
    height:50px;
    border-color:5px;
    padding:10px;
`;

export default (props) => {
    const [item, setItem] = useState('');

    // Adicionando um novo item à lista de itens
    const handleSubmit = () => {
        //alert("Item: "+item);

        if(item.trim() != ''){
            let items = [...props.items]; // Clonando a variável

            items.push({
                id: uuid(), task: item.trim(), done:false
            });
    
            props.setItems(items);
        }

        setItem(''); // Limpar o input após envio
    }

    return (
        <AddItemArea>
            <AddItemInput 
                placeholder="Digite um novo item"
                value={item}
                onChangeText={e => setItem(e)}
                onSubmitEditing={handleSubmit} /* Executa a função handleSubmit ao submitar form */
                returnKeyType="send" /* Altera o nome do botão de submit. Podemos usar outros parâmetros, como 'done', 'go', 'next' e 'search' */
            />
        </AddItemArea>
    );
}