import { Text, View, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styleHome';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native-elements/dist/buttons/Button';
import color from '../../assets/variablesDeEstilo/colors';
import { StatusBar } from 'react-native-web';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import fuente from '../../assets/variablesDeEstilo/fonts';
import { createList } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Home({ navigation }) {

    const dispatch = useDispatch()
    const list = useSelector(state => state.list)

    useEffect(() => {
        dispatch(createList({ name: "Tareas de la casa" }))
    }, [])


    var fotoURL = '../../assets/28003-1631171950.jpg'
    var fotoDefault = '../../assets/NWKARXTVKVGL3OW2L4PCGKAUZM.jpg'

    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <Avatar size={64} rounded source={require('../../assets/28003-1631171950.jpg')}></Avatar>
                <View style={styles.containerUserData}>
                    <Text style={styles.user}>Tomás Goyret</Text>
                    <Text style={styles.mail}>tomasgoyret@email.com</Text>
                </View>

            </View>

            <View style={styles.navContainer}>
                <Pressable style={styles.navOption} onPress={() => { navigation.navigate('MiDia') }}>
                    <Icon
                        name="sunny"
                        type='ionicon'
                        color={`${color.darkRed}`}
                    />
                    <Text style={styles.navText}>Mi día </Text>
                </Pressable>
                <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Importante') }}>
                    <Icon
                        name="star-outline"
                        type='ionicon'
                        color={`${color.fonts}`}
                    />
                    <Text style={styles.navText}>Importante </Text>
                </Pressable>
                <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Mis tareas') }}>
                    <Icon
                        name="calendar-outline"
                        type='ionicon'
                        color={`${color.lightRed}`}
                    />
                    <Text style={styles.navText}>Planeadas</Text>
                </Pressable>
                <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Mis tareas') }}>
                    <Icon
                        name="person-outline"
                        type='ionicon'
                        color={`${color.blue}`}
                    />
                    <Text style={styles.navText}>Asignado a mí </Text>
                </Pressable>
                <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Mis tareas') }}>
                    <Icon
                        name="flag-outline"
                        type='ionicon'
                        color={`${color.lightRed}`}
                    />
                    <Text style={styles.navText}>Correo marcado </Text>
                </Pressable>
                <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Mis tareas') }}>
                    <Icon
                        name="checkbox-outline"
                        type='ionicon'
                        color={`${color.blue}`}
                    />
                    <Text style={styles.navText}>Tareas </Text>
                </Pressable>
            </View>

            <View style={styles.containerBoton}>
                <Button
                    onPress={() => {
                        dispatch(createList({ name: "Compras del Super" }))
                    }}
                    buttonStyle={{
                        borderRadius: 50,
                        width: 140,
                        height: 50,
                        marginLeft: 20
                    }}
                    icon={{
                        name: 'add-circle',
                        type: 'ionicon',
                        size: 25,
                        color: 'white',
                    }}
                    titleStyle={{ fontWeight: '300', fontFamily: `${fuente.regular}` }}
                    title=' Nueva Lista' />



            </View>


        </View>
    )
}

