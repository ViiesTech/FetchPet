import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import colors from '../assets/colors';


const CheckBox = ({style,onPress,riding}) => {
    // const [riding, setRiding] = useState(true);
    return (
        <View style={[{ width: responsiveWidth(80), alignSelf: 'center', gap: 10 },style]}>
            <Text
                style={styles.labelStyle}>
                Riding with your pet?
            </Text>
            <View
                style={styles.checkBoxContainer}>
                <Text style={styles.innerText}>
                    {riding ? 'Yes' : 'No'}
                </Text>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.checkBox}>
                    {riding ? (
                        <View
                            style={styles.innerCheckBox} />
                    ) : null}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CheckBox;
const styles = StyleSheet.create({
    labelStyle: {
        color: '#2E6CAD',
        fontSize: responsiveFontSize(2),
    },
    checkBoxContainer: {
        borderWidth: 1.5,
        borderColor: colors.txtColor,
        paddingHorizontal: responsiveHeight(2),
        paddingVertical: responsiveHeight(1.4),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: responsiveHeight(3.5),
    },
    innerText: {
        color: colors.txtColor, fontSize: responsiveFontSize(2)
    },
    checkBox: {
        borderWidth: 2,
        borderColor: '#2E6CAD',
        height: responsiveHeight(3.1),
        width: responsiveWidth(6.5),
        borderRadius: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCheckBox: {
        backgroundColor: '#2E6CAD',
        width: responsiveWidth(3.7),
        height: responsiveHeight(1.8),
        borderRadius: responsiveHeight(2),
    }
})