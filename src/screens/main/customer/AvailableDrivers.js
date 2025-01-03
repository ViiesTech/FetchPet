import { StyleSheet, View } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { availableDrivers, responsiveHeight } from '../../../utils'
import TopRatedProfiles from '../../../components/TopRatedProfiles'
import { useNavigation } from '@react-navigation/native'

const AvailableDrivers = () => {

  const navigation = useNavigation()

  return (
    <MainContainer style={{paddingBottom: responsiveHeight(5)}}>
      <Header arrow={true} headerText={`Here's`} />
      <View style={styles.subContainer}>
        {availableDrivers.map((item,index) => {
          return (
            <TopRatedProfiles onAccept={() => navigation.navigate('Information',{data: item,index: index})} image={item.image} request={true} name={item.name} rating={item.rating} designation={item.designation} />
          )
        })}
      </View>
    </MainContainer>
  )
}

export default AvailableDrivers

const styles = StyleSheet.create({
  subContainer: {
    paddingTop: responsiveHeight(3),
    alignItems: 'center'
  }
})