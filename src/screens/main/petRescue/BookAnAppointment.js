import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import { responsiveFontSize, responsiveHeight, responsiveWidth, timings } from '../../../utils';
import images from '../../../assets/images';
import colors from '../../../assets/colors';
import LocationTwoInput from '../../../components/LocationTwoInputs';
import Picker from '../../../components/Picker';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';

const BookAnAppointment = () => {
        const navigation = useNavigation()
    
  return (
    <MainContainer>
          <Header arrow={true} headerText={'Book an appointment'} hideUser={true} />

        <View style={{marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(2),}}>
            <Image source={images.book_calendar} />

            <View style={{marginTop: responsiveHeight(2)}}>
                        <Text style={styles.headingStyle}>What is your location?</Text>
                            <View style={styles.localInputContainer}>
                        <LocationTwoInput  placeholder={'Pick Up'} icon={true} />
                        <LocationTwoInput placeholder={'Drop Off'} icon={true} />
                            </View>
            </View>

            <View style={{marginTop: responsiveHeight(2)}}>
                <Picker
                        items={timings}
                        placeholder={'10:00 Am'}
                        heading={'Select Time'}
                        />
            </View>

            <CustomButton onPress={() => {}} style={{ marginTop: responsiveHeight(2), width: '100%' }}  btnText={'Confirm Booking'} />
        </View>
    </MainContainer>
  );
}

export default BookAnAppointment;

const styles = StyleSheet.create({
    localInputContainer: {
            flexDirection: 'row',
            gap: 25,
        },
        headingStyle: {
            marginBottom: responsiveHeight(1),
            fontSize: responsiveFontSize(2),
            color: colors.primary,
        },
})