import { Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styleHome';
import { Icon} from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native-elements/dist/buttons/Button';
import color from '../../assets/variablesDeEstilo/colors';
import { StatusBar } from 'react-native-web';


export default function Home({ navigation }) {

    return (

        <View style={styles.container}>
            <View style={styles.containerUser}>

                <Image style={styles.imagen} source={require('../../assets/28003-1631171950.jpg')}></Image>
                <View style={styles.containerUserData}>
                    <Text style={styles.user}>Tomás Goyret</Text>
                    <Text style={styles.mail}>tomasgoyret@email.com</Text>
                </View>

            </View>
            <Pressable style={styles.navOption} onPress={() => { navigation.navigate('MiDia') }}>
                <Icon
                    name="sunny-outline"
                    type='ionicon'
                    color={`${color.lightRed}`}
                />
                <Text style={styles.navText}>Mi día </Text>
            </Pressable>
            <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Importante') }}>
                <Icon
                    name="star-outline"
                    type='ionicon'
                    color={`${color.lightRed}`}
                />
                <Text style={styles.navText}>Importante </Text>
            </Pressable>
            <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Mis tareas') }}>
                <Icon
                    name="checkmark-outline"
                    type='ionicon'
                    color={`${color.lightRed}`}
                />
                <Text style={styles.navText}>Tareas </Text>
            </Pressable>

            <View style={styles.containerBoton}>
            <Button
            onPress={() => { navigation.navigate('Nueva tarea')}}
            buttonStyle={{
                backgroundColor: `${color.darkRed}`,
                borderRadius: 50,
                width: 50,
                height: 50,
                marginRight: 30,
              }}
            title='+'/>
            </View>

        </View>
    )
}

