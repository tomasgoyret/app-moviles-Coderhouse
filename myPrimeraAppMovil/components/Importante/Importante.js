import { View, Text, FlatList, Pressable, Alert, } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { Input, Icon, CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks, setTaskDone, setTaskInProgress, setTaskImportant, deleteTask } from '../../store/actions';
import styles from './stylesImportante';



export default function Importante({ }) {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    let tareas = useSelector(state => state.misTareas)

    const [tareaImportante,setTareaImportante] = useState(false)

    useEffect(() => {
        dispatch(getTasks())
        for(var i= 0; i<tareas.length; i++){
            if(tareas[i].important === true){
               setTareaImportante(true)
               break
            } else setTareaImportante(false)
        }
    }, [tareas,tareaImportante])

    return (
        <View style={styles.container}>
            {tareaImportante ? <FlatList
                data={tareas}
                renderItem={({ item }) => {
                    if (item.important === true) {
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
                                        textStyle={ item.status === "pending" ? {
                                            color: color.fonts,
                                        } : {
                                            color: color.blue,
                                            textDecorationLine: "line-through",
                                        }}
                                        title={item.title}
                                        checked={item.status === 'pending' ? false : true}
                                        onPress={() => {
                                            if(item.status === "pending"){
                                                dispatch(setTaskDone(item))
                                            }
                                            if(item.status === "done"){
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
                    }
                }}
                keyExtractor={item => item.id}
            >

            </FlatList> : <Text style={styles.subtitles}>No hay tareas importantes</Text>}
        </View>
    )
}

