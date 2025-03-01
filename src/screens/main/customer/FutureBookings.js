import { View, Text, Image } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { responsiveHeight, responsiveWidth } from '../../../utils'
import images from '../../../assets/images'

const FutureBookings = () => {
  return (
    <MainContainer>
          <Header arrow={true}  headerText={'My Future Bookings'} />

            <View style={{marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(3)}}>
                <Image source={images.book_calendar} />
            </View>
    </MainContainer>
  )
}

export default FutureBookings