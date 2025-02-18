import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { petExp, prices, responsiveHeight, responsiveWidth } from '../../../utils'
import images from '../../../assets/images'
import SVGIcons from '../../../components/SVGIcons'
import icons from '../../../assets/icons'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Picker from '../../../components/Picker'

const EditProfile = () => {
    const [role, setRole] = useState(null)
    const navigation = useNavigation()

    useEffect(() => {

        fetchType()

    }, [])

    const fetchType = async () => {
        const type = await AsyncStorage.getItem('userType')
        setRole(type)
    }

    return (
        <MainContainer>
            <Header headerText={'Edit Profile'} arrow={true} hideUser={true} />
            <View style={styles.subContainer}>
                <View>
                    <Image source={images.profile12} style={styles.imageStyle} />
                    <TouchableOpacity style={styles.addWrapper}>
                        <SVGIcons width={responsiveHeight(15)} image={icons.add} />
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
                        editable={false}
                        inputContainer={{ marginBottom: responsiveHeight(2.5) }}
                        placeholder={'aliciajohn456@gmail.com'}
                    />
                    <CustomInput
                        heading={'Your Number'}
                        keyboardType={'numeric'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5) }}
                        placeholder={'123-456-7890'}
                    />
                    {role === 'Driver' &&
                    <>
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
                    </>
                    }
                    <CustomInput
                        textStyle={{ width: responsiveWidth(78) }}
                        heading={'What is your location?'}
                        inputContainer={{ marginBottom: responsiveHeight(4) }}
                        placeholder={'Los Angeles...'}
                        icon={true}
                    />
                    <CustomButton style={{ marginBottom: responsiveHeight(1.5) }} btnText={'Update Profile'} />
                    {role === 'Customer' &&
                        <CustomButton onPress={() => navigation.navigate('AddPet', { type: 'edit' })} btnText={'Edit Pet Info'} />
                    }
                </View>
            </View>

        </MainContainer>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    subContainer: {
        alignItems: 'center',
        paddingTop: responsiveHeight(3)
    },
    imageStyle: {
        height: responsiveHeight(14),
        width: responsiveHeight(14),
        borderRadius: 100
    },
    addWrapper: {
        position: 'absolute',
        bottom: -5,
        left: responsiveHeight(2),
        borderRadius: 100,
        padding: 5,
    },
    inputWrapper: {
        paddingTop: responsiveHeight(3),
    }
})