import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import { petExp, prices, responsiveHeight, responsiveWidth } from '../../utils'
import images from '../../assets/images'
import SVGIcons from '../../components/SVGIcons'
import icons from '../../assets/icons'
import CustomInput from '../../components/CustomInput'
import Picker from '../../components/Picker'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const DriverDetails = () => {
    const navigation = useNavigation()

    return (
        <Container style={styles.container}>
            <Header hideUser={true} arrow={true} headerText={'Driver Details'} />
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image source={images.userprofile3} style={styles.imageStyle} />
                    <TouchableOpacity style={styles.iconWrapper}>
                        <SVGIcons width={responsiveWidth(10)} image={icons.add} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputWrapper}>
                    <CustomInput
                        heading={'Your Full Name'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5) }}
                        placeholder={'Alicia John'}
                    />
                    <CustomInput
                        heading={'Email Address'}
                        keyboardType={'email-address'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5) }}
                        placeholder={'aliciajohn456@gmail.com'}
                    />
                    <CustomInput
                        heading={'Your Number'}
                        keyboardType={'numeric'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5) }}
                        placeholder={'123-456-7890'}
                    />
                    <Picker
                        items={petExp}
                        placeholder={'1-2 years'}
                        heading={'Pet Experience'}
                    />
                    <Picker
                        items={prices}
                        placeholder={'$ 100 per 10 KM'}
                        heading={'Add Price'}
                    />
                    <CustomInput
                        textStyle={{ width: responsiveWidth(78) }}
                        heading={'What is your location?'}
                        inputContainer={{ marginBottom: responsiveHeight(4) }}
                        placeholder={'Los Angeles...'}
                        icon={true}
                    />
                    <CustomButton btnText={'Submit'} onPress={() => navigation.navigate('DriverStack')} />
                </View>
            </View>
        </Container>
    )
}

export default DriverDetails

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        paddingTop: responsiveHeight(0),
        paddingBottom: responsiveHeight(10)
    },
    subContainer: {
        alignItems: 'center',
        paddingTop: responsiveHeight(3)
    },
    imageContainer: {
    },
    imageStyle: {
        height: responsiveHeight(15),
        borderRadius: 100,
        width: responsiveHeight(15)
    },
    iconWrapper: {
        position: 'absolute',
        bottom: -5,
        left: responsiveHeight(8.5)
    },
    inputWrapper: {
        paddingTop: responsiveHeight(5)
    }
})