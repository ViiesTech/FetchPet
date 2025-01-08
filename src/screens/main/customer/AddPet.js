import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../../components/Header';
import icons from '../../../assets/icons';
import { agePicker, categories, responsiveFontSize, responsiveHeight, responsiveWidth, sizePicker } from '../../../utils';
import CategoryToggle from '../../../components/CategoryToggle';
import Picker from '../../../components/Picker';
import CustomButton from '../../../components/CustomButton';
import MainContainer from './../../../components/MainContainer';
import colors from '../../../assets/colors';
import SVGIcons from '../../../components/SVGIcons';
import CustomInput from '../../../components/CustomInput';


const AddPetInfo = ({ route }) => {
    const [nickname, setNickname] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(0);

    const screenType = route?.params?.type

    const handleImagePicker = () => {

    }

    return (
        <MainContainer style={styles.container}>
            <Header hideUser={true} arrow={true} headerText={screenType === 'edit' ? 'Edit Pet' : 'Add Pet'} />
            <View style={styles.subContainer}>
                <TouchableOpacity
                    style={styles.addImageView}
                    onPress={() => handleImagePicker()}>
                    <SVGIcons image={icons.upload} width={responsiveHeight(12)} />
                    <Text style={styles.textStyle}>Upload Image</Text>
                    <Text style={styles.subText}>
                        (345x255 or larger recommended, up to 1 MB each)
                    </Text>
                </TouchableOpacity>
                <View style={styles.toggleView}>
                    <Text style={styles.heading}>Your Pet</Text>
                    <View style={styles.petCategoryView}>
                        {categories.map((item, index) => (
                            <CategoryToggle
                                image={item.image}
                                text={item.text}
                                textStyle={{
                                    color:
                                        selectedCategory == index
                                            ? colors.secondary
                                            : colors.primary,
                                }}
                                tintColor={
                                    selectedCategory == index ? colors.secondary : colors.primary
                                }
                                containerStyle={selectedCategory == index && styles.focused}
                                onPress={() => setSelectedCategory(index)}
                            />
                        ))}
                    </View>
                </View>
                <View style={{ paddingTop: responsiveHeight(3) }}>
                    <CustomInput
                        heading={'Your Pet Nickname'}
                        placeholder={'Tommy'}
                        value={nickname}
                        onChange={text => setNickname(text)}
                    />
                </View>
                <View style={styles.pickerView}>
                    <Picker
                        items={sizePicker}
                        placeholder={'Medium 21 - 50 lbs'}
                        heading={'How big is your pet?'}
                    />
                    <Picker
                        items={agePicker}
                        placeholder={'Puppy 0 - 1 years'}
                        heading={'How old is your pet?'}
                    />
                    <CustomInput
                        heading={'Likes or dislike'}
                        placeholder={'Type message'}
                        multiline={true}
                        alignVertical={'top'}
                        inputContainer={{ height: responsiveHeight(10), borderRadius: 5 }}
                    />
                    <CustomButton btnText={screenType === 'edit' ? 'Update' : 'Submit'} icon={true} style={{ marginTop: responsiveHeight(4) }} />
                </View>
            </View>
        </MainContainer>
    );
};

export default AddPetInfo;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: responsiveHeight(10),
        paddingTop: responsiveHeight(0),
    },
    subContainer: {
        alignItems: 'center',
        paddingTop: responsiveHeight(4),
    },
    addImageView: {
        borderWidth: 1.5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 6.51,
        elevation: 7,
        backgroundColor: 'white',
        paddingVertical: responsiveHeight(4.4),
        width: responsiveWidth(80),
        borderStyle: 'dashed',
        borderRadius: 10,
        alignItems: 'center',
        borderColor: colors.primary,
    },
    textStyle: {
        marginTop: responsiveHeight(1.8),
        color: colors.primary,
        fontSize: responsiveFontSize(2),
    },
    subText: {
        width: responsiveWidth(65),
        color: colors.black,
        fontSize: responsiveFontSize(1.8),
        marginTop: responsiveHeight(0.8),
        textAlign: 'center',
    },
    toggleView: {
        marginTop: responsiveHeight(5),
    },
    heading: {
        marginBottom: responsiveHeight(1),
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: responsiveFontSize(1.8),
    },
    petCategoryView: {
        borderWidth: 1.5,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: responsiveWidth(80),
        paddingLeft: responsiveHeight(1),
        paddingVertical: responsiveHeight(0.7),
        borderColor: colors.primary,
    },
    focused: {
        backgroundColor: colors.primary,
        paddingVertical: responsiveHeight(0.7),
        borderRadius: 100,
    },
    pickerView: {
        marginTop: responsiveHeight(3),
    },
});
