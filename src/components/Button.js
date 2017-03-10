import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonContainerStyle}>
            <Text style={styles.buttonTextStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonContainerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
