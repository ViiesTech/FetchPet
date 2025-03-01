import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { data, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import images from '../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/colors';

const Banner = ({ onPress, type }) => {

  const filteredData = type === 'driver' ? data.slice(1) : data;

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={2}
        style={styles.wrapper}
        showsPagination={false}>
        {filteredData.map((area, index) => (
          <View key={area.id} style={styles.slideContainer}>
            <ImageBackground
              source={area.bgImage}
              style={styles.slideImage}
              imageStyle={styles.imageStyle}>
              <LinearGradient
                colors={[colors.primary, 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={StyleSheet.absoluteFill}
              />
              {index === 0 && type !== 'Driver' ? (
                // <View style={{ padding: responsiveHeight(2.5) }}>
                //   <Text style={styles.cardText}>{'Safe Travels, Happy Pets.'}
                //   </Text>
                //   <TouchableOpacity onPress={onPress} style={styles.rideButton}>
                //     <Text style={styles.textStyle}>Book A Ride</Text>
                //   </TouchableOpacity>
                // </View>
                <View style={{ padding: responsiveHeight(2.5), flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                  <View style={{borderWidth: 2, borderColor: 'white', borderRadius: 100, padding: 4}}>
                  <Image source={images.dogOne}  style={{width: 90, height: 90, borderRadius: 100,}}/>
                  </View>
                    <Text style={styles.textStyle}>Fluffy</Text>
                </View>
              ) : (
                <>
                  <View style={styles.logoContainer}>
                    <Image
                      resizeMode="contain"
                      style={styles.logo}
                      source={images.logo}
                    />
                  </View>
                  <Text style={styles.text}>{area.description}</Text>
                </>

              )}
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  wrapper: {},
  slideContainer: {
    flex: 1,
  },
  slideImage: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 5,
  },
  logoContainer: {
    // backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 5,
    width: responsiveWidth(20),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',
    left: responsiveHeight(2),
    position: 'absolute',
    top: responsiveHeight(1.5),
  },
  logo: {
    height: responsiveHeight(8),
    width: responsiveWidth(20),
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 8,
    borderRadius: 5,
    position: 'absolute',
    bottom: responsiveHeight(2),
    alignSelf: 'center',
    textAlign: 'center',
  },
  rideButton: {
    backgroundColor: colors.secondary,
    width: responsiveWidth(30),
    alignItems: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(2),
    padding: responsiveHeight(1)
  },
  textStyle: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontWeight: 'bold'
  },
  cardText: {
    color: colors.secondary,
    fontWeight: 'bold',
    marginLeft: responsiveHeight(0.5),
    width: responsiveWidth(30),
    fontSize: responsiveFontSize(2.3)
  },
});
