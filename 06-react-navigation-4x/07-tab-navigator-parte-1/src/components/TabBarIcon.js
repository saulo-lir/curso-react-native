import React from 'react';
import styled from 'styled-components/native';

const TabBarIcon = styled.View`
    width:30px;
    height:30px;
    justify-content:center;
    align-items:center;
`;

const TabBarImg = styled.Image`
    width:30px;
    height:30px;
`;

const TabBarBadge = styled.View`
    width:15px;
    height:15px;
    border-radius:8px;
    background-color:#FF0000;
    position:absolute;
    justify-content:center;
    align-items:center;
    right:0;
    top:0;
`;

const TabBarBadgeCount = styled.Text`
    font-size:12px;
    color:#FFF;
`;

export default (props) => {
    let img = null;

    switch(props.route){
        case 'Welcome':
            img = (props.focused.focused) ? require('../images/home_1.png') : require('../images/home_2.png');
            break;
        case 'Login':
            img = (props.focused.focused) ? require('../images/email_1.png') : require('../images/email_2.png');
            break;
    }

    return (
        <TabBarIcon>
            <TabBarImg source={img} />
            {props.badge > 0 &&
            <TabBarBadge>
                <TabBarBadgeCount>{props.badge}</TabBarBadgeCount>
            </TabBarBadge>
            }
        </TabBarIcon>
    );
}