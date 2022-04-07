import { View, Text, FlatList, Pressable, } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { Input, Icon, CheckBox, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks, updateTask } from '../../store/actions';
import styles from './stylesMisTareas';




export default function MisTareas({ navigation }) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const saveTask = () => {
        dispatch(newTask(task))
        console.log("Nueva tarea agregada: " + task.title)
    }

    let tareas = useSelector(state => state.misTareas)


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
    }, [])

    return (
        <View style={styles.container}>
            <Button onPress={()=>{
                console.log("boton")
                dispatch(updateTask(tareas[0]))
                }}></Button>
            <Input style={styles.input}
                valuie={task.title}
                onChangeText={(text) => handleNewTask(text)}
                placeholder='Ingrese la tarea que desea agregar'
                leftIcon={
                    <Pressable onPress={() => saveTask()}>
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
            <View style={styles.containerInput}>
                <Text >{tareas[0].date}</Text>
                <Text>Pendientes</Text>
            </View>
            {tareas.length > 0 ? <FlatList
                data={tareas}
                renderItem={({ item }) => {
                    if (item.status === 'pending') {
                        return (
                            <View style={styles.tasksList}>
                                <CheckBox
                                    center={false}
                                    containerStyle={{
                                        backgroundColor: color.background,
                                        color: color.fonts
                                    }}
                                    checkedColor={color.blue}
                                    textStyle={{
                                        color: color.fonts
                                    }}
                                    title={item.title}
                                    checked={item.status === 'pending' ? false : true}
                                    onPress={() => console.log('tarea realizada')}
                                />
                            </View>
                        )
                    }
                }}
                keyExtractor={item => item + Math.random()}
            >

            </FlatList> : <Text>Sin Tareas pendientes</Text>}

            <View style={styles.containerInput}>
                <Text>Finalizadas</Text>
            </View>
            {tareas.length > 0 ? <FlatList
                data={tareas}
                renderItem={({ item }) => {
                    if (item.status === 'done') {
                        return (
                            <View style={styles.tasksList}>
                                <CheckBox
                                    center={false}
                                    containerStyle={{
                                        backgroundColor: color.background,
                                        color: color.fonts
                                    }}
                                    checkedColor={color.blue}
                                    textStyle={{
                                        color: color.fonts
                                    }}
                                    title={item.title}
                                    checked={item.status === 'pending' ? false : true}
                                    onPress={() => console.log('tarea realizada')}
                                />
                            </View>
                        )
                    }
                }}
                keyExtractor={item => item + Math.random()}
            >

            </FlatList> : <Text>Sin Tareas finalizadas</Text>}
        </View>
    )


}

