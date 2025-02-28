import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import colors from '../../../assets/colors'
import MainContainer from '../../../components/MainContainer'
import { responsiveHeight, responsiveWidth } from '../../../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../../components/Header'
import icons from '../../../assets/icons'
import SVGIcons from '../../../components/SVGIcons'
import images from '../../../assets/images'

const categoriesData = [
  {id: 1, icon: icons.menu, name: '', bgColor: 'white', borderWidth: 1, borderColor: colors.line_color, nameColor: colors.primary, mrgnTp: responsiveHeight(0.3)},
  {id: 2, icon: icons.whiteDog, name: 'Dogs', bgColor: colors.primary, borderWidth: 0, borderColor: 'white', nameColor: 'white', mrgnTp: responsiveHeight(0.3)},
  {id: 3, icon: icons.cat, name: 'Cats', bgColor: 'white', borderWidth: 1, borderColor: colors.line_color, nameColor: colors.primary, mrgnTp: responsiveHeight(0.3)},
  {id: 4, icon: icons.bird, name: 'Birds', bgColor: 'white', borderWidth: 1, borderColor: colors.line_color, nameColor: colors.primary, mrgnTp: 0},
  {id: 5, icon: icons.fish, name: 'Fish', bgColor: 'white', borderWidth: 1, borderColor: colors.line_color, nameColor: colors.primary, mrgnTp: responsiveHeight(1)},
]

const rescuesData = [
  {id: 1, title: 'Fluffy', subTitle: 'Available for Adopt & Purchase', resName: 'Rescues Name', textFour: 'Lorem ipsum', petImg: images.dogOne},
  {id: 2, title: 'Lassie', subTitle: 'Available for Adopt & Purchase', resName: 'Rescues Name', textFour: 'Lorem ipsum', petImg: images.dogTwo},
  {id: 3, title: 'Fido', subTitle: 'Available for Adopt & Purchase', resName: 'Rescues Name', textFour: 'Lorem ipsum', petImg: images.dogThree},
  {id: 4, title: 'Milo', subTitle: 'Available for Adopt & Purchase', resName: 'Rescues Name', textFour: 'Lorem ipsum', petImg: images.dogFour},
]

const RescuesPets = () => {
    const [type, setType] = useState('')
  
    useEffect(() => {
      fetchUserRole()
    }, [])
    
    const fetchUserRole = async () => {
      const role = await AsyncStorage.getItem('userType')
      setType(role)
    }


  return (
    <MainContainer style={{ paddingBottom: responsiveHeight(10) }}>
          <Header type={type} add={true} headerText={type === 'Rescue' ? 'Hey Alicia,' : 'Rescues Pets'} />
      <View style={styles.subContainer}>
        <View>
        <Text style={styles.categoriesTxt}>Categories</Text>
        <FlatList
          data={categoriesData}
          horizontal
          style={{marginLeft: responsiveWidth(4.6), paddingRight: responsiveWidth(4.6), marginTop: responsiveHeight(1.7)}}
          contentContainerStyle={{gap: 15}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={{width: responsiveHeight(10), borderRadius: 5, justifyContent: 'center', alignItems: 'center', height: responsiveHeight(10), backgroundColor: item.bgColor, borderWidth: item.borderWidth, borderColor: item.borderColor}}>
                    <SVGIcons image={item.icon} width={60} height={50} />
                    {item.name && <Text style={{color: item.nameColor, fontWeight: 'bold', marginTop: item.mrgnTp}}>{item.name}</Text>}
              </TouchableOpacity>
            );
          }}
          />
          </View>

          <View style={{marginTop: responsiveHeight(2)}}>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
             <Text style={styles.categoriesTxt}>Rescues Pets</Text>
          <View style={{flexDirection: 'row', marginHorizontal: responsiveWidth(4)}}>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text style={{fontSize: 12, color: colors.primary}}>View All</Text>
            <SVGIcons image={icons.rightArrowPrimary} width={20} />
            </TouchableOpacity>
          </View>
            </View>
          </View>

          <View style={{marginTop: responsiveHeight(2), marginHorizontal: responsiveWidth(4)}}>
            <FlatList
              data={rescuesData}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: responsiveHeight(2), gap: 12, }}
              renderItem={({item}) => {
                return (
                  <View style={{position: 'relative', width: responsiveWidth(44), borderRadius: 5, paddingVertical: 10, paddingHorizontal: 10, height: responsiveHeight(29), backgroundColor: '#2F6CAD'}}>
                    <View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={{color: '#fff'}}>{item.title}</Text>
                        <SVGIcons image={icons.heart2} />
                      </View>
                    <Text style={{color: '#f5f5f5', fontSize: 10, marginTop: responsiveHeight(0.5)}}>{item.subTitle}</Text>
                    </View>

                    <View style={{marginTop: responsiveHeight(2)}}>
                    <Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>{item.resName}</Text>
                    <Text style={{color: '#fff', fontSize: 10}}>{item.textFour}</Text>
                    </View>

                    <View style={{alignItems: 'flex-end', marginTop: responsiveHeight(1)}}>
                      <Image source={item.petImg} />
                    </View>

                    <TouchableOpacity style={{backgroundColor: 'white', width: responsiveWidth(20), height: responsiveHeight(3.5), justifyContent: 'center', alignItems: 'center', borderRadius: 8}}>
                      <Text style={{fontSize: 9, color: colors.primary, fontWeight: 'bold'}}>View Details</Text>
                    </TouchableOpacity>
                      <Image source={images.dogFoot} style={{position: 'absolute', top: responsiveHeight(6.5)}}  />
                  </View>
                )
              }}
            />
          </View>
      </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  subContainer:{
    paddingTop: responsiveHeight(2),
  },
  categoriesTxt: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
    marginHorizontal: responsiveWidth(4),
  }
});

export default RescuesPets