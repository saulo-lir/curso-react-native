import React, { useState, useLayoutEffect } from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* 

3) Alterando o header pelo próprio componente screen.

*/

function HomeScreen(){
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    /* Semelhante ao useEffect, mas mais recomendado para alterações de layout */
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: count
        });
    }, [count]);

    const handleSendButton = () => {
        /* Alterando o header através da função setOptions() */

        navigation.setOptions({
            title:name
        });

        //navigation.navigate('About', {name});
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

            {/* Alterando o header através da função setOptions() */}
            <Button title="BG Azul" onPress={()=>navigation.setOptions({
                headerStyle:{
                    backgroundColor:'#0000FF'
                }
            })} />

            {/* Alterando o header através do useEffect em conjunto com o setOptions() */}
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