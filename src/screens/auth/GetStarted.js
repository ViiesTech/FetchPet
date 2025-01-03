import { Animated, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import colors from '../../assets/colors'
import { responsiveFontSize, responsiveHeight } from '../../utils'
import CustomButton from '../../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import images from '../../assets/images'

const GetStarted = () => {
    const navigation = useNavigation()

    const logoPosition = useRef(new Animated.Value(responsiveHeight(50))).current
    const contentOpacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.sequence([
            Animated.timing(logoPosition, {
                toValue: responsiveHeight(0), 
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(contentOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start()
    }, [])

    const onChooseRole = async (type) => {
        await AsyncStorage.setItem('userType', type)
        navigation.navigate('Login')
    }

    return (
        <ImageBackground source={images.splashimage} style={{ flex: 1, tintColor: colors.primary }}>
            <View style={styles.subContainer}>
                <Animated.View style={[styles.logoContainer, { transform: [{ translateY: logoPosition }] }]}>
                    <Image source={images.logo} style={styles.logoStyle} />
                </Animated.View>
                <Animated.View style={[styles.content, { opacity: contentOpacity }]}>
                    <Text style={styles.heading}>Welcome To Fech!</Text>
                    <Text style={styles.subHeading}>Take Better Care of Your Pets</Text>
                    <CustomButton
                        textStyle={{ color: colors.primary, fontWeight: 'bold' }}
                        onPress={() => onChooseRole('Customer')}
                        btnText={'STARTED AS PET PARENTS'}
                        style={[styles.buttonStyle, { marginTop: responsiveHeight(4), marginBottom: responsiveHeight(2.5) }]}
                    />
                    <CustomButton
                        textStyle={{ color: colors.primary, fontWeight: 'bold' }}
                        onPress={() => onChooseRole('Driver')}
                        btnText={'STARTED AS DRIVER'}
                        style={styles.buttonStyle}
                    />
                </Animated.View>
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    subContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        alignItems: 'center',
    },
    heading: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(4)
    },
    subHeading: {
        color: colors.secondary,
        marginTop: responsiveHeight(1),
        fontSize: responsiveFontSize(2)
    },
    buttonStyle: {
        backgroundColor: colors.secondary,
    },
    logoStyle: {
        marginBottom: responsiveHeight(8),
        height: responsiveHeight(20),
        width: responsiveHeight(20)
    }
})