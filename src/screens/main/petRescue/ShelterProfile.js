import React, { useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils';
import images from '../../../assets/images';
import icons from '../../../assets/icons';
import SVGIcons from '../../../components/SVGIcons';
import colors from '../../../assets/colors';
import { useNavigation } from '@react-navigation/native';

const profileData = [
    {id: 1, profImg: images.userprofile3,
    name: 'Shelter Name', phoneIcon: icons.phone_blue,
    emailIcon: icons.email_blue, locationIcon: icons.location_blue, phoneNo: '(951) 207-0588', email: 'frankmba46@gmail.com', location: '1101 California Ave. Suite #100 Corona, CA., 92881'}
]

const profileSection = [
    {id: 1, title: 'The rescues mission statement', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {id: 2, title: 'About us', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {id: 3, title: 'Animals that we are serving', desc: '', animals: [{id: 1, petName: 'Dogs', petIcon: icons.dog_mini_blue}, {id: 2, petName: 'Cats', petIcon: icons.cat_mini_blue}, {id: 3, petName: 'Birds', petIcon: icons.bird_mini_blue}, {id: 4, petName: 'Fishes', petIcon: icons.fish_mini_blue},]},
    {id: 4, title: 'Our services', desc: 'We offers like adoption, fostering, rehoming, boarding, veterinary care, spay/neutering, end of life care.'},
]

const ShelterProfile = () => {
      const [expanded, setExpanded] = useState({shown: false, index: 0});
      const [shouldShowSeeMore, setShouldShowSeeMore] = useState({});
      const navigation = useNavigation()

  return (
    <MainContainer>
          <Header arrow={true} headerText={'Shelter Profile'} />

          <View style={{marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(2)}}>
            <FlatList
            data={profileData}
            renderItem={({item}) => {
                   return (
                    <View style={{flexDirection: 'row', gap: 15}}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('PetProfessionalsProfile')}
                        >
                        <Image source={item.profImg} style={{width: 82, height: 90, borderRadius: 12}} />
                        </TouchableOpacity>
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
                        {item.desc && 
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
                        }
                        {!item.desc && 
                            <View>
                                    <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: responsiveFontSize(2.5), paddingBottom: responsiveHeight(1),}}>{item.title}</Text>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(0.5)}}>
                                    {item.animals.map((item) => {
                                        return (
                                            <View style={{flexDirection: 'row',  gap: 6, alignItems: 'center'}}>
                                                <SVGIcons image={item.petIcon}  />
                                                <Text style={{fontSize: responsiveFontSize(2), color: '#07092D'}}>{item.petName}</Text>
                                            </View>
                                        )
                                    })}
                                    </View>
                            </View>
                        }
                    </View>
                )
            }}
            />

          </View>
    </MainContainer>
  )
}

export default ShelterProfile