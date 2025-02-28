import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils';
import SVGIcons from '../../../components/SVGIcons';
import icons from '../../../assets/icons';
import colors from '../../../assets/colors';
import images from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const petDetails = [
    {id: 1, title: 'Sex', subtitle: 'Male'},
    {id: 2, title: 'Age', subtitle: '1 Years'},
    {id: 1, title: 'Weight', subtitle: '15 KG'},
]

const DogProfileDetails = ({route}) => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();

  const petImg = route?.params?.petImg;
  const petName = route?.params?.petName;

  return (
    <MainContainer>
            <Image source={petImg} style={{width: '100%', height: responsiveHeight(40)}} />
            <View style={{flex: 1,paddingHorizontal: responsiveWidth(6), paddingVertical: responsiveWidth(6), borderTopRightRadius: 40, borderTopLeftRadius: 40, backgroundColor: '#fff'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3)}}>{petName}</Text>
                <Text style={{fontSize: responsiveFontSize(1.7)}}>Available for Adopt & Purchase</Text>
                    </View>
                    <View style={{flex: 1,alignItems: 'flex-end'}}>
                 <TouchableOpacity style={{backgroundColor: colors.primary, width: 35, height: 35, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                                        <SVGIcons image={icons.heart2} />
                                      </TouchableOpacity>
                    </View>
                </View>

                <View style={{alignItems: 'center'}}>
                    <FlatList
                    data={petDetails}
                    horizontal
                    contentContainerStyle={{gap: 10, marginTop: responsiveHeight(2)}}
                    renderItem={({item}) => {
                        return (
                            <View style={{position: 'relative', borderRadius: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F6CAD', width: responsiveWidth(27.3), height: responsiveHeight(13)}}>
                                <Text style={{fontSize: responsiveFontSize(1.5), color: '#fff'}}>{item.title}</Text>
                                <Text style={{fontSize: responsiveFontSize(2.4), fontWeight: 'bold', color: '#fff'}}>{item.subtitle}</Text>
                                <Image source={images.dogSmallFoot} style={{position: 'absolute', bottom: -10, right: -5}} />
                            </View>
                        )
                    }}
                    />
               
                </View>
                <View style={{marginTop: responsiveHeight(3), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', gap: 13}}>
                <Image source={petImg} style={{width: 50, height: 50, borderRadius: 25}} />
                <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: responsiveFontSize(2), color: colors.primary, fontWeight: 'bold'}}>Sophia</Text>
                <Text style={{fontSize: responsiveFontSize(1.5), color: colors.primary,}}>Fido Owner</Text>
                </View>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                <TouchableOpacity style={{backgroundColor: colors.primary, width: 35, height: 35, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                                        <SVGIcons image={icons.message} width={16} />
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{backgroundColor: colors.primary, width: 35, height: 35, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                                        <SVGIcons image={icons.call} />
                                      </TouchableOpacity>
                </View>
                </View>

              <View style={{marginTop: responsiveHeight(2)}}>
              <Text numberOfLines={expanded ? undefined : 3} style={{color: '#343434'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Text>
                <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                    <Text style={{color: colors.primary}}>
                    {expanded ? "See Less" : "See More"}
                    </Text>
                </TouchableOpacity>
              </View>

                <View>
                <CustomButton onPress={() => {}} style={{ marginTop: responsiveHeight(2), width: responsiveWidth(89) }}  btnText={'Buy Now'} />
                <CustomButton onPress={() => navigation.navigate('AdoptNow')} style={{ marginTop: responsiveHeight(2), width: responsiveWidth(89) }}  btnText={'Adopt Now'} />
                </View>
            </View>
    </MainContainer>
  )
}

export default DogProfileDetails