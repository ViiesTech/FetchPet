import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/MainContainer'
import Header from '../../../components/Header'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils'
import colors from '../../../assets/colors'
import images from '../../../assets/images'

const About = () => {
    return (
        <MainContainer>
            <Header arrow={true} headerText={'About Fech'} />
            <View style={styles.subContainer}>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor, sem eu molestie
                    euismod, augue ex dapibus massa, id lobortis enim arcu sed quam. Duis convallis venenatis turpis, at tempor
                    est efficitur sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Duis in nunc leo. Sed varius lacus eget posuere varius. Aliquam tristique condimentum ullamcorper.
                    Morbi iaculis, ipsum quis bibendum posuere, dui nulla suscipit tortor, a mattis diam nunc non dolor.
                    Nullam cursus eget nulla vitae malesuada. Mauris arcu elit,
                    tincidunt sit amet fermentum eget, egestas nec lacus. </Text>
                <Image source={images.about} style={styles.imageStyle} />
                <Text style={styles.desc}>Nunc feugiat, eros lacinia faucibus facilisis, dui quam vulputate enim,
                    ut feugiat lacus turpis et mauris. Fusce sed arcu a diam posuere molestie nec nec mauris.
                    Proin lacus sem, congue et ligula mattis, mollis pretium diam. Etiam feugiat tortor vitae nunc
                    pharetra efficitur,Duis at aliquet dui. Cras vitae convallis nisi. Sed pretium nibh a efficitur mattis. Sed dignissim aliquam dapibus. Sed laoreet congue cursus. Quisque quis lectus dui.</Text>
            </View>
        </MainContainer>
    )
}

export default About

const styles = StyleSheet.create({
    subContainer: {
        alignItems: 'center',
    },
    desc: {
        textAlign: 'center',
        color: colors.txtColor,
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(1.6),
        width: responsiveWidth(92)
    },
    imageStyle: {
        height: responsiveHeight(35),
        marginTop: responsiveHeight(3),
        width: responsiveWidth(58)
    },
})