import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function TabHomeScreen({navigation}){

    return (
        <View style={styles.container}>
            <Text>TAB HOME</Text>
            <Button title="Ir para tela 2" onPress={() => navigation.navigate('TabHome2Screen')}></Button>
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

export default TabHomeScreen;