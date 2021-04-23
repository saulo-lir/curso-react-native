import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

/* 
Também é possível pegar os parâmetros vindos de outra tela, através das props: 
props.params.route.nome_do_parametro. 

Aqui estamos fazendo através de hooks, com o useRoute.
*/

function AboutScreen(){
    const navigation = useNavigation();
    const route = useRoute();

    const name = route.params.name;

    /* Verificar se o parâmetro existe, para evitar erros:

        if shorthand:

        const name = route.params?.name; (Existe o parâmetro name? caso sim, use-o, caso não, desconsidere)

        if shorthand com else:

        const name = route.params?.name ?? 'Visitante';

    */

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text>Telinha de Sobre: {name}</Text>
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