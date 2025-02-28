import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import { responsiveHeight, responsiveWidth } from '../../../utils';
import Header from '../../../components/Header';
import colors from '../../../assets/colors';
import images from '../../../assets/images';
import icons from '../../../assets/icons';
import SVGIcons from '../../../components/SVGIcons';

const data = [
    {id: 1, profileImage: images.profile10, username: 'Emma Phillips', newPhotoTxt: 'added a new photo', time: '7h', subTitle: 'Lorem ipsum simply dummy amet, consectetur sadipscing elitr, sed', subImage: images.rescueOne, likesCount: 200, commentsCount: 10, btnTitle: ''},
    {id: 1, profileImage: images.profile12, username: 'Roy Dillon', newPhotoTxt: 'added a new photo', time: '5h', subTitle: 'Lorem ipsum simply dummy amet, consectetur sadipscing elitr, sed', subImage: images.rescueTwo, likesCount: 20, commentsCount: 40, btnTitle: 'Missing'}
]

const PawsitiveCommunity = () => {
  return (
        <MainContainer style={{ paddingBottom: responsiveHeight(5), flexGrow: 1, }}>
            <Header hideUser={true} arrow={true} headerText={'Pawsitive Community'} />

            <View style={styles.subContainer}>
                <View style={styles.cardMain}>
                    <View style={styles.cardSection}>
                        <View style={{flexDirection: 'row', gap: 15}}>
                            <View style={styles.imageStyleContainer}>
                            <Image source={images.profile12} style={styles.imageStyle} />
                            </View>
                        <View style={styles.nameingContainer}>
                            <View>
                            <Text style={styles.username}>Alicia Roth</Text>
                            <Text style={styles.text}>What do you want to talk about?</Text>
                            </View>
                            <View style={styles.cardLastSection}>
                                <View style={{flexDirection:'row', alignItems: 'center'}}>
                                     <SVGIcons image={icons.photoMini} />
                                    <Text style={styles.cardLastSectionTxt}>Photo</Text>
                                </View>
                                <View style={{flexDirection:'row', alignItems: 'center'}}>
                                   <SVGIcons image={icons.locationMini} />
                                    <Text style={styles.cardLastSectionTxt}>Location</Text>
                                </View>
                                <View style={{flexDirection:'row', alignItems: 'center'}}>
                                     <SVGIcons image={icons.calendarMini} />
                                    <Text style={styles.cardLastSectionTxt}>Calendar Events</Text>
                                </View>
                            </View>
                        </View>
                        </View>
                        <TouchableOpacity style={styles.rightArrowContainer}>
                        <SVGIcons image={icons.rightArrow} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                data={data}
                contentContainerStyle={{gap: 20, marginTop: responsiveHeight(3)}}
                renderItem={({item, index}) => {
                    return (
                        <>
                        <View style={styles.postingCard}>
                            <View>
                                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                    <Image source={item.profileImage} style={{height: responsiveHeight(6),width: responsiveHeight(6),borderRadius: 50}} />
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                    <View>
                                    <Text style={{fontWeight: 'bold'}}>{item.username}</Text>
                                    <Text>{item.time}</Text>
                                    </View>
                                    <Text style={{fontSize: 10, marginTop: responsiveHeight(0.5)}}>{item.newPhotoTxt}</Text>
                                    </View>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={{color: colors.primary, fontWeight: 'bold'}}>{item.btnTitle}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{borderWidth: 1.5, borderRadius: 5, borderColor: colors.bubble_color, marginTop: responsiveHeight(2)}}>
                                    <Text style={{marginVertical: responsiveHeight(1.5), marginHorizontal: responsiveWidth(3)}}>{item.subTitle}</Text>

                                    <View>
                                        <Image source={item.subImage} style={{width: '100%', height: responsiveHeight(24), borderRadius: 5}} />
                                    </View>
                                </View>

                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(2)}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                                            <SVGIcons image={icons.like} />
                                        <Text>{item.likesCount}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                                            <SVGIcons image={icons.comment} />
                                        <Text>{item.commentsCount}</Text>
                                    </View>
                                    </View>
                                    <TouchableOpacity>
                                        <SVGIcons image={icons.verticalDots} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                       {index === 0 && <Text style={{fontSize: 25, color: colors.primary, fontWeight: 'bold', marginTop: responsiveHeight(2)}}>Lost & Found</Text>}
                        </>
                    )
                }}
                />
                
            </View>
        </MainContainer>
  );
};

const styles = StyleSheet.create({
    subContainer: {
        paddingTop: responsiveHeight(2),
        marginHorizontal: responsiveWidth(4),
    },
    cardMain: {
        borderWidth: 1,
        borderColor: colors.line_color,
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(2),
        borderRadius: 7
    },
    cardSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageStyleContainer:{
        borderWidth: 1,
        borderColor: colors.line_color,
        height: responsiveHeight(6.4),
        padding: 4,
        borderRadius: 6
    },
    imageStyle: {
        height: responsiveHeight(5),
        width: responsiveHeight(5),
        borderRadius: 6
    },
    nameingContainer: {
        gap: 10
    },
    username: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 17
    },
    text: {
        fontSize: 12,
        marginTop: responsiveHeight(0.5)
    },
    cardLastSection:{
        flexDirection: 'row',
        gap: 8
    },
    cardLastSectionTxt: {
        fontSize: 10,
    },
    rightArrowContainer: {
        backgroundColor: colors.primary,
        width: 37,
        height: 37,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    postingCard: {
        borderWidth: 1,
        borderColor: colors.line_color,
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(2),
        borderRadius: 7,
    },
})

export default PawsitiveCommunity