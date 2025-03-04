import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils'
import SVGIcons from './SVGIcons'
import icons from '../assets/icons'
import CustomButton from './CustomButton'
import StarRating from 'react-native-star-rating-widget'
import { useNavigation } from '@react-navigation/native'

const IncomingRidesCard = ({ onAction, onStartRyde, age,weight, music,oneWay, time,date, btnStyle, name, image, distance, onPress, style, incoming, onAcceptPress, accepted }) => {
    const [rating, setRating] = useState(4.5)
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={onPress} style={[styles.cardStyle, style]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image style={styles.imageStyle} source={image} />
                    <View>
                        <Text style={styles.nameStyle}>{name}</Text>
                        <Text style={styles.textStyle}>{distance}</Text>
                     {!incoming && <View style={{marginTop: responsiveHeight(1)}}>
                            <View>
                        <StarRating
                            rating={rating}
                            color={colors.primary}
                            starSize={8}
                            starStyle={{ marginHorizontal: -responsiveHeight(0.6) }}
                            StarIconComponent={() => {
                                return (
                                    <SVGIcons width={responsiveWidth(6)} image={icons.paw} />
                                )
                            }}
                            onChange={() => null}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Text style={[styles.reviewsText, {fontSize: responsiveFontSize(1.4)}]}>4.9 Reviews</Text>
                        </View>
                        </View>
                    </View>}
                    </View>
                </View>
                {incoming ?
                    <View>
                        <StarRating
                            rating={rating}
                            color={colors.primary}
                            starSize={13}
                            starStyle={{ marginHorizontal: -responsiveHeight(0.6) }}
                            StarIconComponent={() => {
                                return (
                                    <SVGIcons width={responsiveWidth(6)} image={icons.paw} />
                                )
                            }}
                            onChange={() => null}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Text style={styles.reviewsText}>4.9 Reviews</Text>
                            <Text style={styles.tripsText}>(243 trips)</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity
                        style={styles.heartIconStyle}>
                        <SVGIcons image={name === 'Jason' ? icons.persons : icons.heart2} />
                    </TouchableOpacity>
                }
            </View>
            {incoming  && !accepted ?
                <View style={{ paddingTop: responsiveHeight(2) }}>
                    <Text style={styles.detailsText}>Ride Details</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: responsiveHeight(2) }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SVGIcons image={icons.dog} />
                                <Text style={styles.detailText2}>{age}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <SVGIcons image={icons.date} />
                                <Text style={styles.detailText2}>{date}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <SVGIcons image={icons.music} />
                                <Text style={styles.detailText2}>{ music }</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start',width: responsiveWidth(45) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SVGIcons image={icons.paw} />
                                <Text style={styles.detailText2}>{weight}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <SVGIcons image={icons.time} />
                                <Text style={styles.detailText2}>{time}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 3, alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <SVGIcons image={icons.car} />
                                <Text style={styles.detailText2}>{oneWay}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                : !accepted &&
                <View style={{ alignItems: 'flex-end', paddingTop: incoming ? responsiveHeight(2.3) : responsiveHeight(0) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SVGIcons image={icons.paw} />
                        <Text style={styles.weightText}>{weight}</Text>
                    </View>
                </View>
            }

       {incoming && !accepted && <View>
            <View style={{marginTop: responsiveHeight(3), gap: 10}}>
            <Text style={styles.detailsText}>I Do require photo updated of pet</Text>
            <Text>Yes</Text>
            </View>

            <View style={{marginTop: responsiveHeight(3), gap: 10}}>
            <Text style={styles.detailsText}>Restraint additional fees for transportation.</Text>
            <Text style={{fontSize: 12, color: colors.gray2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </View>
            </View>}

            <Text style={[styles.detailsText, incoming && {marginTop: responsiveHeight(3)}]}>Location</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: responsiveHeight(2) }}>
                <View style={{ flexDirection: 'row' }}>
                    <SVGIcons image={icons.routing} style={{ marginTop: responsiveHeight(0.5) }} />
                    <Text style={styles.nameCollege}>St. Petersburg College</Text>
                </View>
                <Text style={{
                    color: colors.primary,
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(1.8)
                }}>to</Text>
                <View style={{ flexDirection: 'row' }}>
                    <SVGIcons image={icons.routing} style={{ marginTop: responsiveHeight(0.5) }} />
                    <Text style={styles.nameCollege}>St. Petersburg College</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: responsiveHeight(2), gap: 10 }}>
                <Text style={styles.typeText}>Payment type:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SVGIcons image={icons.cash}  />
                    <Text style={styles.cashText}>Cash</Text>
                </View>
            </View>
            {accepted &&
            <>
                <CustomButton onPress={onStartRyde} btnText={'START RIDE'} textStyle={{fontWeight: 'bold'}} style={[styles.buttonStyle, { width: responsiveHeight(40) }]} />
                <CustomButton onPress={onStartRyde} btnText={'SHARE RIDE'} textStyle={{fontWeight: 'bold'}} style={[styles.buttonStyle, { width: responsiveHeight(40) }]} />
            </>
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <CustomButton textStyle={{fontWeight: 'bold'}}  onPress={onAcceptPress} btnText={accepted ? 'CALL' : 'ACCEPT'} style={[styles.buttonStyle, btnStyle]} />
                <CustomButton textStyle={{fontWeight: 'bold'}}  onPress={onAction} btnText={accepted ? 'CHAT' : 'DECLINE'} style={[styles.buttonStyle, !accepted && { backgroundColor: colors.red }, btnStyle]} />
            </View>
        </TouchableOpacity>
    )
}

export default IncomingRidesCard

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth: 0.3,
        marginBottom: responsiveHeight(4.5),
        borderRadius: 10,
        padding: responsiveHeight(1.5),
        width: responsiveWidth(90),
        borderColor: colors.black,
        backgroundColor: colors.secondary,
    },
    imageStyle: {
        height: responsiveHeight(6),
        width: responsiveHeight(6)
    },
    heartIconStyle: {
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(5),
        width: responsiveHeight(5),
        backgroundColor: colors.primary,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    nameStyle: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5)
    },
    textStyle: {
        color: colors.txtColor,
        fontSize: responsiveFontSize(1.7)
    },
    detailsText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2)
    },
    nameCollege: {
        color: colors.txtColor,
        width: responsiveWidth(30),
        fontSize: responsiveFontSize(2)
    },
    typeText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2)
    },
    cashText: {
        color: colors.black,
        fontSize: responsiveFontSize(1.9)
    },
    buttonStyle: {
        width: responsiveWidth(40),
        paddingVertical: responsiveHeight(1.8),
        borderRadius: 15,
        marginTop: responsiveHeight(2)
    },
    reviewsText: {
        color: colors.black,
        fontSize: responsiveFontSize(1.6)
    },
    tripsText: {
        color: colors.txtColor,
        fontSize: responsiveFontSize(1.4)
    },
    weightText: {
        color: colors.txtColor,
        fontSize: responsiveFontSize(2)
    },
    detailText2:{
        color: colors.txtColor,
        fontSize: responsiveFontSize(1.9)  
    }
})