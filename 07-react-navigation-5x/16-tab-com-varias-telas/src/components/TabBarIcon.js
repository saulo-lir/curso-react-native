import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function TabBarIcon(props) {
    let imgSource = null;
    let baddgeCount = 7;

    switch(props.name){
        case 'TabAbout':
            imgSource = require('../assets/interface.png');
        break;
        case 'TabHome':
            imgSource = require('../assets/home.png');
        break;
        case 'TabConfig':
            imgSource = require('../assets/interface.png');
        break;
    }

    return (
        <View>
            <Image source={imgSource} style={styles.icon} />
            {baddgeCount > 0 &&
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{baddgeCount}</Text>
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    icon:{width:32, height:32},
    badge:{
        position:'absolute',
        right:-6,
        top:-3,
        backgroundColor:'#FF0000',
        width:15,
        height:15,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    badgeText:{
        color: '#FFF',
        fontSize:10
    }
});

export default TabBarIcon;