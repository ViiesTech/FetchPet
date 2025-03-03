import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils'
import images from '../../../assets/images'
import colors from '../../../assets/colors'
import icons from '../../../assets/icons'
import SVGIcons from '../../../components/SVGIcons'

const travelData = [
    {id: 1, profImg: images.profile10, name: 'Alexander', type: 'Driver', rating: '4.8', usd: '$35.00', location: 'location', leftTxt: 'St. Petersburg College', rightTxt: 'St. Petersburg College'},
    {id: 2, profImg: images.profile10, name: 'Alexander', type: 'Driver', rating: '4.8', usd: '$35.00', location: 'location', leftTxt: 'St. Petersburg College', rightTxt: 'St. Petersburg College'},
    {id: 3, profImg: images.profile10, name: 'Alexander', type: 'Driver', rating: '4.8', usd: '$35.00', location: 'location', leftTxt: 'St. Petersburg College', rightTxt: 'St. Petersburg College'},
]

const TravelExpenses = () => {
  return (
    <MainContainer>
      <Header arrow={true} headerText={'Travel Expenses'} />

      <View style={{marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(3)}}>
      <Text style={{color: colors.gray, fontSize: responsiveFontSize(2.3),}}>Past Rides</Text>

      <View style={{marginTop: responsiveHeight(1)}}>
        <FlatList
        data={travelData}
        renderItem={({item}) => {
            return (
                <View style={{borderWidth: 1, borderColor: colors.line_color, marginVertical: responsiveHeight(1), borderRadius: 5, paddingVertical: responsiveHeight(2.5), paddingHorizontal: responsiveWidth(4)}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', gap: 12}}>
                        <Image source={item.profImg} style={{width: 50, height: 50, borderRadius: 100}} />
                        <View>
                        <Text style={{color: colors.primary, fontSize: responsiveFontSize(2.5), fontWeight: 'bold'}}>{item.name}</Text>
                        <View style={{flexDirection: 'row', gap: 20, marginTop: 2}}>
                        <Text style={{color: colors.primary, fontSize: responsiveFontSize(1.9)}}>{item.type}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
                        <Text style={{color: colors.primary, fontSize: responsiveFontSize(1.9)}}>{item.rating}</Text>
                        <SVGIcons image={icons.cat_foot} />
                        </View>
                        </View>
                        </View>
                        </View>
                        <Text style={{color: colors.primary, fontSize: responsiveFontSize(3), fontWeight: 'bold'}}>{item.usd}</Text>
                    </View>

                    <View style={{marginTop: responsiveHeight(2)}}>
                    <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: responsiveFontSize(2.2)}}>{item.location}</Text>
                    </View>

                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: responsiveHeight(2)}}>
                        <View style={{flexDirection: 'row', width: responsiveWidth(30), gap: 8}}>
                        <SVGIcons image={icons.line_location} />
                        <Text style={{fontSize: responsiveFontSize(1.7), color: colors.black}}>{item.leftTxt}</Text>
                        </View>
                        <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>to</Text>
                        <View style={{flexDirection: 'row', width: responsiveWidth(30), gap: 8}}>
                        <SVGIcons image={icons.line_location} />
                        <Text style={{fontSize: responsiveFontSize(1.7), color: colors.black}}>{item.rightTxt}</Text>
                        </View>
                    </View>
                </View>
            )
        }}
        />
      </View>
    </View>
    </MainContainer>
  )
}

export default TravelExpenses