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

const BookRide = () => {
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [ride, setRide] = useState(true)

    const navigation = useNavigation()

    return (
        <MainContainer style={{ paddingBottom: responsiveHeight(10) }}>
            <Header arrow={true} headerText={'Book a Ride'} />
            <View style={styles.subContainer}>
                <CustomInput textStyle={{ width: responsiveWidth(78) }} heading={'What is your location?'} placeholder={'Los Angeles...'} icon={true} />
                <CheckBox riding={ride} onPress={() => setRide(!ride)} style={{ marginTop: responsiveHeight(2.7) }} />
                <Text style={styles.heading}>Find a caregiver for</Text>
                <View style={styles.petCategoryView}>
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
                </View>
                <View style={{ paddingTop: responsiveHeight(3) }}>
                 {ride && 
                 <>  
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
                    </>
                }
                    <Picker
                        items={vehicles}
                        placeholder={'Honda'}
                        heading={'Choose Vehicle'}
                    />
                    <DatePicker heading={'Select Date'} value={'11/11/2024'} />
                    <Picker
                        items={timings}
                        placeholder={'10:00 Am'}
                        heading={'Select Time'}
                    />
                </View>
                <CustomButton onPress={() => navigation.navigate('AvailableDrivers')} style={{ marginTop: responsiveHeight(2) }} icon={icons.buttonHeart} btnText={'View Available Drivers'} />
            </View>
        </MainContainer>
    )
}

export default BookRide

const styles = StyleSheet.create({
    subContainer: {
        paddingTop: responsiveHeight(4),
        alignItems: 'center',
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