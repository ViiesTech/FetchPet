import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import colors from '../assets/colors';
import SVGIcons from './SVGIcons';
import icons from '../assets/icons';
import CustomButton from './CustomButton';

const TopRatedProfiles = ({ profilePress, image, name, designation, rating, onAccept, request, containerStyle, onFullCardPress }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={onFullCardPress}
            activeOpacity={10}
            style={[{
                width: responsiveWidth(80),
                borderWidth: 0.2,
                borderRadius: 12,
                padding: responsiveHeight(2),
                marginBottom: responsiveHeight(3),
            }, containerStyle]}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                <Image source={image} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: colors.primary, fontSize: responsiveFontSize(2.2), fontWeight: 'bold' }}>
                        {name}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: colors.primary, fontSize: responsiveFontSize(1.5) }}>
                            {designation}
                        </Text>
                        <Text style={{ color: colors.primary, fontSize: responsiveFontSize(1.5), marginLeft: 10 }}>
                            {rating}
                        </Text>
                        <SVGIcons image={icons.paw} />
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        right: 0,
                        borderRadius: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: colors.primary,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                    }}>
                    <SVGIcons image={icons.heart2} />
                </TouchableOpacity>
            </View>
            <View style={request && { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.8), marginVertical: 12, width: responsiveWidth(50) }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
                {request && <Text style={{ color: colors.primary, fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>$100.00</Text>}
            </View>
            {!request ?
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}>
                    <Text style={{ color: colors.primary, fontSize: responsiveFontSize(2.2), fontWeight: 'bold' }}>$100.00</Text>
                    <TouchableOpacity
                        onPress={profilePress}
                        style={{
                            borderRadius: 4,
                            padding: 5,
                            alignItems: 'center',
                            width: responsiveWidth(27),
                            marginLeft: 15,
                            backgroundColor: colors.primary,
                        }}
                    // onPress={() => navigation.navigate('SeekerProfileDetail')}
                    >
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(1.6) }}>
                            View Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <CustomButton btnText={'Accept'} style={styles.buttonStyle} onPress={onAccept} />
                    <CustomButton btnText={'Decline'} onPress={() => navigation.goBack()} style={[styles.buttonStyle, { backgroundColor: colors.red }]} />
                </View>
            }
        </TouchableOpacity>
    );
};

export default TopRatedProfiles;

const styles = StyleSheet.create({
    buttonStyle: {
        width: responsiveWidth(34),
        paddingVertical: responsiveHeight(1)
    }
});
