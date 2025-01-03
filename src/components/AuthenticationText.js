import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveFontSize } from '../utils';
import colors from '../assets/colors';

const AuthenticationText = ({ onPress, container, text }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[container]}>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

export default AuthenticationText;

const styles = StyleSheet.create({
    textStyle: {
        color: colors.primary,
        fontSize: responsiveFontSize(2.1),
    },
});
