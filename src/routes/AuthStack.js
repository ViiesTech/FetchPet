import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import GetStarted from '../screens/auth/GetStarted';
import Signup from '../screens/auth/Signup';
import DriverDetails from '../screens/auth/DriverDetails';

const Stack = createNativeStackNavigator();
const AuthStack = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='GetStarted' component={GetStarted} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='DriverDetails' component={DriverDetails} />
        </Stack.Navigator>
    );
};

export default AuthStack;
