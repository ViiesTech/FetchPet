import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AuthStack from './AuthStack';
import CustomerStack from './customer/CustomerStack';
import DriverStack from './driver/DriverStack';
import Profile from '../screens/main/common/Profile';
import About from '../screens/main/common/About';

const Stack = createNativeStackNavigator();
const Routes = () => {
    return (
        <>
            {/* <StatusBar backgroundColor={'white'} barStyle={'dark-content'} /> */}
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={'AuthStack'} component={AuthStack} />
                    <Stack.Screen name={'CustomerStack'} component={CustomerStack} />
                    <Stack.Screen name={'DriverStack'} component={DriverStack} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='About' component={About} />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}

export default Routes
