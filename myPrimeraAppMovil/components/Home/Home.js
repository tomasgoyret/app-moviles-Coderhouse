import { Text, Button, View, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './styleHome';
import color from '../../assets/variablesDeEstilo/colors';



export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Image style={styles.imagen} source={require('../../assets/28003-1631171950.jpg')}></Image>
            <Text style={styles.user}>Tomás Goyret</Text>
            <Text style={styles.mail}>tomasgoyret@email.com</Text>
                <Pressable onPress={() => { navigation.navigate('MiDia') }}>
                    <Text style={styles.navText}>Mi día</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('Importante') }}>
                    <Text style={styles.navText}>Importante</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('Mis tareas') }}>
                    <Text style={styles.navText}>Tareas</Text>
                </Pressable>

            <Button color='black' style={styles.boton} onPress={() => { navigation.navigate('Nueva Tarea') }}
                title='Nueva Tarea'></Button>

        </View>
    )
}

