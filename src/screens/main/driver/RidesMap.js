import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MainContainer from '../../../components/MainContainer'
import MapHeader from '../../../components/MapHeader'
import images from '../../../assets/images'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils'
import IncomingRidesCard from '../../../components/IncomingRidesCard'
import RideStartedCard from '../../../components/RideStartedCard'
import colors from '../../../assets/colors'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const RidesMap = ({ route }) => {
  const rideAccepted = route?.params?.accepted || false
  const data = route?.params?.detail || {}
  const [isAccepted, setIsAccepted] = useState(rideAccepted)
  const [isStarted, setIsStarted] = useState(false)


  const navigation = useNavigation()

  const renderIncomingRide = () => {

    const onAcceptRide = () => {
      setIsAccepted(true)
    }

    const onButtonPress = () => {
      if (isAccepted) {
        navigation.navigate('Chat', { name: data.name })
      } else {
        navigation.goBack()
      }
    }


    const onStartRide = () => {
      setIsStarted(!isStarted)
      setIsAccepted(false)
    }
    return (
      <View style={[styles.cardView, { top: isAccepted ? responsiveHeight(45) : responsiveHeight(46) }]}>
        <IncomingRidesCard onAction={() => onButtonPress()} date={data.date} time={data.time} weight={data.weight} age={data.age} onStartRyde={() => onStartRide()} accepted={isAccepted} onAcceptPress={() => onAcceptRide()} incoming={true} distance={data.distance} image={data.image} name={data.name} style={{ borderWidth: 0, }} />
      </View>
    )
  }


  const renderRideStartedCard = () => {
    return (
      <View style={styles.startedView}>
        <Text style={styles.heading}>Your Ride Has Started</Text>
        <RideStartedCard name={data?.name} image={data?.image} style={{ marginTop: responsiveHeight(1.5), marginBottom: responsiveHeight(3) }} />
        <CustomButton onPress={() => navigation.navigate('RideComplete')} textStyle={{fontWeight: 'bold'}} style={{ paddingVertical: responsiveHeight(2.5), borderRadius: 15, width: responsiveWidth(83) }} btnText={'RIDE COMPLETED'} />
      </View>
    )
  }

  return (
    <MainContainer scrollEnabled={false}>
      {/* <View style={styles.background}> */}
      <Image style={{ flex: 1 }} source={images.map2} />
      {/* </View> */}
      <View style={styles.headerView}>
        <MapHeader accepted={isStarted ? isStarted : isAccepted} headerText={isAccepted ? 'Ride Arrived' : isStarted ? 'Ride Started' : 'Incoming Ride'} />
      </View>
      {isStarted ?
        renderRideStartedCard()
        :
        renderIncomingRide()
      }
    </MainContainer>
  )
}

export default RidesMap;

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  headerView: {
    position: 'absolute',
    top: responsiveHeight(0)
  },
  cardView: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  startedView: {
    position: 'absolute',
    left: 0,
    right: 0,
    padding: responsiveHeight(3),
    // justifyContent: 'center',
    backgroundColor: colors.secondary,
    top: responsiveHeight(65)
  },
  heading: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.3)
  }
})