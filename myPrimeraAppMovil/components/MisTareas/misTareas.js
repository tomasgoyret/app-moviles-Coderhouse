import { View, Text, FlatList, Pressable, Alert, } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { Input, Icon, CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks, setTaskDone, setTaskInProgress, setTaskImportant, deleteTask } from '../../store/actions';
import styles from './stylesMisTareas';
import { ListItemBase } from 'react-native-elements/dist/list/ListItemBase';



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


    const handleNewTask = (titleTask) => {
        setTask({
            ...task,
            title: titleTask
        })
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
                                        Alert.alert("Tarea a realizar el: " + item.date)
                                    }}>
                                        <Icon
                                            name={'calendar-outline'}
                                            type='ionicon'
                                            size={25}
                                            color={color.fonts}
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
                                        Alert.alert("Tarea a realizar el: " + item.date)
                                    }}>
                                        <Icon
                                            name={'calendar-outline'}
                                            type='ionicon'
                                            size={25}
                                            color={color.fonts}
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
        </View>
    )


}

