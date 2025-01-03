import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SVGIcons from './SVGIcons';
import colors from '../assets/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import icons from '../assets/icons';

const CustomInput = ({
    style,
    value,
    placeholder,
    onChange,
    secureTextEntry,
    keyboardType,
    heading,
    inputContainer,
    icon,
    textStyle,
}) => {
    return (
        <>
            {heading && <Text style={[styles.headingStyle, textStyle]}>{heading}</Text>}
            <View style={[styles.inputView, icon || secureTextEntry ? { flexDirection: 'row', alignItems: 'center', } : null, inputContainer]}>
                {icon &&
                    <View style={{ paddingLeft: responsiveHeight(1.2) }}>
                        <SVGIcons image={icons.location} />
                    </View>
                }
                <TextInput
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={colors.black}
                    onChangeText={onChange}
                    style={[styles.input, style]}
                />
                {icon &&
                    <TouchableOpacity style={{ paddingRight: responsiveHeight(2) }} onPress={() => alert('working in progress')}>
                        <SVGIcons image={icons.marker} />
                    </TouchableOpacity>
                }
                {secureTextEntry &&
                    <TouchableOpacity style={{ paddingRight: responsiveHeight(2) }}>
                        <SVGIcons image={icons.eyes2} />
                    </TouchableOpacity>
                }
            </View>
        </>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    inputView: {
        borderColor: colors.black,
        borderRadius: 100,
        borderWidth: 1.5,
        width: responsiveWidth(80),
        paddingVertical: responsiveHeight(0.2),
    },
    input: {
        paddingLeft: responsiveHeight(2.5),
        color: colors.black,
        flex: 1,
    },
    headingStyle: {
        marginBottom: responsiveHeight(1),
        fontSize: responsiveFontSize(2),
        color: colors.primary,
        fontWeight: '500'
    },
});
