import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import colors from '../assets/colors';


const AdoptFormCheckBox = ({style,onPress,riding, label}) => {
    // const [riding, setRiding] = useState(true);
    return (
        <View style={[{ gap: 0 },style]}>
            <Text
                style={styles.labelStyle}>
                {label}
            </Text>
            <View style={{flexDirection: 'row', gap: 30}}>
            <View
                style={styles.checkBoxContainer}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.checkBox}>
                    {riding ? (
                        <View
                            style={styles.innerCheckBox} />
                    ) : null}
                </TouchableOpacity>
                <Text style={styles.innerText}>
                    {riding ? 'No' : 'Yes'}
                </Text>
            </View>
            <View
                style={styles.checkBoxContainer}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.checkBox}>
                    {riding ? (
                        <View
                            style={styles.innerCheckBox} />
                    ) : null}
                </TouchableOpacity>
                <Text style={styles.innerText}>
                    {riding ? 'Yes' : 'No'}
                </Text>
            </View>
            </View>
        </View>
    );
};

export default AdoptFormCheckBox;
const styles = StyleSheet.create({
    labelStyle: {
        color: '#2E6CAD',
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    checkBoxContainer: {
        // paddingVertical: responsiveHeight(2),
        paddingTop: responsiveHeight(1.5),
        paddingBottom: responsiveHeight(2.5),
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        borderRadius: responsiveHeight(3.5),
    },
    innerText: {
        color: colors.txtColor, 
        fontSize: responsiveFontSize(2)
    },
    checkBox: {
        borderWidth: 2,
        borderColor: '#2E6CAD',
        height: responsiveHeight(2),
        width: responsiveWidth(4),
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