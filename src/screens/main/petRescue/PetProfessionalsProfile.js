import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import SVGIcons from '../../../components/SVGIcons';
import colors from '../../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';

const profileData = [
    {id: 1, profImg: images.userprofile3,
    name: 'Name Here', phoneIcon: icons.phone_blue,
    emailIcon: icons.email_blue, locationIcon: icons.location_blue, phoneNo: '(951) 207-0588', email: 'frankmba46@gmail.com', location: '1101 California Ave. Suite #100 Corona, CA., 92881'}
]

const profileSection = [
    {id: 1, title: 'Our services', desc: 'We offers like low-cost vaccines, low cost spay/neutering services'},
    {id: 2, title: 'list of partnered shelters and rescues', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
]

const PetProfessionalsProfile = () => {
    const [expanded, setExpanded] = useState({shown: false, index: 0});
    const [shouldShowSeeMore, setShouldShowSeeMore] = useState({});
    const navigation = useNavigation()

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
          <Header arrow={true} headerText={'Pet Professionals Profile'} hideUser={true} />

        <View style={{marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(2),}}>
            <FlatList
                        data={profileData}
                        renderItem={({item}) => {
                               return (
                                <View style={{flexDirection: 'row', gap: 15}}>
                                    <Image source={item.profImg} style={{width: 82, height: 90, borderRadius: 12}} />
                                    <View style={{gap: 7}}>
                                        <Text style={{fontSize: responsiveFontSize(2.5), color: colors.primary, fontWeight: 'bold'}}>{item.name}</Text>
                                        <View style={{gap: 5, marginLeft: -5}}>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <SVGIcons image={item.phoneIcon}  />
                                                <Text style={{fontSize: responsiveFontSize(1.3), marginLeft: 4, color: colors.gray2}}>{item.phoneNo}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <SVGIcons image={item.emailIcon}  />
                                                <Text style={{fontSize: responsiveFontSize(1.3), marginLeft: 4, color: colors.gray2}}>{item.email}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <SVGIcons image={item.locationIcon}  />
                                                <Text style={{fontSize: responsiveFontSize(1.3), marginLeft: 4, color: colors.gray2}}>{item.location}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                               )     
                        }}
                        />

             <FlatList
                        data={profileSection}
                        contentContainerStyle={{marginTop: responsiveHeight(1)}}
                        renderItem={({item, index}) => {
                            const isExpanded = expanded[item.id] || false;
                            return (
                                <View style={{marginTop: responsiveHeight(2.5)}}>
                                        <View>
                                                <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: responsiveFontSize(2.5)}}>{item.title}</Text>
                                                <Text numberOfLines={isExpanded ? undefined : 3}
                                                onTextLayout={(e) => {
                                                    const lines = e.nativeEvent.lines.length;
                                                    if (lines > 3 && !shouldShowSeeMore[item.id]) {
                                                      setShouldShowSeeMore((prev) => ({ ...prev, [item.id]: true }));
                                                    }
                                                  }} style={{color: colors.gray2, marginTop: responsiveHeight(0.5)}}>
                                                {item.desc}
                                                                </Text>
                                                              {shouldShowSeeMore[item.id] &&  <TouchableOpacity onPress={() => setExpanded(prev => ({ ...prev, [item.id]: !isExpanded }))}>
                                                                    <Text style={{color: colors.primary}}>
                                                                    {isExpanded ? "Read Less" : "Read More"}
                                                                    </Text>
                                                                </TouchableOpacity>}
                                        </View>
                                </View>
                            )
                        }}
                        />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end',marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(2)}}>
            <CustomButton onPress={() => navigation.navigate('BookAnAppointment')} style={{ marginTop: responsiveHeight(2), width: '100%' }}  btnText={'Book an appointment'} />
        </View>
    </View>
  )
}

export default PetProfessionalsProfile