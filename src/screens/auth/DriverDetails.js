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
import colors from '../../assets/colors'

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
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Alicia John'}
                    />
                    <CustomInput
                        heading={'Company Name'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Alicia John'}
                    />
                     <CustomInput
                        heading={'Date of Birth'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'12 Jan 2000'}
                    />
                    <CustomInput
                        heading={'EIN info'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Lorem ipsum...'}
                    />
                    <CustomInput
                        heading={'Home Address'}
                        keyboardType={'email-address'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Los Angeles...'}
                        icon={true}
                    />
                    <CustomInput
                        heading={'Sell Phone Number'}
                        keyboardType={'numeric'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'123-456-7890'}
                    />
                    <CustomInput
                        heading={'USDA registration number'}
                        keyboardType={'numeric'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'123-456-7890'}
                    />
                    <CustomInput
                        heading={'Email Address'}
                        keyboardType={'email-address'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Aliciajohn341@gmail.com'}
                        icon={true}
                    />
                    <CustomInput
                        heading={'Emergency Contact Information'}
                        keyboardType={'numeric'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'123-456-7890'}
                    />
                     <CustomInput
                        heading={'Drivers License'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Submit here'}
                    />
                     <CustomInput
                        heading={'VIN Number'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'1GCHK29U34E273229'}
                    />
                    <Picker
                        items={petExp}
                        placeholder={'Honda'}
                        heading={'Car Brand'}
                    />
                    <CustomInput
                        heading={'Car Model'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Honda Civic 2018 1.8 cvt'}
                    />
                    <CustomInput
                        heading={'Car color'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Black'}
                    />
                    <CustomInput
                        heading={'Car Year'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'2018'}
                    />
                    <CustomInput
                        heading={'Car license plate number'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'ABC - 123'}
                    />
                    <CustomInput
                        heading={'Insurance company name'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Insurance name..'}
                    />
                    <CustomInput
                        heading={'Insurance policy number'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'123-456-7890'}
                    />
                    <CustomInput
                        heading={'Insurance policy effective dates'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'01 jan 2024  -  01 jan 2025'}
                    />
                    <CustomInput
                        heading={'Insurance policy limits'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Lorem ipsum...'}
                    />
                    <CustomInput
                        heading={'Years of experience driving'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'2.5 Years of experience'}
                    />
                    <CustomInput
                        heading={'Rate per minute for drive'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'$ 50 Per 30 Min'}
                    />
                    <CustomInput
                        heading={'Years of experience with animals'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5), width: responsiveWidth(92) }}
                                            textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'2.5 Years of experience with animals'}
                    />
                    <Picker
                        items={petExp}
                        placeholder={'Lorem Ipsum'}
                        heading={'Fech means of communication methods'}
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
                        inputContainer={{ marginBottom: responsiveHeight(4), width: responsiveWidth(92) }}
                        placeholder={'Los Angeles...'}
                        icon={true}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
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
        paddingTop: responsiveHeight(5),
        marginHorizontal: responsiveWidth(4)
    }
})