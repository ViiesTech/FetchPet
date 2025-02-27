import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SVGIcons from './SVGIcons';
import colors from '../assets/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import icons from '../assets/icons';

const LocationTwoInput = ({
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
    alignVertical,
    editable,
    multiline
}) => {
    return (
        <>
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
                    editable={editable}
                    textAlignVertical={alignVertical}
                    multiline={multiline}
                    placeholder={placeholder}
                    placeholderTextColor={colors.gray2}
                    onChangeText={onChange}
                    style={[styles.input, style]}
                />
                {secureTextEntry &&
                    <TouchableOpacity style={{ paddingRight: responsiveHeight(2) }}>
                        <SVGIcons image={icons.eyes2} />
                    </TouchableOpacity>
                }
            </View>
        </>
    );
};

export default LocationTwoInput;

const styles = StyleSheet.create({
    inputView: {
        borderColor: colors.black,
        borderRadius: 10,
        borderWidth: 1.5,
        width: responsiveWidth(43),
        paddingVertical: responsiveHeight(0.2),
    },
    input: {
        // paddingLeft: responsiveHeight(2.5),
        color: colors.black,
        flex: 1,
    },
   
});
