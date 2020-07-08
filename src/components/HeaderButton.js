import React from 'react';
import {HeaderButton} from "react-navigation-header-buttons";
import Icons from 'react-native-vector-icons/dist/FontAwesome5';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Icons}
            iconSize={23}
            color='white'
        />
    );
};

export default CustomHeaderButton;
