import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth, rideOptions } from '../utils'
import images from '../assets/images'
import SVGIcons from './SVGIcons'
import StarRating from 'react-native-star-rating-widget'
import icons from '../assets/icons'

const RideStartedCard = ({ style,name,image }) => {
    const [rating, setRating] = useState(4.5)
    return (
        <View style={[styles.cardStyle, style]}>
            <View style={{ flexDirection: 'row', gap: 15 }}>
                <Image source={image} style={styles.imageStyle} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.pickup}>Pickup  time</Text>
                    <Text style={styles.time}>9:43 am</Text>

                </View>
            </View>
            <View style={{ marginLeft: responsiveHeight(2) }}>
                <StarRating StarIconComponent={() => {
                    return (
                        <SVGIcons image={icons.paw} />
                    )
                }} starSize={12} color={colors.primary} starStyle={{ marginHorizontal: -responsiveHeight(0.6) }} rating={rating} onChange={() => null} />
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Text style={styles.review}>4.9 Reviews</Text>
                    <Text style={styles.tripText}>(243 trips)</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, paddingTop: responsiveHeight(2), marginLeft: responsiveHeight(2.5) }}>
                    {rideOptions.map((item) => {
                        return (
                            <TouchableOpacity style={styles.iconView}>
                                <SVGIcons image={item.icon} />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

export default RideStartedCard

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: colors.secondary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(85),
        borderRadius: 10,
        padding: responsiveHeight(1.5)
    },
    imageStyle: {
        height: responsiveHeight(9),
        width: responsiveHeight(9)
    },
    name: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2)
    },
    pickup: {
        color: colors.txtColor,
        marginTop: responsiveHeight(0.3),
        marginBottom: responsiveHeight(0.4),
        fontSize: responsiveHeight(1.8)
    },
    time: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.4)
    },
    iconView: {
        backgroundColor: colors.primary,
        height: responsiveHeight(5.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        width: responsiveHeight(5.5)
    },
    review: {
        color: colors.black,
        fontSize: responsiveFontSize(1.6)
    },
    tripText: {
        color: colors.txtColor,
        fontSize: responsiveFontSize(1.4)
    }
})