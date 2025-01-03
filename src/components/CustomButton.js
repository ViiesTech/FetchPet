import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import SVGIcons from './SVGIcons';

const CustomButton = ({ style, textStyle, btnText, onPress, isLoading, icon, disabled,}) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.buttonStyle, icon && { alignItems: 'center', gap: 15, flexDirection: 'row' }, style]}>
            {isLoading ? (
                <ActivityIndicator size={'large'} color={'white'} />
            ) : (
                <>
                    {icon &&
                        <SVGIcons image={icon} />
                    }
                    <Text
                        style={[
                            { fontSize: responsiveFontSize(2), color: 'white' },
                            textStyle,
                        ]}>
                        {btnText}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: colors.primary,
        width: responsiveWidth(80),
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: responsiveHeight(1.5),
    },
});
