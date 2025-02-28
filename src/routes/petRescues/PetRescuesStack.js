import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RescuesPets from '../../screens/main/petRescue/RescuesPets';
import DogProfileDetails from '../../screens/main/petRescue/DogProfileDetails';
import AdoptNow from '../../screens/main/petRescue/AdoptNow';
import ShelterProfile from '../../screens/main/petRescue/ShelterProfile';
import PetProfessionalsProfile from '../../screens/main/petRescue/PetProfessionalsProfile';
import BookAnAppointment from '../../screens/main/petRescue/BookAnAppointment';

const Stack = createNativeStackNavigator();
const PetRescuesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='RescuesPets' component={RescuesPets} />
            <Stack.Screen name='DogProfileDetails' component={DogProfileDetails} />
            <Stack.Screen name='AdoptNow' component={AdoptNow} />
            <Stack.Screen name='ShelterProfile' component={ShelterProfile} />
            <Stack.Screen name='PetProfessionalsProfile' component={PetProfessionalsProfile} />
            <Stack.Screen name='BookAnAppointment' component={BookAnAppointment} />
        </Stack.Navigator>
    );
};

export default PetRescuesStack;
