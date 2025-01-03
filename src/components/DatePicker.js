import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import SVGIcons from './SVGIcons';
import colors from '../assets/colors';
import icons from '../assets/icons';

const DatePicker = ({ heading, containerStyle,value }) => {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)

    const handleConfirm = (date) => {
        console.log(date)
    }

    const hideDatePicker = () => {
        setIsDatePickerVisible(!isDatePickerVisible)
    }

    return (
        <View style={{ marginBottom: responsiveHeight(3) }}>
            <TouchableOpacity style={[containerStyle]} activeOpacity={0.5} onPress={() => setIsDatePickerVisible(!isDatePickerVisible)}>
                <Text style={styles.headingStyle}>{heading}</Text>
                <View style={styles.dateView}>
                    {/* <SVGIcons image={icons.calendar} /> */}
                    <Text style={styles.date}>{value}</Text>
                </View>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>

    )
}

export default DatePicker

const styles = StyleSheet.create({
    headingStyle: {
        marginBottom: responsiveHeight(1),
        color: colors.primary,
        fontSize: responsiveFontSize(1.8),
    },
    dateView: {
        borderRadius: 100,
        paddingVertical: responsiveHeight(1.8),
        paddingLeft: responsiveHeight(1.4),
        // gap: 10,
        // flexDirection: 'row',
        width: responsiveWidth(80),
        borderWidth: 1.5,
        borderColor: colors.txtColor
    },
    date: {
        color: colors.txtColor,
        fontSize: responsiveHeight(1.6)
    }
})