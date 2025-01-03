import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
import { locations, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils'
import SVGIcons from './SVGIcons'
import icons from '../assets/icons'
import { useNavigation } from '@react-navigation/native'

const MapHeader = ({ headerText, accepted }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.headerWrapper}>
            <View style={styles.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SVGIcons image={icons.arrowback} />
                    </TouchableOpacity>
                    <Text style={styles.headerStyle}>{headerText}</Text>
                </View>
                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 50, borderColor: colors.primary, marginLeft: 15, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                    <SVGIcons image={icons.user} />
                </TouchableOpacity>
            </View>
            {accepted &&
                <FlatList
                    data={locations}
                    contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: responsiveHeight(3) }}
                    renderItem={({ item }) => {
                        return (
                           <View>
                            <Text style={styles.heading}>{item.heading}</Text>
                            <View style={styles.locationCard}>
                                    <SVGIcons image={icons.routing} />
                                    <Text style={styles.locationText}>{item.location}</Text>
                            </View>
                            </View> 
                        )
                    }}
                />
            }
        </View>
    )
}

export default MapHeader

const styles = StyleSheet.create({
    headerWrapper: {
        width: responsiveWidth(100),
        backgroundColor: colors.secondary,
        padding: responsiveHeight(2.5),
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopWidth: 0,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerStyle: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3)
    },
    heading: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2)
    },
    locationCard:{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        borderRadius: 10,
        width: responsiveWidth(42),
        marginTop: responsiveHeight(1),
        padding: responsiveHeight(2),
        backgroundColor: colors.location_color
    },
    locationText:{
        color: colors.txtColor,
        fontSize: responsiveFontSize(2)
    }
})