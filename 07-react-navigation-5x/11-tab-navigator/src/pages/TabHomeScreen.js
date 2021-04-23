import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TabHomeScreen(){

    return (
        <View style={styles.container}>
            <Text>TAB HOME</Text>
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