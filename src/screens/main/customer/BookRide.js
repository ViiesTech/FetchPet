import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { agePicker, categories, responsiveFontSize, responsiveHeight, responsiveWidth, sizePicker, timings, vehicles } from '../../../utils'
import CustomInput from '../../../components/CustomInput'
import CategoryToggle from '../../../components/CategoryToggle'
import colors from '../../../assets/colors'
import Picker from '../../../components/Picker'
import DatePicker from '../../../components/DatePicker'
import CustomButton from '../../../components/CustomButton'
import icons from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '../../../components/CheckBox'
import LocationTwoInput from '../../../components/LocationTwoInputs'

const BookRide = () => {
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [ride, setRide] = useState(true)

    const navigation = useNavigation()

    return (
        <MainContainer style={{ paddingBottom: responsiveHeight(10) }}>
            <Header arrow={true} headerText={'Book a Ride'} />
            <View style={styles.subContainer}>
                    <View>
                            <Text style={styles.headingStyle}>What is your location?</Text>
                            <View style={styles.localInputContainer}>
            <LocationTwoInput  placeholder={'Pick Up'} icon={true} />
            <LocationTwoInput placeholder={'Drop Off'} icon={true} />
                            </View>
                </View>
                {/* <CheckBox riding={ride} onPress={() => setRide(!ride)} style={{ marginTop: responsiveHeight(2.7) }} /> */}
                {/* <Text style={styles.heading}>Find a caregiver for</Text> */}
                {/* <View style={styles.petCategoryView}>
                    {categories.map((item, index) => (
                        <CategoryToggle
                            image={item.image}
                            text={item.text}
                            textStyle={{
                                color:
                                    selectedCategory == index
                                        ? colors.secondary
                                        : colors.primary,
                            }}
                            tintColor={
                                selectedCategory == index ? colors.secondary : colors.primary
                            }
                            containerStyle={selectedCategory == index && styles.focused}
                            onPress={() => setSelectedCategory(index)}
                        />
                    ))}
                </View> */}
                <View style={{ paddingTop: responsiveHeight(3) }}>

                <Picker
                        items={sizePicker}
                        placeholder={'Me & My Pet'}
                        heading={'Riding with your pet?'}
                    />

                <CustomInput
                    placeholder={'Email'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Estimated ride time'}
                    value='30 Mins'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                    <Picker
                        items={sizePicker}
                        placeholder={'Dog'}
                        heading={'Select Your Pet?'}
                    />

                    <Picker
                        items={sizePicker}
                        placeholder={'Medium 21 - 50 lbs'}
                        heading={'How big is your pet?'}
                    />
                    <Picker
                        items={agePicker}
                        placeholder={'Puppy 0 - 1 years'}
                        heading={'How old is your pet?'}
                    />
                    <Picker
                        items={agePicker}
                        placeholder={'On Way'}
                        heading={'Select Ride'}
                    />
                     <CustomInput
                    placeholder={'Best Route'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Select Best Route'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'music type'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Quite ride'}
                    value='music type'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                    <Picker
                        items={vehicles}
                        placeholder={'Face time'}
                        heading={'Communication Preferences'}
                    />

                    <Picker
                        items={vehicles}
                        placeholder={'Yes'}
                        heading={'Request for photo updates to the pet profile'}
                    />
                    
                    <DatePicker heading={'Select Date'} value={'11/11/2024'} />
                    <Picker
                        items={timings}
                        placeholder={'10:00 Am'}
                        heading={'Select Time'}
                    />

                <CustomInput
                    placeholder={'What type'}
                    keyboardType={'text'}
                    heading={'What type of restraint will be provided for the transportation.'}
                    multiline={true}
                    numberOfLines={4}
                    alignVertical='top'
                    style={{height: responsiveHeight(15)}}
                    inputContainer={{height: responsiveHeight(12), marginBottom: responsiveHeight(3), width: '100%', borderRadius: 10}}
                    value='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Comment'}
                    keyboardType={'text'}
                    heading={'Additional comment or request box'}
                    multiline={true}
                    numberOfLines={4}
                    alignVertical='top'
                    style={{height: responsiveHeight(15)}}
                    inputContainer={{height: responsiveHeight(12),marginBottom: responsiveHeight(3), width: '100%', borderRadius: 10}}
                    value='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />   
                </View>
                <CustomButton onPress={() => navigation.navigate('ImmediateRide')} style={{ marginTop: responsiveHeight(2), width: responsiveWidth(90), backgroundColor: 'red' }} btnText={'Immediate Ride'} />
                <CustomButton onPress={() => navigation.navigate('AvailableDrivers')} style={{ marginTop: responsiveHeight(2), width: responsiveWidth(90) }} icon={icons.buttonHeart} btnText={'View Available Drivers'} />
            </View>
        </MainContainer>
    )
}

export default BookRide

const styles = StyleSheet.create({
    subContainer: {
        paddingTop: responsiveHeight(4),
        marginHorizontal: responsiveWidth(4)
        // alignItems: 'center',
    },
    localInputContainer: {
        flexDirection: 'row',
        gap: 25,
    },
    headingStyle: {
        marginBottom: responsiveHeight(1),
        fontSize: responsiveFontSize(2),
        color: colors.primary,
    },
    petCategoryView: {
        borderWidth: 1.5,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: responsiveWidth(80),
        paddingLeft: responsiveHeight(1),
        paddingVertical: responsiveHeight(0.7),
        borderColor: colors.txtColor,
    },
    focused: {
        backgroundColor: colors.primary,
        paddingVertical: responsiveHeight(0.7),
        borderRadius: 100,
    },
    heading: {
        marginBottom: responsiveHeight(1),
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(2),
        width: responsiveWidth(78),
        color: colors.primary,
    }
})