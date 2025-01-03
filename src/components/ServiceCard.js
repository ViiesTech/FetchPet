import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils'

const ServiceCard = ({ image, text,onPress }) => {


  return (
    <TouchableOpacity onPress={onPress} style={styles.cardStyle}>
      <Image source={image} style={styles.imageStyle} resizeMode='contain' />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ServiceCard

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    width: responsiveWidth(43),
    paddingVertical: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle:{
    height: responsiveHeight(10),
    width: responsiveWidth(30)
  },
  text:{
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2)
  }
})