import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* Existem duas formas de navegar entre as telas:

1) Com a prop 'navigation': Quando a tela está dentro de um navigator, ela possui uma prop chamada props.navigation, que permite a navegação entre telas.

2) Com hooks, através do useNavigation (Formato mais atual);

*/

function HomeScreen(props){
    const navigation = useNavigation();

    const handleSobreClick = () => {
        //props.navigation.navigate('About');

        navigation.navigate('About');
    }

    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button title="Ir para a tela SOBRE" onPress={handleSobreClick} />
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

export default HomeScreen;