import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import CustomerStack from './customer/CustomerStack';
import DriverStack from './driver/DriverStack';
import Profile from '../screens/main/common/Profile';
import About from '../screens/main/common/About';
import FavouritesDriver from '../screens/main/customer/FavouritesDriver';
import EditProfile from '../screens/main/customer/EditProfile';
import AddPetInfo from '../screens/main/customer/AddPet';
import PetRescuesStack from './petRescues/PetRescuesStack';
import TrackDonations from '../screens/main/customer/TrackDonations';
import TravelExpenses from '../screens/main/customer/TravelExpenses';

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
                    <Stack.Screen name={'PetRescuesStack'} component={PetRescuesStack} />
                    <Stack.Screen name='AddPet' component={AddPetInfo} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='EditProfile' component={EditProfile} />
                    <Stack.Screen name='About' component={About} />
                    <Stack.Screen name='FavouritesDriver' component={FavouritesDriver} />
                    <Stack.Screen name='TrackDonations' component={TrackDonations} />
                    <Stack.Screen name='TravelExpenses' component={TravelExpenses} />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}

export default Routes
