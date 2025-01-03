import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer'
import images from '../../../assets/images'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils'
import colors from '../../../assets/colors'
import CustomButton from '../../../components/CustomButton'
import icons from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const BookingConfirmed = () => {
    const navigation = useNavigation()

    return (
        <MainContainer>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Image source={images.booking} style={styles.imageStyle} />
                <Text style={styles.textStyle}>SUCCESS</Text>
                <Text style={styles.bookingText}>Booking confirmed</Text>
                <Text style={styles.desc}>A confirmation receipt has been sent to your registered email address.</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: responsiveHeight(6) }}>
                <CustomButton onPress={() => navigation.navigate('Home')} icon={icons.buttonHeart} btnText={'Back To Home'} />
            </View>
        </MainContainer>
    )
}

export default BookingConfirmed

const styles = StyleSheet.create({
    imageStyle: {
        height: responsiveHeight(30),
        width: responsiveHeight(30)
    },
    textStyle: {
        color: colors.black,
        fontWeight: 'bold',
        marginTop: responsiveHeight(4),
        fontSize: responsiveFontSize(2)
    },
    bookingText: {
        color: colors.primary,
        fontWeight: 'bold',
        marginTop: responsiveHeight(1),
        fontSize: responsiveFontSize(2.7)
    },
    desc: {
        color: colors.black,
        width: responsiveWidth(74),
        marginTop: responsiveHeight(1.5),
        fontSize: responsiveFontSize(1.8),
        textAlign: 'center'
    }
})