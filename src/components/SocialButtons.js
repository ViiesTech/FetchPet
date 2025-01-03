import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import SVGIcons from './SVGIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';

const SocialButtons = ({text, icon, onPress, marginBottom}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, {marginBottom: marginBottom}]}
      onPress={onPress}>
      <SVGIcons
        image={icon}
        width={responsiveWidth(7)}
        style={{marginLeft: responsiveHeight(2)}}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 1.5,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(80),
    borderRadius: 100,
    paddingVertical: responsiveHeight(1.5),
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.black,
    fontSize: responsiveFontSize(1.9),
    textAlign: 'center',
    marginLeft: responsiveWidth(2),
  },
});
