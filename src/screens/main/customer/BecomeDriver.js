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
import colors from '../../../assets/colors'

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
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Alicia John'}
                    />
                    <Picker
                        items={sizePicker}
                        placeholder={'Valid drivers record'}
                        heading={'background check'}
                    />
                    <CustomInput
                        heading={'Email Address'}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'aliciajohn456@gmail.com'}
                    />
                    <CustomInput
                        textStyle={{ width: responsiveWidth(78) }}
                        heading={'What is your location?'}
                        inputContainer={{width: '100%', marginBottom: responsiveHeight(2.5) }}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        placeholder={'Los Angeles...'}
                        icon={true}
                    />
                    <Picker
                        items={sizePicker}
                        placeholder={'Medium 21 - 50 lbs'}
                        heading={'Pet Size'}
                    />
                    <Picker
                        items={sizePicker}
                        placeholder={'Lorem ipsum...'}
                        heading={'Pet Types'}
                    />
                     <CustomInput
                        heading={'Contract Terms of Independent Contractor'}
                        placeholder={'Type message'}
                        value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,ullamco laboris nisi ut aliquip ex ea commodo consequat'}
                        multiline={true}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        alignVertical={'top'}
                        inputContainer={{ height: responsiveHeight(19), marginBottom: responsiveHeight(2.5), width:'100%', borderRadius: 5 }}
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
                    <CustomButton onPress={() => onSubmitPress()} style={{width: '100%', marginTop: responsiveHeight(1) }} btnText={'Submit'} />
                </View>
            </View>
        </MainContainer>
    )
}

export default BecomeDriver

const styles = StyleSheet.create({
    subContainer: {
        paddingTop: responsiveHeight(3),
        // alignItems: 'center'
        marginHorizontal: responsiveWidth(4),
    }
})