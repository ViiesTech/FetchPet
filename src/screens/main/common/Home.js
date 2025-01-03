import { ActivityIndicator, Animated, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../../../components/Header'
import MainContainer from '../../../components/MainContainer'
import colors from '../../../assets/colors'
import { incomingRides, responsiveFontSize, responsiveHeight, responsiveWidth, serviceProfiles, services } from '../../../utils'
import images from '../../../assets/images'
import ServiceCard from '../../../components/ServiceCard'
import TopRatedProfiles from '../../../components/TopRatedProfiles'
import CustomButton from '../../../components/CustomButton'
import icons from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IncomingRidesCard from '../../../components/IncomingRidesCard'
import Banner from '../../../components/Banner'

const Home = () => {
  const [type, setType] = useState('')

  const navigation = useNavigation()
  const fadeAnimService = useRef(new Animated.Value(0)).current // Fade effect for services
  const fadeAnimProfile = useRef(new Animated.Value(0)).current // Fade effect for top-rated profiles
  const fadeAnimRides = useRef(new Animated.Value(0)).current
  const slideInAnim = useRef(new Animated.Value(-responsiveWidth(89))).current

  useEffect(() => {

    fetchUserRole()

    Animated.timing(slideInAnim, {
      toValue: 0, // End at 0 (fully visible)
      duration: 500,
      useNativeDriver: true,
    }).start()

    Animated.timing(fadeAnimService, {
      toValue: 1, // Fully visible
      duration: 500,
      delay: 300, // Optional delay
      useNativeDriver: true,
    }).start()

    Animated.timing(fadeAnimProfile, {
      toValue: 1,
      duration: 500,
      delay: 500,
      useNativeDriver: true,
    }).start()

    Animated.timing(fadeAnimRides, {
      toValue: 1,
      duration: 500,
      delay: 700,
      useNativeDriver: true,
    }).start()

  }, [])

  
  const rideButtonPress = () => {
      if (type === 'Customer') {
        navigation.navigate('BookRide')
      } else {
        alert('working in progress')
      }
    }
  


  const fetchUserRole = async () => {
    const role = await AsyncStorage.getItem('userType')
    setType(role)
  }

  const renderServices = () => {
    return (
      <Animated.View
        style={{ opacity: fadeAnimService, paddingTop: responsiveHeight(4), width: responsiveWidth(89) }}
      >
        <Text style={styles.heading}>Which Service Do You Need?</Text>
        <FlatList
          data={services}
          numColumns={2}
          contentContainerStyle={{ paddingTop: responsiveHeight(2.5) }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item, index }) => {
            return (
              <ServiceCard onPress={() => {
                if (index == 0) {
                  navigation.navigate('AvailableDrivers')
                }
              }} image={item.image} text={item.text} />
            )
          }}
        />
      </Animated.View>
    )
  }

  const renderTopProfiles = () => {
    return (
      <Animated.View
        style={{ opacity: fadeAnimProfile, paddingTop: responsiveHeight(4), width: responsiveWidth(89) }}
      >
        <Text style={styles.heading}>Top Rated Profiles</Text>
        <FlatList
          data={serviceProfiles}
          horizontal
          style={{ marginHorizontal: -responsiveHeight(3) }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: responsiveHeight(2.5), paddingTop: responsiveHeight(2) }}
          renderItem={({ item, index }) => {
            return (
              <TopRatedProfiles profilePress={() => navigation.navigate('DriverProfile', {detail: item})} image={item.image} containerStyle={{ marginRight: responsiveHeight(2) }} name={item.name} designation={item.designation} rating={item.rating} />
            )
          }}
        />
      </Animated.View>
    )
  }

  const renderIncomingRides = () => {
    return (
      <Animated.View style={{ opacity: fadeAnimRides }}>
        <FlatList
          data={incomingRides}
          contentContainerStyle={{paddingTop: responsiveHeight(2.5)}}
          ListHeaderComponent={() => (
            <Text
              style={[styles.heading, { marginBottom: responsiveHeight(2.3) }]}
            >
              Incoming Rides
            </Text>
          )}
          renderItem={({ item }) => {
            return (
              <IncomingRidesCard weight={item.weight} onAcceptPress={() => navigation.navigate('RidesMap', { detail: item, accepted: true })} btnStyle={{ paddingVertical: responsiveHeight(1.5), borderRadius: 5 }} onPress={() => navigation.navigate('RidesMap', { detail: item })} name={item.name} image={item.image} distance={item.distance} />
            )
          }}
        />
      </Animated.View>
    )
  }

  return (
    <MainContainer style={{ paddingBottom: responsiveHeight(10) }}>
      {!type ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
        :
        <>
          <Header type={type} heart={true} headerText={type === 'Driver' ? 'Hey John,' : 'Hey Alicia,'} />
          <View style={styles.subContainer}>
            <Banner type={type} onPress={() => rideButtonPress()}/>
            {type === 'Driver' ?
              <>
                {renderIncomingRides()}
              </>
              :
              <>
                {renderServices()}
                {renderTopProfiles()}
                <CustomButton style={{ marginTop: responsiveHeight(2), width: responsiveWidth(89) }} icon={icons.buttonHeart} btnText={'Become A Pet Professional'} />
              </>
            }
          </View>
        </>
      }
    </MainContainer>
  )
}

export default Home

const styles = StyleSheet.create({
  subContainer: {
    paddingTop: responsiveHeight(4),
    alignItems: 'center',
  },
  catsView: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(89),
    borderRadius: 10,
    padding: responsiveHeight(2.5),
  },
  imageStyle: {
    height: responsiveHeight(15),
    width: responsiveWidth(35)
  },
  textStyle: {
    color: colors.primary,
    fontSize: responsiveFontSize(1.8)
  },
  heading: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.4)
  }

})