import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils';
import icons from '../../../assets/icons';
import SVGIcons from '../../../components/SVGIcons';
import colors from '../../../assets/colors';

const data = [
    {id: 1, title: 'This month'},
    {id: 2, name: 'Shelter Name Here', date: '26 Feb 2025', usd: '$ 50.00', icon: icons.plus_rounded},
    {id: 3, name: 'Lorem Ipsum', date: '19 Feb 2025', usd: '$ 25.00', icon: icons.minus_rounded},
    {id: 4, name: 'Lorem Ipsum', date: '13 Feb 2025', usd: '$35.000', icon: icons.minus_rounded},
    {id: 5, name: 'Lorem Ipsum', date: '10 Feb 2025', usd: '$ 100.00', icon: icons.plus_rounded},
    {id: 6, name: 'Lorem Ipsum', date: '4 Feb 2025', usd: '$ 70.00', icon: icons.minus_rounded},
    {id: 7, title: 'Jan 2025'},
    {id: 8, name: 'Lorem Ipsum', date: '29 Jan 2025', usd: '$ 50.000', icon: icons.minus_rounded},
    {id: 9, name: 'Lorem Ipsum', date: '21 Jan 2025', usd: '$ 50.000', icon: icons.minus_rounded},
    {id: 10, name: 'Lorem Ipsum', date: '14 Jan 2025', usd: '$ 110.000', icon: icons.plus_rounded},
]

const TrackDonations = () => {
  return (
    <MainContainer>
      <Header arrow={true} headerText={'Track Donations'} />

      <View style={{marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(3)}}>
      <View style={styles.container}>
            <SVGIcons image={icons.search} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search Donations"
                placeholderTextColor="#aaa"
            />
         </View>

         <View>
            <FlatList
            data={data}
            renderItem={({item}) => {
                return (
                    <View>
                       {item.title && <View style={{marginTop: responsiveHeight(2)}}>
                        <Text style={{color: colors.gray2}}>{item.title}</Text>
                        </View>}
                       {item.name && <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: responsiveHeight(1.5)}}>
                        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                         <SVGIcons image={item.icon} width={30} height={50} />
                        <View>
                        <Text style={{fontSize: responsiveFontSize(2)}}>{item.name}</Text>
                        <Text style={{color: colors.gray2, fontSize: responsiveFontSize(1.4), marginTop: responsiveHeight(0.3)}}>{item.date}</Text>
                        </View>
                        </View>
                        <Text style={{fontSize: responsiveFontSize(2)}}>{item.usd}</Text>
                        </View>}
                    </View>
                )
            }}
            />
         </View>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#ECEFF3", // Light white background
      borderRadius: 15,
      paddingHorizontal: 10,
      width: '100%',
      paddingVertical: 3,
    },
    icon: {
      marginRight: 4,
    },
    input: {
      height: responsiveHeight(5),
      fontSize: 16,
      color: "#333",
    },
  });

export default TrackDonations;