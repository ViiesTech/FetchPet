import {
    View,
    Image,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import StarRating from 'react-native-star-rating-widget';
import colors from '../../../assets/colors';
import { cars, data, featuresData, profileData, responsiveFontSize, responsiveHeight, responsiveWidth, vehicleType } from '../../../utils';
import images from '../../../assets/images';
import icons from '../../../assets/icons';
import SVGIcons from '../../../components/SVGIcons';
import Header from '../../../components/Header';
import MainContainer from '../../../components/MainContainer';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../components/CustomInput';


const RideCar = ({route}) => {
    const [rating, setRating] = useState(4.5);

    const navigation = useNavigation()

    const detail = route?.params?.data
    const driver = route?.params?.index

    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={{ flexDirection: 'row', gap: 10, marginTop: 10, alignItems: 'center', marginRight: responsiveWidth(7) }}>
                <SVGIcons image={item.iconName} height={'25'} width={'25'} />
                <Text style={{ color: colors.black, fontSize: responsiveFontSize(1.6) }}>
                    {item.text}
                </Text>
            </View>
        );
    };
    return (
        <MainContainer style={{ paddingBottom: responsiveHeight(10) }}>
            <Header arrow={true} headerText={detail.name} />
            <View
                style={{
                    height: responsiveHeight(45),
                    marginVertical: responsiveHeight(3),
                }}>
                <Swiper
                    activeDotColor={colors.primary}
                    dotColor={colors.secondary}
                    autoplay
                    style={styles.wrapper}
                    showsButtons={false}>
                    {cars.map((area, index) => {
                        return (
                            <View key={index} style={styles.slide1}>
                                <Image
                                    style={{
                                        height: responsiveHeight(45),
                                        width: responsiveWidth(100),
                                    }}
                                    source={area.image}
                                />
                            </View>
                        );
                    })}
                </Swiper>
            </View>
            <View style={{ paddingHorizontal: responsiveWidth(5), paddingVertical: 2 }}>
                <Text
                    style={{
                        fontSize: responsiveFontSize(2.4),
                        color: colors.primary,
                        fontWeight: '500',
                    }}>
                    Honda Civic 2018 1.8 cvt
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: responsiveHeight(2),
                    }}>
                    <View>
                        <StarRating
                            starStyle={{ marginHorizontal: -responsiveHeight(0.6) }}
                            color={colors.primary}
                            rating={rating}
                            StarIconComponent={() => {
                                return (
                                    <SVGIcons image={icons.paw} />
                                )
                            }}
                            onChange={() => null}
                        />
                        <Text
                            style={{
                                color: colors.black,
                                fontSize: responsiveFontSize(2.1),
                                fontWeight: '500',
                            }}>
                           {detail.rating} Reviews{''}
                            <Text
                                style={{ color: colors.primary, fontSize: responsiveFontSize(1.9) }}>
                                (65 trips)
                            </Text>
                        </Text>
                    </View>
                    <Text
                        style={{
                            color: colors.primary,
                            fontSize: responsiveFontSize(3),
                            fontWeight: 'bold',
                        }}>
                        {detail.price}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: responsiveHeight(2),
                        marginTop: responsiveHeight(3),
                    }}>
                    {vehicleType.map((area, index) => {
                        return (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: responsiveHeight(1.2),
                                }}>
                                <SVGIcons image={area.iconName} />

                                <Text
                                    style={{ fontSize: responsiveFontSize(2), color: colors.dark_blue }}>
                                    {area.text}
                                </Text>
                            </View>
                        );
                    })}
                </View>
                <Text
                    style={{
                        fontSize: responsiveFontSize(2.4),
                        color: colors.primary,
                        fontWeight: '500',
                        marginTop: responsiveHeight(3),
                        marginBottom: responsiveHeight(1.5),
                    }}>
                    Hosted By
                </Text>
                <View
                    style={{
                        backgroundColor: 'white',
                        shadowColor: colors.black,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: responsiveHeight(1.5),
                        borderRadius: responsiveHeight(1),
                        alignItems: 'center',
                    }}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Image
                            style={{ height: responsiveHeight(15), width: responsiveHeight(15) }}
                            source={driver == 0 ? images.profile6 : driver == 1 ? images.profile10 : images.profile11}
                        />
                        <View>
                            <Text
                                style={{
                                    fontSize: responsiveFontSize(2.3),
                                    fontWeight: 'bold',
                                    color: colors.primary,
                                    marginBottom: 10,
                                }}>
                                {detail.name}
                            </Text>
                            <StarRating
                                starSize={17}
                                starStyle={{ marginHorizontal: -responsiveHeight(0.6) }}
                                color={colors.primary}
                                rating={rating}
                                StarIconComponent={() => {
                                    return (
                                        <SVGIcons image={icons.paw} />
                                    )
                                }}
                                onChange={setRating}
                            />
                            <Text
                                style={{
                                    color: colors.black,
                                    fontSize: responsiveFontSize(1.8),
                                    fontWeight: '500',
                                }}>
                                {detail.rating} Reviews{' '}
                                <Text
                                    style={{ color: colors.primary, fontSize: responsiveFontSize(1.5) }}>
                                    (65 trips)
                                </Text>
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: responsiveHeight(1),
                                    gap: 5,
                                }}>
                                <View style={{ marginTop: 2 }}>
                                    <SVGIcons image={icons.typing} height={'22'} width={'22'} />
                                </View>
                                <Text
                                    style={{
                                        width: responsiveWidth(30),
                                        color: colors.black,
                                        maxWidth: responsiveWidth(30),
                                    }}>
                                    Typically responds in 30 mins.
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text
                            style={{
                                color: colors.primary,
                                fontSize: responsiveFontSize(1.75),
                                textDecorationLine: 'underline',
                            }}>
                            Contacts
                        </Text>
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: responsiveFontSize(2.4),
                        color: colors.primary,
                        fontWeight: '500',
                        marginTop: responsiveHeight(3),
                        marginBottom: responsiveHeight(1.5),
                    }}>
                    Features{' '}
                </Text>
                <FlatList
                    contentContainerStyle={{ justifyContent: 'space-between', gap: 15, }}
                    numColumns={2}
                    data={profileData}
                    renderItem={renderItem}
                />
                <View style={{ paddingTop: responsiveHeight(2) }}>
                    {/* <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            color: colors.primary,
                            fontWeight: '500',
                            marginBottom: responsiveHeight(1.5),
                        }}>
                        Date
                    </Text> */}
                    <CustomInput placeholder={'11/11/2024'} heading={'Date'} inputContainer={{ borderColor: colors.primary, width: responsiveWidth(90) }} />
                    {/* <View style={styles.detailView}>
                        <Text style={styles.text}>11/11/2024</Text>
                    </View> */}
                </View>
                <View style={{ paddingTop: responsiveHeight(2.5) }}>
                   
                    <CustomInput placeholder={'10:00 Am'} heading={'Time'} inputContainer={{ borderColor: colors.primary, width: responsiveWidth(90) }} />
                </View>
                <View style={{ paddingTop: responsiveHeight(2.5) }}>
                <CustomInput icon={true}  placeholder={'Los Angeles'} heading={'Pickup Location'} inputContainer={{borderColor: colors.primary, width: responsiveWidth(90)}} />
                </View>
                <CustomButton onPress={() => navigation.navigate('BookingConfirmed')} icon={icons.buttonHeart} btnText={'Confirm Booking'} style={{ marginTop: responsiveHeight(4), width: responsiveWidth(90) }} />
                <CustomButton onPress={() => navigation.navigate('FutureBookings')} btnText={'Future Booking'} style={{ marginTop: responsiveHeight(4), width: responsiveWidth(90) }} />
            </View>
        </MainContainer>
    );
};

export default RideCar;
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    detailView: {
        borderColor: colors.primary,
        borderRadius: 100,
        borderWidth: 1.5,
        width: responsiveWidth(90),
        padding: responsiveHeight(2),
    },
    text: {
        color: colors.primary,
        fontSize: responsiveFontSize(1.8)
    }
});