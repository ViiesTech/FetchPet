import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils';
import colors from '../../../assets/colors';
import images from '../../../assets/images';

const firstSectionData = [
    {id: 1, title: 'Past earnings', numOfUsd: '$240.00', usdSubTitle: 'Past earnings', numOfRides: '12', ridesSubTitle: 'All Rides'},
    {id: 2, title: 'Pending earnings', numOfUsd: '$40.00', usdSubTitle: 'Past earnings', numOfRides: '04', ridesSubTitle: 'All Rides'},
    {id: 3, donationTitle: 'Donation raised', numOfDonation: '$240.00', img: images.chart},
]

const data = [
    {id: 1, name: 'fuel/charging costs', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 2, name: 'vehicle registration costs', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 3, name: 'inspection fees', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 4, name: 'Tolls fees', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 5, name: 'cleaning services costs', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 6, name: 'lease payments', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 7, name: 'Repairing costs', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 9, name: 'Parking costs', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 10, name: 'radio cell phone fees', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 11, name: 'Subscription fees', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
    {id: 12, name: 'water bottled, snacks for customers', subTitle: 'Lorem Ipsum', miles: '$ 50.00'},
]

const DriversTackingSystem = () => {
  return (
    <MainContainer>
      <Header arrow={true} headerText={'Drivers Tacking'} />

              <View >
                <FlatList
                data={firstSectionData}
                renderItem={({item}) => {
                    return (
                        <View >
                          {!item.img && <View>
                            <Text style={{fontSize: responsiveFontSize(2.4), marginHorizontal: responsiveWidth(7), color: colors.primary, marginVertical: responsiveHeight(2.5), fontWeight: 'bold'}}>{item.title}</Text>
                            <View style={{flexDirection: 'row', paddingTop: responsiveHeight(1.5), paddingBottom: responsiveHeight(1.5), borderWidth: 1.7 , borderColor: colors.line_color, justifyContent: 'space-around', alignItems: 'center'}}>
                            <View>
                                <Text style={{textAlign: 'center', fontSize: responsiveFontSize(1.5), fontSize: responsiveFontSize(3), color: colors.primary, fontWeight: 'bold'}}>{item.numOfUsd}</Text>
                                <Text style={{textAlign: 'center', fontSize: responsiveFontSize(1.5)}}>{item.usdSubTitle}</Text>
                            </View>
                           {item.ridesSubTitle && <View style={{width: 1, height: responsiveHeight(6), backgroundColor: colors.line_color}} />}
                            <View>
                                <Text style={{textAlign: 'center', fontSize: responsiveFontSize(3), color: colors.primary, fontWeight: 'bold'}}>{item.numOfRides}</Text>
                                <Text style={{textAlign: 'center', fontSize: responsiveFontSize(1.5)}}>{item.ridesSubTitle}</Text>
                            </View>
                            </View>
                            </View>}

                           {item.img && <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1.7, borderBottomColor: colors.line_color, padding: 20}}>
                                <View style={{gap: 10}}>
                                <Text style={{fontSize: responsiveFontSize(2.4), color: colors.primary,  fontWeight: 'bold'}}>{item.donationTitle}</Text>
                                <Text style={{fontSize: responsiveFontSize(1.5), fontSize: responsiveFontSize(3), color: colors.gray2, fontWeight: 'bold'}}>{item.numOfDonation}</Text>
                                </View>
                                <Image source={images.chart} />
                            </View>}
                        </View>
                    )
                }}
                />
              </View>

                <View style={{marginHorizontal: responsiveWidth(4), marginTop: responsiveHeight(4), marginBottom: responsiveHeight(0.5)}}>
                              <Text style={{fontSize: responsiveFontSize(2.4), color: colors.primary, fontWeight: 'bold'}}>Expenses</Text>
                      </View>
              
                      <FlatList
                      data={data}
                      renderItem={({item}) => {
                          return (
                              <View style={{borderBottomWidth: 1.5, marginVertical: 5, paddingBottom: 10, borderBottomColor: colors.line_color}}>
                                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: responsiveHeight(1), marginHorizontal: responsiveWidth(5)}}>
                                      <View>
                                  <Text>{item.name}</Text>
                                  <Text style={{color: colors.gray2}}>{item.subTitle}</Text>
                                      </View>
                                  <Text>{item.miles}</Text>
                                  </View>
                              </View>
                          )
                      }}
                      />
    </MainContainer>
  );
};

export default DriversTackingSystem;