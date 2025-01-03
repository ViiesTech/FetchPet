import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
import { responsiveFontSize, responsiveHeight } from '../utils'

const Container = ({ children, style, scrollEnabled, boldText,
    desc,
    heading, }) => {
    return (
        <ScrollView scrollEnabled={scrollEnabled} showsVerticalScrollIndicator={false} contentContainerStyle={[styles.container, style]}>
            {heading && (
                <>
                    <Text style={styles.heading}>
                        <Text style={{ fontWeight: 'bold' }}>{boldText}</Text>
                    </Text>
                    <Text style={styles.desc}>{desc}</Text>
                </>
            )}
            {children}
        </ScrollView>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        // flex: 1,
        paddingTop: responsiveHeight(5),
    },
    heading: {
        color: colors.primary,
        fontWeight: '300',
        fontSize: responsiveFontSize(4.5),
    },
    desc: {
        color: colors.primary,
        marginTop: responsiveHeight(1),
        fontSize: responsiveFontSize(2),
    },
})