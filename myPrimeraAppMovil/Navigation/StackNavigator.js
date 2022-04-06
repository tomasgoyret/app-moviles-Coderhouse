import React from "react";
import MiDia from '../components/My Day/MiDia';
import MisTareas from '../components/MisTareas/misTareas';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from '../components/List';
import Importante from '../components/Importante/Importante'
import Home from '../components/Home/Home';



const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={
                { headerShown: false }
            }
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Importante' component={Importante} />
            <Stack.Screen name='MiDia' component={MiDia} />
            <Stack.Screen name='Mis tareas' component={MisTareas} />
            <Stack.Screen name='Nueva tarea' component={List} />
        </Stack.Navigator>

    )
}

export default StackNavigator