import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import SVGIcons from './SVGIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import colors from '../assets/colors';
import icons from '../assets/icons';

const Picker = ({ placeholder, items, setItems, heading }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null)

  const MyArrowDownIcon = ({ style }) => {
    return <SVGIcons image={icons.arrow} />
  }

  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        containerStyle={{ width: responsiveWidth(80) }}
        dropDownContainerStyle={styles.containerStyle}
        style={styles.drop}
        placeholder={placeholder}
        placeholderStyle={styles.dropText}
        dropDownDirection="BOTTOM"
        arrowIconStyle={{ tintColor: colors.primary }}
        ArrowDownIconComponent={({ style }) => <MyArrowDownIcon style={style} />}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  heading: {
    color: colors.primary,
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1),
  },
  drop: {
    borderWidth: 1.5,
    marginBottom: responsiveHeight(3),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.txtColor,
    zIndex: 0,
    paddingVertical: responsiveHeight(1.8),
    borderRadius: 25,
  },
  containerStyle: {
    zIndex: 999,
    borderWidth: 1,
    borderColor: colors.primary
  },
  dropText: {
    color: colors.txtColor,
    marginLeft: responsiveHeight(1),
  },
});
