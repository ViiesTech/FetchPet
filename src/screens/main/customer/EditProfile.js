import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { petExp, prices, responsiveHeight, responsiveWidth, vehicles } from '../../../utils'
import images from '../../../assets/images'
import SVGIcons from '../../../components/SVGIcons'
import icons from '../../../assets/icons'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Picker from '../../../components/Picker'
import colors from '../../../assets/colors'

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
                <View style={{alignItems: 'center'}}>
                    <Image source={images.profile12} style={styles.imageStyle} />
                    <TouchableOpacity style={styles.addWrapper}>
                        <SVGIcons width={responsiveHeight(15)} image={icons.add} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputWrapper}>
                    <CustomInput
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        heading={'Your Full Name'}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        placeholder={'Alicia John'}
                    />
                    <CustomInput
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        heading={'Home Address'}
                        editable={false}
                        secureTextEntry={true}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        placeholder={'*******'}
                    />
                    <CustomInput
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        heading={'Phone Number'}
                        keyboardType={'numeric'}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        placeholder={'123-456-7890'}
                    />
                    <CustomInput
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        heading={'Email Address'}
                        editable={false}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        placeholder={'aliciajohn456@gmail.com'}
                    />
                    <CustomInput
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        heading={'Emergency Number'}
                        keyboardType={'numeric'}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
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

                    <Picker
                        items={vehicles}
                        placeholder={'Yes'}
                        heading={'if user wishes to round up fares automatically.'}
                    />

                    <Picker
                        items={vehicles}
                        placeholder={'Name of shelter or rescue...'}
                        heading={'Name of shelter or rescue that you wish to donate'}
                    />

                    <Picker
                        items={vehicles}
                        placeholder={'Lorem ipsum...'}
                        heading={'Communication preference selection'}
                    />

                    <CustomInput
                        textStyle={{ width: responsiveWidth(78), color: colors.primary, fontWeight: 'bold' }}
                        heading={'Full Address'}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        placeholder={'Los Angeles...'}
                        icon={true}
                    />

                    <CustomInput
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        heading={'Sound Preference'}
                        keyboardType={'text'}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        placeholder={'Light Music'}
                    />

                    <CustomButton style={{ marginBottom: responsiveHeight(1.5),  width: responsiveWidth(90) }} btnText={'Update Profile'} />
                    {role === 'Customer' &&
                        <CustomButton style={{marginBottom: responsiveHeight(1.5), width: responsiveWidth(90) }} onPress={() => navigation.navigate('AddPet', { type: 'edit' })} btnText={'Edit Pet Info'} />
                    }
                </View>
            </View>

        </MainContainer>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    subContainer: {
        // alignItems: 'center',
        paddingTop: responsiveHeight(3),
        marginHorizontal: responsiveWidth(4),
    },
    imageStyle: {
        height: responsiveHeight(14),
        width: responsiveHeight(14),
        borderRadius: 100
    },
    addWrapper: {
        position: 'absolute',
        bottom: -5,
        right: responsiveHeight(11),
        borderRadius: 100,
        padding: 5,
    },
    inputWrapper: {
        paddingTop: responsiveHeight(3),
    }
})