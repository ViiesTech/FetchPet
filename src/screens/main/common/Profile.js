import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import images from '../../../assets/images';
import { profileSettings, responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../utils';
import colors from '../../../assets/colors';
import SVGIcons from '../../../components/SVGIcons';
import icons from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ route }) => {

  const type = route?.params?.userType;
  const navigation = useNavigation();

  return (
    <MainContainer>
      <Header hideUser={true} edit={true} arrow={true} headerText={'Profile'} />
      <View style={styles.subContainer}>
        <View style={styles.profileWrapper}>
          <Image style={styles.imageStyle} source={images.profile12} />
          <View style={{ marginLeft: responsiveHeight(2) }}>
            <Text style={styles.nameStyle}>Emma Phillips</Text>
            <Text style={styles.designation}>{type === 'Driver' ? 'Driver' : 'Pet Parent'}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: responsiveHeight(3) }}>
          <SVGIcons image={icons.call2} />
          <Text style={styles.text}>(123) 456-7890</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', paddingTop: responsiveHeight(2) }}>
          <SVGIcons image={icons.email} />
          <Text style={styles.text}>emmaphillips863@gmail.com</Text>
        </View>
        {type === 'Driver' &&
          <View style={styles.container}>
            <View style={styles.section}>
              <Text style={styles.amount}>$140.00</Text>
              <Text style={styles.label}>Wallet</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.section}>
              <Text style={styles.amount}>12</Text>
              <Text style={styles.label}>All Rides</Text>
            </View>
          </View>
        }
        <View style={{ paddingTop: type === 'Driver' ? responsiveHeight(4) : responsiveHeight(6) }}>
          {profileSettings.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <TouchableOpacity onPress={() => {
                  if (item.navTo) {
                    navigation.navigate(item.navTo)
                  }
                  else {
                    alert('working in progress')
                  }
                }}
                  style={[
                    styles.contentWrapper,
                    index == 4 && {
                      paddingTop: responsiveHeight(2)
                    }
                  ]}
                >
                  <SVGIcons width={item.id == 4 && responsiveWidth(4)} image={item.icon} />
                  <Text
                    style={[
                      styles.settingsTitle,
                      { color: index === 4 ? colors.red : colors.primary },
                    ]}
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
                {index === 3 && (
                  <View style={styles.separator} />
                )}
              </React.Fragment>
            );
          })}
        </View>
      </View>
    </MainContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  subContainer: {
    padding: responsiveHeight(5),
    paddingTop: responsiveHeight(3),
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: responsiveHeight(15),
    width: responsiveHeight(15),
  },
  nameStyle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.5),
  },
  designation: {
    color: colors.primary,
    fontSize: responsiveFontSize(1.9),
  },
  text: {
    color: colors.primary,
    fontSize: responsiveFontSize(1.8),
  },
  settingsTitle: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.5),
  },
  contentWrapper: {
    marginBottom: responsiveHeight(4),
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.line_color,
    width: responsiveWidth(100),
    marginHorizontal: -responsiveHeight(5),
    paddingHorizontal: responsiveHeight(5)
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: responsiveHeight(3.5),
    marginHorizontal: -responsiveHeight(5),
    paddingHorizontal: responsiveHeight(5),
    borderColor: colors.line_color,
    overflow: 'hidden',
  },
  section: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
  },
  divider: {
    width: 1,
    backgroundColor: colors.line_color,
    height: '100%',
  },
  amount: {
    fontSize: responsiveFontSize(2.2),
    color: colors.primary,
    fontWeight: 'bold',
  },
  label: {
    fontSize: responsiveFontSize(1.7),
    color: colors.txtColor,
  },
});
