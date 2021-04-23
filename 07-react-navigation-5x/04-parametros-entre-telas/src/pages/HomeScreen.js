import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen(){
    const navigation = useNavigation();

    const [name, setName] = useState('');

    const handleSendButton = () => {
        // Enviar informações para a tela About
        navigation.navigate('About', {
            name // é a mesma coisa que: name:name (pois o índice e valor tem o mesmo nome)
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