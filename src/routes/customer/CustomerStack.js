import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookRide from '../../screens/main/customer/BookRide';
import AvailableDrivers from '../../screens/main/customer/AvailableDrivers';
import BookingConfirmed from '../../screens/main/customer/BookingConfirmed';
import Information from '../../screens/main/customer/Information';
import Home from '../../screens/main/common/Home';
import DriverProfile from '../../screens/main/customer/DriverProfile';
import BecomeDriver from '../../screens/main/customer/BecomeDriver';
import ImmediateRide from '../../screens/main/customer/ImmediateRide';
import PawsitiveCommunity from '../../screens/main/customer/PawsitiveCommunity';
import FutureBookings from '../../screens/main/customer/FutureBookings';

const Stack = createNativeStackNavigator();  
const CustomerStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='BookRide' component={BookRide} />
            <Stack.Screen name='ImmediateRide' component={ImmediateRide} />
            <Stack.Screen name='AvailableDrivers' component={AvailableDrivers} />
            <Stack.Screen name='Information' component={Information} />
            <Stack.Screen name='BookingConfirmed' component={BookingConfirmed} />
            <Stack.Screen name='DriverProfile' component={DriverProfile} />
            <Stack.Screen name='BecomeDriver' component={BecomeDriver} />
            <Stack.Screen name='PawsitiveCommunity' component={PawsitiveCommunity} />
            <Stack.Screen name='FutureBookings' component={FutureBookings} />
        </Stack.Navigator>
    );
};

export default CustomerStack;



