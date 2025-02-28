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
            <Header hideUser={true} arrow={true} headerText={screenType === 'edit' ? 'Edit Pet Info' : 'Add Pet Info'} />
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
                {/* <View style={styles.toggleView}>
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
                </View> */}
                
                <View style={styles.pickerView}>
                    <Picker
                        items={sizePicker}
                        placeholder={'Fluffy'}
                        heading={'Pet Name'}
                    />
                    <Picker
                        items={agePicker}
                        placeholder={'Dog'}
                        heading={'Select Your Pet'}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'Medium 21 - 50 lbs'}
                        heading={'Pet Weight'}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'White'}
                        heading={'Pet Color'}
                    />

                    <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Distinctive Markings'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Birth Date'}
                    editable={true}
                    value='01/01/2019'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Adoption Date'}
                    editable={true}
                    value='01/01/2019'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Enjoy shorts car rides'}
                        heading={'Traveling'}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'Poodle'}
                        heading={'breed'}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'Puppy 0 - 1 years'}
                        heading={'age'}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'Male'}
                        heading={'Sex'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'alteration status'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'groomer'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Vaccination Status'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Pet Insurance Name'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                    <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'numeric'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Pet Insurance Policy Number'}
                    value='123-456-7890'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'No'}
                        heading={'Microchipped'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Vet Info'}
                    value='Lorem ipsum'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'numeric'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Vet Contact'}
                    value='123-456-7890'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Breeder'}
                        heading={'Pet Obtained From'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Optimal Temp Setting'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Yes'}
                        heading={'bite history'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'medical health history'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'vaccination records'}
                    value='Puppy 0 - 1 years'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Lorem Ipsum...'}
                        heading={'dietary restrictions'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Add known allergies'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Favorite Treat'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Preferred food brand'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'medication times'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Yes'}
                        heading={'Crate trained'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Food Serving Amount'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Feeding times'}
                    value='3 times a day'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'Yes'}
                        heading={'Potty trained'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Medication names & dose'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'May be scared/startled by:'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'Yes'}
                        heading={'Commands/gestures known:'}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'Yes'}
                        heading={'Any known aggressions'}
                    />

                    <Picker
                        items={agePicker}
                        placeholder={'No'}
                        heading={'Walks required'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Add exercise times'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Yes'}
                        heading={'Morning walks'}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Athletic'}
                        heading={'Selection of all Pet Temperament that apply to pet:'}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Talk'}
                        heading={'Sound preference'}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Yes'}
                        heading={'Photo updates required'}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Yes'}
                        heading={'Restraint Provided:'}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'No'}
                        heading={'request for written report card'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Other routine notes:'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(3.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'How to calm:'}
                    value='Lorem Ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Must be left outside'}
                        heading={'Toilet behaviors:'}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'Indoor only'}
                        heading={'Exposure to outdoor:'}
                    />

                <Picker
                        items={agePicker}
                        placeholder={'gets underfoot'}
                        heading={'Add behaviors:'}
                    />

                    <CustomInput
                        heading={'Likes or dislike'}
                        placeholder={'Type message'}
                        multiline={true}
                        textStyle={{color: colors.primary, fontWeight: 'bold'}}
                        alignVertical={'top'}
                        inputContainer={{ height: responsiveHeight(10), width:'100%', borderRadius: 5 }}
                    />
                    <CustomButton btnText={screenType === 'edit' ? 'Update Pet Info' : 'Submit'} icon={true} style={{ marginTop: responsiveHeight(4), width: '100%', }} />
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
        paddingTop: responsiveHeight(4),
        marginHorizontal: responsiveWidth(4),
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
