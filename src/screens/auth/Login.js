import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import AuthenticationText from '../../components/AuthenticationText';
import { responsiveFontSize, responsiveHeight, socialIcons } from '../../utils';
import colors from '../../assets/colors';
import SocialButtons from '../../components/SocialButtons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });


  const navigation = useNavigation();

  const onChangeText = (value, text) => {
    setForm({
      ...form,
      [value]: text,
    });
  };

  const onLoginPress = async () => {
    const role = await AsyncStorage.getItem('userType')
   if(role === 'Customer') { 
    navigation.navigate('CustomerStack')
  } else if(role === 'Driver') {
    navigation.navigate('DriverStack')
  }else if(role === 'Rescue'){
    navigation.navigate('PetRescuesStack')
  }
} 

  return (
    <Container
      boldText={'Welcome Back!'}
      heading={true}
      desc={'Where pets ride with love!'}
      style={styles.container}>
      <View style={styles.subContainer}>
        <CustomInput
          placeholder={'Email'}
          keyboardType={'email-address'}
          inputContainer={{ marginBottom: responsiveHeight(4) }}
          heading={'Enter your email'}
          value={form.email}
          onChange={text => onChangeText('email', text)}
        />
        <CustomInput
          placeholder={'Password'}
          secureTextEntry={true}
          heading={'Enter your password'}
          value={form.password}
          onChange={text => onChangeText('password', text)}
        />
        {/* <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.forgetText}>Forgot Password</Text>
        </TouchableOpacity> */}
        <Text style={styles.orHeading}>Or</Text>
        <View style={styles.buttonWrapper}>
          {socialIcons.map(item => (
            <SocialButtons
              text={item.text}
              icon={item.icon}
              key={item.id}
              marginBottom={responsiveHeight(2.5)}
            />
          ))}
        </View>
        <CustomButton
          btnText={'LOGIN'}
          onPress={() => onLoginPress()}
          style={{ marginTop: responsiveHeight(5) }}
        />
        <AuthenticationText
          container={{ paddingTop: responsiveHeight(1.7), alignSelf: 'center' }}
          text={`Don't have an account ? Sign Up`}
        onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
  subContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  orHeading: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: colors.black,
    marginTop: responsiveHeight(3),
  },
  buttonWrapper: {
    paddingTop: responsiveHeight(3),
  },
  forgetText: {
    textAlign: 'right',
    color: colors.primary,
    fontSize: responsiveFontSize(1.8),
    marginRight: responsiveHeight(1),
    marginTop: responsiveHeight(1)
  }
});
