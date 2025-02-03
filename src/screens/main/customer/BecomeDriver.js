import { StyleSheet, View } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import CustomInput from '../../../components/CustomInput'
import { agePicker, responsiveHeight, responsiveWidth, sizePicker, timings } from '../../../utils'
import Picker from '../../../components/Picker'
import DatePicker from '../../../components/DatePicker'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const BecomeDriver = () => {
    const navigation = useNavigation()

    const onSubmitPress = async () => {
       await AsyncStorage.setItem('userType','Driver') 
            navigation.navigate('DriverStack')
    }

    return (
        <MainContainer style={{ paddingBottom: responsiveHeight(5) }}>
            <Header add={true} arrow={true} headerText={'Become A Driver'} />
            <View style={styles.subContainer}>
                <View>
                    <CustomInput
                        heading={'Your Full Name'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5) }}
                        placeholder={'Alicia John'}
                    />
                    <CustomInput
                        heading={'Email Address'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5) }}
                        placeholder={'aliciajohn456@gmail.com'}
                    />
                    <CustomInput
                        textStyle={{ width: responsiveWidth(78) }}
                        heading={'What is your location?'}
                        inputContainer={{ marginBottom: responsiveHeight(2.5) }}
                        placeholder={'Los Angeles...'}
                        icon={true}
                    />
                    <Picker
                        items={sizePicker}
                        placeholder={'Medium 21 - 50 lbs'}
                        heading={'Services Type'}
                    />
                    <Picker
                        items={agePicker}
                        placeholder={'Puppy 0 - 1 years'}
                        heading={'Experience Level'}
                    />
                    <DatePicker heading={'Select Date'} value={'11/11/2024'} />
                    <Picker
                        items={timings}
                        placeholder={'10:00 Am'}
                        heading={'Select Time'}
                    />
                    <CustomButton onPress={() => onSubmitPress()} style={{ marginTop: responsiveHeight(1) }} btnText={'Submit'} />
                </View>
            </View>
        </MainContainer>
    )
}

export default BecomeDriver

const styles = StyleSheet.create({
    subContainer: {
        paddingTop: responsiveHeight(3),
        alignItems: 'center'
    }
})