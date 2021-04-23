import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AboutScreen(){
    const navigation = useNavigation();

    const handleBackButton = () => {
        // Voltar à tela anterior
        navigation.goBack();

        //navigation.navigate('Home'); Ir para uma tela específica

        //navigation.popToTop(); // Voltar à tela inicial, ou seja, a tela 0 do histórico de navegação
    }

    return (
        <View style={styles.container}>
            <Text>Telinha de Sobre</Text>
            <Button title="Voltar" onPress={handleBackButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default AboutScreen;