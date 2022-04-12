import { View, Text, FlatList, Pressable, Alert, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { Input, Icon, CheckBox, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks, setTaskDone, setTaskInProgress, setTaskImportant, deleteTask, setTaskToday, setTaskAnotherDay  } from '../../store/actions';
import styles from './stylesMisTareas';
import { DateTimePicker } from '@react-native-community/datetimepicker';
//import SetDate from './setDate';

export default function MisTareas({ }) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    let tareas = useSelector(state => state.misTareas)

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

    const [modal,setModal] = useState(false)
    const [newDate,setNewDate] = useState(new Date())
    const [input,setInput] = useState(false)
    const [taskSelected,setTaskSelected] = useState("")

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
            <View>
                <Text style={styles.subtitles}>Pendientes</Text>
            </View>
            {tareas.length > 0 ? <FlatList
                data={tareas}
                renderItem={({ item }) => {
                    if (item.status === 'pending') {
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
                keyExtractor={item => item.id}
            >

            </FlatList> : <Text>Sin Tareas pendientes</Text>}

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

            </FlatList> : <Text>Sin Tareas finalizadas</Text>}

            <Modal animationType='slide' visible={modal}>
                {/* //<SetDate taskSelected={taskSelected} ></SetDate> */}
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
                        setInput(true)
                     }}
                    icon={{
                        name: "today-outline",
                        type: 'ionicon',
                        size: 20,
                        color: 'white',
                    }}
                    title="Otra fecha"
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
                {input ? <Text> Holaaaa</Text>
            // <DateTimePicker 
            //     value={newDate}
            //     dateFormat="day month year"
            //     // onChange={(e,date) =>{
            //     //     setNewDate(date)
            //     //     setTaskAnotherDay(taskSelected,newDate)
            //     //     setInput(false)
            //     // }}
            // ></DateTimePicker>
            : <Text> Hola</Text>}
            </View>
        
            </Modal>
        </View>
    )


}

