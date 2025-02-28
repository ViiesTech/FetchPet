import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RescuesPets from '../../screens/main/petRescue/RescuesPets';

const Stack = createNativeStackNavigator();
const PetRescuesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='RescuesPets' component={RescuesPets} />
        </Stack.Navigator>
    );
};

export default PetRescuesStack;
