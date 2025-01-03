import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/main/common/Home';
import RidesMap from '../../screens/main/driver/RidesMap';
import Chat from '../../screens/main/driver/Chat';
import RideComplete from '../../screens/main/driver/RideComplete';

const Stack = createNativeStackNavigator();
const DriverStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='RidesMap' component={RidesMap} />
            <Stack.Screen name='Chat' component={Chat} />
            <Stack.Screen name='RideComplete' component={RideComplete} />
        </Stack.Navigator>
    );
};

export default DriverStack;
