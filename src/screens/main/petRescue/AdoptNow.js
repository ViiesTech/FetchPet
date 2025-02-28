import React from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import { responsiveHeight, responsiveWidth, sizePicker } from '../../../utils';
import CustomInput from '../../../components/CustomInput';
import colors from '../../../assets/colors';
import AdoptFormCheckBox from '../../../components/AdoptFormCheckBox';
import Picker from '../../../components/Picker';
import CustomButton from '../../../components/CustomButton';

const AdoptNow = () => {
  return (
    <MainContainer>
          <Header arrow={true} add={true} headerText={'Adoption Form'} />
          <View style={{marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(3)}}>
                <AdoptFormCheckBox label={'I am willing to be patient with my new pet?'} />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Pet (s) of interest:'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Occupation:'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Work schedule:'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <AdoptFormCheckBox label={'Is your entire family ready for a pet? '} />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Names of all persons living in your household, their relationship to you and their ages:'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Please list two personal references and their relationship to you:'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'b. Apartment'}
                        heading={'Type of home dwelling?'}
                    />

                <AdoptFormCheckBox label={'Is your home adequate for the pet? '} />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Own or ¨ Rent? If Condo, what are the association’s rules about pets?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                    <Picker
                        items={sizePicker}
                        placeholder={'2 Stories'}
                        heading={'Your home has:'}
                    />

                     <Picker
                        items={sizePicker}
                        placeholder={'a. I do not like germs and keep a spotless home.'}
                        heading={'What is your view on cleanliness and order:'}
                    />

                     <Picker
                        items={sizePicker}
                        placeholder={'b. Unfenced'}
                        heading={'If you have yard:'}
                    />   
                
                <AdoptFormCheckBox label={'Are you willing to pet-proof your home? '} />
                <AdoptFormCheckBox label={'Does your home have a pool? '} />


                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'If you have a pool, is it fenced?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'How do you introduce a dog to pool?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <AdoptFormCheckBox label={'Would you allow an inspection of your home by a rescue volunteer? '} />


                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'If not a homeowner, do you have the landlord’s permission to have a dog?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Landlord’s name or phone number:'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <AdoptFormCheckBox label={'Do you presently have a pet? '} />
                <AdoptFormCheckBox label={'Have you previously had a pet ? '} />

                <Picker
                        items={sizePicker}
                        placeholder={'a. gave away'}
                        heading={'If you had a pet in the past, why do you no longer have this pet?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'Lorem ipsum...'}
                        heading={'Current Pet(s) Name & Breed Age Sex Altered? How & Why Obtained? How Long?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'Lorem ipsum...'}
                        heading={'Previous Pet(s) Info'}
                    />

                <AdoptFormCheckBox label={'Have any of your pet ever had babies?'} />

                <Picker
                        items={sizePicker}
                        placeholder={'b. Profit'}
                        heading={'If Yes, you breed for:'}
                    />

                <AdoptFormCheckBox label={'Has any member of your family ever experienced animal-related allergies?'} />
                <AdoptFormCheckBox label={'Have you ever trained a pet in obedience classes?'} />

                <Picker
                        items={sizePicker}
                        placeholder={'b. Just the basic commands like sit, stay, fetch.'}
                        heading={'What type of tricks would you like to teach your pet?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'a. Basic'}
                        heading={'Have you ever trained a pet?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'Lorem ipsum...'}
                        heading={'If you currently have other pets, please complete the following'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Your Family Veterinarian:'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Your Family Groomer:'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Who would be responsible for the care of the new pet?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'b. Responsibility is not for me.'}
                        heading={'How do I feel about responsibility?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'c. Fighting'}
                        heading={'What is your primary reason for adopting this pet?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'b. Spouse'}
                        heading={'If Companion and/or gift, for whom?'}
                    />

                <AdoptFormCheckBox label={'Do they know?'} />

                <Picker
                        items={sizePicker}
                        placeholder={'d. My pet will be my ride or die and will do and...'}
                        heading={'What do I expect from my pet?'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Where would the pet sleep?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'How many hours per day would the pet be left alone?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'a. Indoors'}
                        heading={'Where would the pet be left when he/she is alone?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'b. Patio'}
                        heading={'If outdoors:'}
                    />

                <AdoptFormCheckBox label={'If yard: Do you have a doggie door?'} />
                <AdoptFormCheckBox label={'Do you intend to hire a pet-sitter or take the pet to the daycare center?'} />
                                
                   
                <Picker
                        items={sizePicker}
                        placeholder={'b. Outdoors'}
                        heading={'When you are at home, the pet would be:'}
                    />   

                    <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'Which rooms or areas of the home/yard will be off-limits to the pet?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />      

                <AdoptFormCheckBox label={'Do you allow pets on furniture?'} />

                <Picker
                        items={sizePicker}
                        placeholder={'e. Unfenced yard'}
                        heading={'If the pet will be outside at all, what outside space is available for the pet:'}
                    />   

                <Picker
                        items={sizePicker}
                        placeholder={'a. Latched'}
                        heading={'Are the gates:'}
                    />   

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'How do you plan to handle meeting your pet’s exercise needs?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />   

                <AdoptFormCheckBox label={'Do you feel obedience training makes a pet a better companion?'} />
                <AdoptFormCheckBox label={'If necessary, would you be willing to attend obedience classes at your own expense?'} />
                <AdoptFormCheckBox label={'Do you travel a great deal?'} />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'When you do travel, how do you intend to provide for the pet while you are gone?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />  

                <Picker
                        items={sizePicker}
                        placeholder={'lorem ipsum...'}
                        heading={'What provisions would be made for the pet if you had to move to:'}
                    />

                <AdoptFormCheckBox label={'Are you prepared to deal with the special pet challenges that may occur? '} />

                <Picker
                        items={sizePicker}
                        placeholder={'d. New baby'}
                        heading={'Under what circumstances would you not keep the pet?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'a. I am fit but do not like to exercise'}
                        heading={'How is your fitness?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'b. Take the pet to shelter'}
                        heading={'What would you do if unexpected circumstances occurred and you had no other option but to rehome your pet?'}
                    />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'If the pet becomes destructive at your home, what would you do?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />  

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'If the pet shows needy tendencies and separation anxiety, what would you do?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />  

                <Picker
                        items={sizePicker}
                        placeholder={'lorem ipsum...'}
                        heading={'If the pet becomes aggressive to people and/or dogs, what would you do?'}
                    />

                <AdoptFormCheckBox label={'If the pet becomes ill or injured, are you financially prepared to provide the medical care? '} />

                <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'If yes, is there a maximum amount you would spend for your dog’s medical needs?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />  

                <Picker
                        items={sizePicker}
                        placeholder={'d. I never have to worry about my finances.'}
                        heading={'My financial situation is:'}
                    />

            <AdoptFormCheckBox label={'Will you be prepared to pay for regular grooming visits for your pet?'} />

            <CustomInput
                    placeholder={'Type text'}
                    keyboardType={'text'}
                    inputContainer={{ marginBottom: responsiveHeight(2.5), width: '100%', height: responsiveHeight(6.5) }}
                    heading={'The pet may live 15+ years, what would you do with your pet if you could no longer care for the pet?'}
                    value='Lorem ipsum...'
                    //   onChange={text => onChangeText('email', text)}
                    textStyle={{color: colors.primary, fontWeight: 'bold'}}
                    />  

            <AdoptFormCheckBox label={'Do you know if the pet’s type and breed personality fit your lifestyle?'} />

                <Picker
                        items={sizePicker}
                        placeholder={'d. I am very sociable and love going out all the time.'}
                        heading={'How important is your social life?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'c. I want a pet that I can observe from afar but...'}
                        heading={'What’s most important to you in sharing a life together with your pet ?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'a. Less than an hour'}
                        heading={'How many hours are you willing to dedicate to your pet’s mental and physical wellbeing per day?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'b. I would hate to have to train my pet.'}
                        heading={'Which pet chore would you most dread doing?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'b. I’m not too active but enjoy spend time...'}
                        heading={'How active are you during the week?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'b. I’m curled up on the couch and watching...'}
                        heading={'What’s your weekend vibe?'}
                    />

                <Picker
                        items={sizePicker}
                        placeholder={'d. You’re rushing out the door. You give your...'}
                        heading={'Which is your dream scenario:'}
                    />

            <CustomButton onPress={() => {}} style={{ marginTop: responsiveHeight(2), width: '100%' }}  btnText={'Submit Information'} />

          </View>
    </MainContainer>
  )
}

export default AdoptNow