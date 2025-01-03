import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import colors from '../assets/colors';

const CategoryToggle = ({
    image,
    text,
    containerStyle,
    textStyle,
    tintColor,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={[styles.categoryView, containerStyle]}
            activeOpacity={0.9}
            onPress={onPress}>
            <Image source={image} style={styles.imageStyle} tintColor={tintColor} />
            <Text style={[styles.categoryText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CategoryToggle;

const styles = StyleSheet.create({
    categoryView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(38),
        gap: 10,
        justifyContent: 'center',
    },
    categoryText: {
        fontSize: responsiveFontSize(2),
    },
    imageStyle: {
        tintColor: colors.primary,
    },
});
