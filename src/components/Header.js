import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import colors from '../assets/colors';
import SVGIcons from './SVGIcons';
import icons from '../assets/icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ headerText, arrow, heart, edit, type }) => {

    const navigation = useNavigation()

    return (
        <View>
            <View
                style={{
                    width: responsiveWidth(100),
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 25,
                    paddingTop: responsiveHeight(3),
                }}>
                <View style={arrow && { flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    {arrow &&
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <SVGIcons image={icons.arrowback} />
                        </TouchableOpacity>
                    }
                    <Text style={{ color: colors.primary, fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>{headerText}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    {heart &&
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 50, borderColor: colors.primary, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                            <SVGIcons image={icons.heart} />
                        </TouchableOpacity>
                    }
                    {!edit ?
                        <TouchableOpacity onPress={() => navigation.navigate('Profile', { userType: type })} style={{ borderWidth: 1, borderRadius: 50, borderColor: colors.primary, marginLeft: 15, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                            <SVGIcons image={icons.user} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                            <SVGIcons image={icons.edit} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={{ paddingTop: responsiveHeight(2.5), borderBottomWidth: 1, borderBottomColor: colors.line_color }} />
        </View>
    );
};

export default Header;

