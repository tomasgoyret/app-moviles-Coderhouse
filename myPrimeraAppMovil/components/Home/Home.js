import { Text, View, Image, Pressable, Alert, FlatList, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styleHome';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native-elements/dist/buttons/Button';
import color from '../../assets/variablesDeEstilo/colors';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import fuente from '../../assets/variablesDeEstilo/fonts';
import { createList } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Listas from '../Listas/listas';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';


export default function Home({ navigation }) {

    const dispatch = useDispatch()
    let list = useSelector(state => state.list)


    var fotoURL = '../../assets/28003-1631171950.jpg'
    var fotoDefault = '../../assets/NWKARXTVKVGL3OW2L4PCGKAUZM.jpg'
    const [modal, setModal] = useState(false)
    const [pickedUri,setPickedUri] = useState()
    console.log(pickedUri,"foto")

    var foto = pickedUri ? pickedUri : fotoDefault
    const handlePermission = async () =>{
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if(granted) return true;
        Alert.alert('Debes otorgar permisos a la camara')
        return false
    }

    const handleTakeImage = async ()=>{
        const cameraOk = await handlePermission()
        if(!cameraOk) return;
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,16],
            quality: 0.8
        })
        setPickedUri(image.uri)
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <Pressable onPress={() => setModal(true)}>
                    {pickedUri ? <Image style={styles.imagen} source={{uri : foto}}></Image> : <Avatar size={64} rounded source={require('../../assets/NWKARXTVKVGL3OW2L4PCGKAUZM.jpg')}></Avatar>}
                </Pressable>
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
                    onPress={async () => {
                        dispatch(createList({ name: "Compras del Super 3" }))
                        navigation.push("Home")
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

                <Listas />



            </View>

            <Modal animationType='slide' visible={modal}>
                <View>
                    <View>
                        <Text>¿Desea cambiar la imagen de perfil?</Text>
                        {/* <Text>{tareaSelected && tareaSelected.tarea}</Text> */}
                    </View>
                    <View>
                        <Button
                            onPress={() => setModal(false)}
                            buttonStyle={{
                                borderRadius: 50,
                                width: 140,
                                height: 50,
                                marginLeft: 20
                            }}
                            icon={{
                                name: "arrow-back-circle-outline",
                                type: 'ionicon',
                                size: 25,
                                color: 'black',
                            }}
                            titleStyle={{ fontWeight: '300', fontFamily: `${fuente.regular}`, color: 'black' }}
                            title='Volver' />
                        <Button
                            onPress={() =>handleTakeImage()}
                            buttonStyle={{
                                borderRadius: 50,
                                width: 140,
                                height: 50,
                                marginLeft: 20
                            }}
                            icon={{
                                name: "camera-outline",
                                type: 'ionicon',
                                size: 25,
                                color: 'black',
                            }}
                            titleStyle={{ fontWeight: '300', fontFamily: `${fuente.regular}`, color: 'black' }}
                            title='Tomar foto' />
                    </View>
                    <View>
                        <Text>
                            Vista previa
                        </Text>
                        {!pickedUri ? <Text>No hay imagen cargada</Text> : <Image style={styles.imagen} source={{uri : pickedUri}}></Image>}
                        <Button
                            onPress={() => {
                                setModal(false)
                                setPickedUri(undefined)
                            }}
                            buttonStyle={{
                                borderRadius: 50,
                                width: 140,
                                height: 50,
                                marginLeft: 20
                            }}
                            icon={{
                                name: "save-outline",
                                type: 'ionicon',
                                size: 25,
                                color: 'black',
                            }}
                            titleStyle={{ fontWeight: '300', fontFamily: `${fuente.regular}`, color: 'black' }}
                            title='Cancelar' />
                    </View>
                </View>
            </Modal>


        </View>
    )
}

