import { View, Text, FlatList, Pressable, Alert, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { Input, Icon, CheckBox, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks, setTaskDone, setTaskInProgress, setTaskImportant, deleteTask, setTaskToday, setTaskAnotherDay } from '../../store/actions';
import styles from './stylesMisTareas';
import { DateTimePicker } from '@react-native-community/datetimepicker';
//import SetDate from './setDate';

export default function MisTareas({ }) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    let tareas = useSelector(state => state.misTareas)
    let hoy = new Date()
    let dia = hoy.getUTCDate()
    let mes = hoy.getUTCMonth() + 1
    let año = hoy.getUTCFullYear()

    //let today = hoy.split(" ")
    const saveTask = () => {
        dispatch(newTask(task))
        console.log("Nueva tarea agregada: " + task.title)
    }


    const [task, setTask] = useState({
        user: auth,
        title: "",
        important: false,
        date: "",
        status: "pending",
    })

    const [modal, setModal] = useState(false)
    const [newDate, setNewDate] = useState({
        year: "",
        month: "",
        day: "",
    })
    const [input, setInput] = useState(false)
    const [taskSelected, setTaskSelected] = useState("")

    const handleNewTask = (titleTask) => {
        setTask({
            ...task,
            title: titleTask
        })
    }

    const handleModal = () => {
        return setModal(!modal)
    }

    useEffect(() => {
        dispatch(getTasks())
    }, [tareas])


    return (
        <View style={styles.container}>

            {/* Input para la creacion de nuevas tareas */}
            <Input style={styles.input}
                value={task.title}
                onChangeText={(text) => handleNewTask(text)}
                placeholder='Ingrese la tarea que desea agregar'
                leftIcon={
                    <Pressable onPress={() => {
                        saveTask()
                        Alert.alert("Tarea agregada: " + task.title)
                        setTask({
                            user: auth,
                            title: "",
                            important: false,
                            date: "",
                            status: "pending",
                        })
                    }}>
                        <Icon
                            name='add-outline'
                            type='ionicon'
                            size={30}
                            color={color.fonts}
                            borderRadius={1000}
                            backgroundColor={color.darkRed}
                        />
                    </Pressable>
                }
            />
            {/* Subtitulo de tareas pendientes */}
            <View>
                <Text style={styles.subtitles}>Pendientes</Text>
            </View>
            {/* Lista de tareas pendientes */}
            {tareas.length > 0 ? <FlatList
                data={tareas}
                renderItem={({ item }) => {
                    if (item.status === 'pending') {
                        return (
                            <View style={styles.tasksList}>
                                <View style={styles.containerCheckbox}>
                                    {/* Checkbox de realizacion de tareas */}
                                    <CheckBox
                                        center={false}
                                        containerStyle={{
                                            backgroundColor: color.background,
                                            color: color.fonts
                                        }}
                                        checkedColor={color.blue}
                                        textStyle={{
                                            color: color.fonts,
                                        }}
                                        title={item.title}
                                        checked={item.status === 'pending' ? false : true}
                                        onPress={() => {
                                            dispatch(setTaskDone(item))
                                        }
                                        }
                                    >
                                    </CheckBox>
                                </View>

                                {/* Boton de eliminar tarea */}
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

                                {/* Boton de tarea importante */}
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

                                {/* Boton de fecha de tarea*/}
                                <View style={styles.containerIcons}>
                                    <Pressable onPress={() => {
                                        setTaskSelected(item)
                                        handleModal()
                                    }}>
                                        <Icon
                                            name={'calendar-outline'}
                                            type='ionicon'
                                            size={25}
                                            color={item.date.length > 0 ? color.lightRed : color.fonts}
                                            borderRadius={1000}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        )
                    }
                }}
                keyExtractor={item => item.id}
            >

            </FlatList> : <Text style={styles.subtitles}>Sin Tareas pendientes</Text>}

            <View >
                <Text style={styles.subtitles}>Finalizadas</Text>
            </View>
            {tareas.length > 0 ? <FlatList
                data={tareas}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    if (item.status === 'done') {
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
                                        textStyle={{
                                            color: color.blue,
                                            textDecorationLine: "line-through",
                                        }}
                                        title={item.title}
                                        checked={item.status === 'pending' ? false : true}
                                        onPress={() => dispatch(setTaskInProgress(item))}
                                    />
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

                                <View style={styles.containerIcons}>
                                    <Pressable onPress={() => {
                                        setTaskSelected(item)
                                        handleModal()
                                    }}>
                                        <Icon
                                            name={'calendar-outline'}
                                            type='ionicon'
                                            size={25}
                                            color={item.date.length > 0 ? color.lightRed : color.fonts}
                                            borderRadius={1000}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        )
                    }
                }}

            >

            </FlatList> : <Text style={styles.subtitles}>Sin Tareas finalizadas</Text>}


            {/* Modal para setear fecha de tarea */}

            <Modal animationType='fade' statusBarTranslucent={true} visible={modal}>
                <View style={styles.containerModal}>
                    <Text style={styles.titleModal}> ¿Cuando quieres realizar esta tarea?: {taskSelected.title}</Text>
                    <Button
                        onPress={() => {
                            dispatch(setTaskToday(taskSelected))
                            Alert.alert("Tarea agregada a Mi día")
                            setTaskSelected("")
                            handleModal()
                        }}
                        icon={{
                            name: "sunny-outline",
                            type: 'ionicon',
                            size: 20,
                            color: 'white',
                        }}
                        title="Hoy"
                        buttonStyle={{
                            backgroundColor: color.background,
                            borderWidth: 1,
                            borderColor: color.fonts,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ color: color.fonts }}
                    />
                    <Button
                        onPress={() => {
                            setInput(!input)

                        }}
                        icon={{
                            name: "today-outline",
                            type: 'ionicon',
                            size: 20,
                            color: 'white',
                        }}
                        title="Otra Fecha"
                        buttonStyle={{
                            backgroundColor: color.background,
                            borderWidth: 1,
                            borderColor: color.fonts,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ color: color.fonts }}
                    />
                    {input ?
                        <View style={styles.containerDate}>
                            <Input style={styles.inputDate} value={newDate.year} onChangeText={(text) => {
                                setNewDate({
                                    ...newDate,
                                    year: text
                                })
                            }}
                                placeholder='Año en formato yyyy'></Input>
                            <Input style={styles.inputDate} value={newDate.month}
                                onChangeText={(text) => setNewDate({
                                    ...newDate,
                                    month: text
                                })}
                                placeholder='Mes en formato mm'></Input>
                            <Input style={styles.inputDate} value={newDate.day}
                                onChangeText={(text) => setNewDate({
                                    ...newDate,
                                    day: text
                                })} placeholder='Día en formato dd'></Input>
                            <Button
                                onPress={() => {
                                    var nuevaFecha = new Date(newDate.year, newDate.month - 1, newDate.day)
                                    if (nuevaFecha.getTime() < hoy.getTime()) {
                                        Alert.alert("La fecha ingresada no puede ser anterior a la actual")
                                    } else {
                                        dispatch(setTaskAnotherDay(taskSelected, nuevaFecha))
                                        setInput(!input)
                                        setModal(!modal)
                                        setNewDate({
                                            year: "",
                                            month: "",
                                            dat: ""
                                        })
                                        Alert.alert(`Tarea programada para  ${nuevaFecha.toDateString()} `)
                                    }

                                }}
                                icon={{
                                    name: "today-outline",
                                    type: 'ionicon',
                                    size: 20,
                                    color: 'white',
                                }}
                                title="Guardar"
                                buttonStyle={{
                                    backgroundColor: color.background,
                                    borderWidth: 1,
                                    borderColor: color.fonts,
                                    borderRadius: 30,
                                }}
                                containerStyle={{
                                    width: 250,
                                    marginHorizontal: 25,
                                    marginVertical: 10,
                                }}
                                titleStyle={{ color: color.fonts }}
                            />

                        </View> : <Text></Text>}
                    <Button
                        onPress={() => {
                            setModal(false)

                        }}
                        icon={{
                            name: "arrow-back-outline",
                            type: 'ionicon',
                            size: 20,
                            color: 'white',
                        }}
                        title="Volver"
                        buttonStyle={{
                            backgroundColor: color.background,
                            borderWidth: 1,
                            borderColor: color.fonts,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ color: color.fonts }}
                    />
                </View>

            </Modal>
        </View>
    )


}

