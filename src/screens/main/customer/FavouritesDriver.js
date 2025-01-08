import { StyleSheet, View } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { availableDrivers, responsiveHeight } from '../../../utils'
import TopRatedProfiles from '../../../components/TopRatedProfiles'

const FavouritesDriver = () => {
    return (
        <MainContainer>
            <Header hideUser={true} arrow={true} headerText={'Favourites Driver'} />
            <View style={styles.subContainer}>
                {availableDrivers.map((item, index) => {
                    return (
                        <TopRatedProfiles favourite={true} onAccept={() => navigation.navigate('Information', { data: item, index: index })} image={item.image} request={true} name={item.name} rating={item.rating} designation={item.designation} />
                    )
                })}
            </View>
        </MainContainer>
    )
}

export default FavouritesDriver

const styles = StyleSheet.create({
    subContainer: {
        alignItems: 'center',
        paddingTop: responsiveHeight(3)
    }
})