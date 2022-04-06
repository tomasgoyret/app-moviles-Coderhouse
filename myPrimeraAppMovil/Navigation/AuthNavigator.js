import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentication from '../components/Auth/Auth';
import SignUp from '../components/SignUp/SignUp';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
    )
}

export default AuthNavigator