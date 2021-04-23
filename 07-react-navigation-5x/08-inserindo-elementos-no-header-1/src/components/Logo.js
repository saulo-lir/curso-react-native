import React from 'react';
import {Image} from 'react-native';

function Logo(){
    return (
            <Image 
                style={{width:150, height:50}} 
                source={{uri:'https://www.google.com.br/google.jpg'}}
            />
    );
}

export default Logo;