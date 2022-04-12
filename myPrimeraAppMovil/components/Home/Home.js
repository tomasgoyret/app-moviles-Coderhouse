import { Text, View, Image, Pressable, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styleHome';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native-elements/dist/buttons/Button';
import color from '../../assets/variablesDeEstilo/colors';
import { getTasks, logOut } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { CheckBox, Input } from 'react-native-elements';


export default function Home({ navigation }) {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const usuario = auth.split("@")

    let tareas = useSelector(state => state.misTareas)
    const [search, setSearch] = useState()
    const [found, setFound] = useState()

    useEffect(() => {
        dispatch(getTasks())
    }, [found])

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.containerUser}>
                    <Image style={styles.imagen} source={require('../../assets/logSolo.png')} />
                    <View style={styles.containerUserData}>
                        <Text style={styles.user}>Hola {usuario[0]}</Text>
                        <Text style={styles.mail}>{auth}</Text>
                    </View>
                    <Button
                        onPress={async () => {
                            dispatch(logOut())
                        }}
                        title="Salir"
                        buttonStyle={{
                            backgroundColor: color.background,
                            borderWidth: 1,
                            borderColor: color.fonts,
                            borderRadius: 10,
                        }}
                        containerStyle={{
                            width: 60,
                            marginHorizontal: 90,
                            marginVertical: 10,
                        }}
                        titleStyle={{ color: color.fonts }}
                    />

                </View>

                <View style={styles.navContainer}>
                    <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Mi Dia') }}>
                        <Icon
                            name="sunny"
                            type='ionicon'
                            color={`${color.darkRed}`}
                        />
                        <Text style={styles.navText}>Mi día </Text>
                    </Pressable>
                    <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Importantes') }}>
                        <Icon
                            name="star-outline"
                            type='ionicon'
                            color={`${color.fonts}`}
                        />
                        <Text style={styles.navText}>Importantes </Text>
                    </Pressable>
                    <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Planeadas') }}>
                        <Icon
                            name="calendar-outline"
                            type='ionicon'
                            color={`${color.lightRed}`}
                        />
                        <Text style={styles.navText}>Planeadas</Text>
                    </Pressable>
                    {/* <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Mis tareas') }}>
                        <Icon
                            name="person-outline"
                            type='ionicon'
                            color={`${color.blue}`}
                        />
                        <Text style={styles.navText}>Asignado a mí </Text>
                    </Pressable> */}
                    {/* <Pressable style={styles.navOption} onPress={() => { navigation.navigate('Mis tareas') }}>
                        <Icon
                            name="flag-outline"
                            type='ionicon'
                            color={`${color.lightRed}`}
                        />
                        <Text style={styles.navText}>Correo marcado </Text>
                    </Pressable> */}
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
                    <Input style={styles.input}
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        placeholder='Buscar tarea por titulo'
                        leftIcon={
                            <Pressable
                                onPress={() => {
                                    let tareaBuscada = tareas.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
                                    if (tareaBuscada.length == 0){
                                        setFound(undefined)
                                    } else {
                                        setFound(tareaBuscada)
                                    }
                                }}>
                                <Icon
                                    name='search-outline'
                                    type='ionicon'
                                    size={30}
                                    color={color.fonts}
                                    borderRadius={1000}
                                />
                            </Pressable>
                        }
                    />
                </View>
                <View style={styles.containerSearch}>
                    {found ? <FlatList
                        data={found}
                        renderItem={({ item }) => {
                                return (
                                    <View style={styles.tasksList}>
                                        <View style={styles.containerCheckbox}>
                                            <CheckBox
                                                center={false}
                                                containerStyle={{
                                                    backgroundColor: color.background,
                                                    color: color.fonts
                                                }}
                                                checkedColor={color.blue}
                                                textStyle={item.status === "pending" ? {
                                                    color: color.fonts,
                                                } : {
                                                    color: color.blue,
                                                    textDecorationLine: "line-through",
                                                }}
                                                title={item.title}
                                                checked={item.status === 'pending' ? false : true}
                                                onPress={() => {
                                                    if (item.status === "pending") {
                                                        dispatch(setTaskDone(item))
                                                    }
                                                    if (item.status === "done") {
                                                        dispatch(setTaskInProgress(item))
                                                    }
                                                }
                                                }
                                            >
                                            </CheckBox>
                                        </View>
                                        <View style={styles.containerIcons}>
                                            <Pressable onPress={() => {
                                                dispatch(deleteTask(item))
                                                Alert.alert("Tarea eliminada: " + item.title)
                                            }}>
                                                <Icon
                                                    name='trash-outline'
                                                    type='ionicon'
                                                    size={25}
                                                    color={color.fonts}
                                                    borderRadius={1000}
                                                />
                                            </Pressable>
                                        </View>
                                        <View style={styles.containerIcons}>
                                            <Pressable onPress={() => {
                                                dispatch(setTaskImportant(item))
                                                Alert.alert("Tarea importante: " + item.title)
                                            }}>
                                                <Icon
                                                    name={item.important ? 'ribbon' : 'ribbon-outline'}
                                                    type='ionicon'
                                                    size={25}
                                                    color={item.important ? color.lightRed : color.fonts}
                                                    borderRadius={1000}
                                                />
                                            </Pressable>
                                        </View>
                                    </View>
                                )
                        
                        }}
                        keyExtractor={item => item.id}
                    >

                    </FlatList> : <Text style={styles.subtitles}>No se encontraron tareas</Text>}
                </View>
            </View>
            </View>
            )
}

