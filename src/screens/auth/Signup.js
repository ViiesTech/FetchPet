import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import AuthenticationText from '../../components/AuthenticationText';
import { responsiveFontSize, responsiveHeight } from '../../utils';
import colors from '../../assets/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
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

    const onSignup = async () => {
        const role = await AsyncStorage.getItem('userType')
        if (role === 'Customer') {
            navigation.navigate('CustomerStack')
        } else {
            navigation.navigate('DriverDetails')
            // navigation.navigate('DriverStack')
        }
    }

    return (
        <Container
            boldText={'Sign up!'}
            heading={true}
            desc={'Add your details to sign up'}
            style={styles.container}>
            <View style={styles.subContainer}>
                <CustomInput
                    placeholder={'User Name'}
                    inputContainer={{ marginBottom: responsiveHeight(3) }}
                    heading={'Enter your name'}
                    value={form.email}
                    onChange={text => onChangeText('email', text)}
                />
                <CustomInput
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    inputContainer={{ marginBottom: responsiveHeight(3) }}
                    heading={'Enter your email'}
                    value={form.email}
                    onChange={text => onChangeText('email', text)}
                />
                 <CustomInput
                    placeholder={'Phone Number'}
                    keyboardType={'email-address'}
                    inputContainer={{ marginBottom: responsiveHeight(3) }}
                    heading={'Enter your number'}
                    value={form.email}
                    onChange={text => onChangeText('email', text)}
                />
                <CustomInput
                    placeholder={'Password'}
                    secureTextEntry={true}
                    heading={'Enter your password'}
                    inputContainer={{ marginBottom: responsiveHeight(3) }}
                    value={form.password}
                    onChange={text => onChangeText('password', text)}
                />
                <CustomInput
                    placeholder={'Confirm Password'}
                    secureTextEntry={true}
                    heading={'Confirm Password'}
                />
                <CustomButton
                    btnText={'Sign up'}
                    onPress={() => onSignup()}
                    style={{ marginTop: responsiveHeight(5) }}
                />
                <AuthenticationText
                    container={{ paddingTop: responsiveHeight(1.7), alignSelf: 'center' }}
                    text={`Already have an account ? Login`}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </Container>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        paddingBottom: responsiveHeight(10)
    },
    subContainer: {
        paddingTop: responsiveHeight(6)
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
