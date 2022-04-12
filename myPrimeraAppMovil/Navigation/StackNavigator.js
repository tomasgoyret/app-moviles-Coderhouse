import React from "react";
import MiDia from '../components/My Day/MiDia';
import MisTareas from '../components/MisTareas/misTareas';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Importante from '../components/Importante/Importante'
import Home from '../components/Home/Home';
import color from "../assets/variablesDeEstilo/colors";
import Planeadeas from "../components/Planeadas/Planeadas";




const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={
                {
                    animation: "slide_from_right",
                    headerTintColor: color.fonts,
                    headerStyle: {
                        backgroundColor: color.background,
                    }
                
                }
            }
            
        >
            <Stack.Screen options={{headerShown:false}} name='Home' component={Home} />
            <Stack.Screen name='Importantes' component={Importante} />
            <Stack.Screen name='Mi Dia' component={MiDia} />
            <Stack.Screen name='Mis tareas' component={MisTareas} />
            <Stack.Screen name='Planeadas' component={Planeadeas} />
        </Stack.Navigator>

    )
}

export default StackNavigator