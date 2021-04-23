import React, { useState, useLayoutEffect } from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen(){
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: count
        });
    }, [count]);

    /* 
        Fazendo alterações no header com componentes do próprio header.
        Aqui estamos criando o componente na própria screen, para fazer a comunicação com as states, que devem ser acessadas dentro do próprio componente.
    */
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:() => <Button title="+1" onPress={handleHeaderPlus} />
        });
    }, []);

    const handleHeaderPlus = () => {
        // setCount(count + 1); Dessa forma ele sempre irá considerar o valor inicial do count, ou seja, 0. Então ele sempre fará 0 + 1 == 1. Para contornar isso, passamos uma função como parâmetro do setCount, e passamos como parâmetro dessa função o count, que virá com o valor atualizado.

        setCount((count) => {
            return count + 1;
        });

        /* 
            Formas resumidas da chamada acima:

            setCount((c) => (c + 1));

            setCount((c) => c + 1);

            setCount(c => c + 1);
        */
    }

    const handleSendButton = () => {

        navigation.setOptions({
            title:name
        });
    }

    return (
        <View style={styles.container}>
            <Text>Qual seu nome?</Text>

            <TextInput 
                style={styles.input} 
                value={name} 
                onChangeText={t=>setName(t)} 
            />

            <Button title="Enviar" onPress={handleSendButton} />

            <Button title="BG Azul" onPress={()=>navigation.setOptions({
                headerStyle:{
                    backgroundColor:'#0000FF'
                }
            })} />

            <Button title="+1" onPress={()=>setCount(count + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:250,
        padding:10,
        fontSize:15,
        backgroundColor:'#DDD'
    }
});

export default HomeScreen;