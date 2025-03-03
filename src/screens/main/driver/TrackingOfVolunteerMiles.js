import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils';
import colors from '../../../assets/colors';

const data = [
    {id: 1, name: 'Shelter or Rescue Name', subTitle: 'Lorem Ipsum', miles: '5 Miles'},
    {id: 2, name: 'Shelter or Rescue Name', subTitle: 'Lorem Ipsum', miles: '5 Miles'},
    {id: 3, name: 'Shelter or Rescue Name', subTitle: 'Lorem Ipsum', miles: '5 Miles'},
    {id: 4, name: 'Shelter or Rescue Name', subTitle: 'Lorem Ipsum', miles: '5 Miles'},
]

const TrackingOfVolunteerMiles = () => {
  return (
    <MainContainer>
      <Header arrow={true} headerText={'Tracking Volunteer'} />

        <View style={{marginHorizontal: responsiveWidth(4), marginTop: responsiveHeight(4), marginBottom: responsiveHeight(0.5)}}>
                <Text style={{fontSize: responsiveFontSize(2.4), color: colors.primary, fontWeight: 'bold'}}>Volunteer Miles</Text>
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
  )
}

export default TrackingOfVolunteerMiles