import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { profileData, responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils'
import images from '../../../assets/images'
import colors from '../../../assets/colors'
import SVGIcons from '../../../components/SVGIcons'
import icons from '../../../assets/icons'

const DriverProfile = ({ route }) => {

    const data = route?.params?.detail || {}

    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={{ flexDirection: 'row', gap: 5, marginTop: 10, alignItems: 'center', marginRight: responsiveWidth(7) }}>
                <SVGIcons image={item.iconName} />
                <Text style={{ color: colors.black, fontSize: responsiveFontSize(1.6) }}>
                    {item.text}
                </Text>
            </View>
        );
    };

    return (
        <MainContainer>
            <Header arrow={true} headerText={'Profile Details'} />
            <View style={styles.subContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, }}>
                        <Image source={images.profile6} style={styles.imageStyle} />
                        <View>
                            <Text style={styles.name}>John Doe</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.designation}>Driver</Text>
                                <Text style={[styles.designation, { marginLeft: responsiveHeight(2) }]}>4.8</Text>
                                <SVGIcons image={icons.paw} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 50, borderColor: colors.primary, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                        <SVGIcons image={icons.heart} />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontSize: responsiveFontSize(2.4),
                        color: colors.primary,
                        fontWeight: 'bold',
                        marginTop: responsiveHeight(3),
                        marginBottom: responsiveHeight(1.5),
                    }}>
                    About Alexender S.{' '}
                </Text>
                <Text style={{ color: colors.gray2, fontSize: responsiveFontSize(1.8) }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.{'    '}
                    <Text
                        style={{
                            color: colors.primary,
                            fontSize: responsiveFontSize(1.7),
                            fontWeight: 'bold',
                            textDecorationLine: 'underline',
                        }}>
                        Read more
                    </Text>
                </Text>
                <Text
                    style={{
                        fontSize: responsiveFontSize(2.4),
                        color: colors.primary,
                        fontWeight: 'bold',
                        marginTop: responsiveHeight(3),
                        marginBottom: responsiveHeight(1.5),
                    }}>
                    Experience in Pet Care{' '}
                </Text>
                <Text style={{ color: colors.gray2, fontSize: responsiveFontSize(1.8) }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </Text>
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
            </View>
        </MainContainer>
    )
}

export default DriverProfile

const styles = StyleSheet.create({
    subContainer: {
        padding: responsiveHeight(3)
    },
    imageStyle: {
        height: responsiveHeight(12),
        width: responsiveHeight(12)
    },
    name: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5)
    },
    designation: {
        color: colors.primary
    }
})