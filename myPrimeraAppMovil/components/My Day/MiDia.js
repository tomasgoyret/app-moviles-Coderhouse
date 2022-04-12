import { View, Text, FlatList, Pressable, Alert, } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { Input, Icon, CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks, setTaskDone, setTaskInProgress, setTaskImportant, deleteTask } from '../../store/actions';
import styles from './stylesMiDia';



export default function MiDia () {

    const dispatch = useDispatch()
    let tareas = useSelector(state => state.misTareas)
    let today = new Date()
    let hoy = today.toDateString()





    useEffect(() => {
        dispatch(getTasks())
    }, [tareas])

    return (
        <View style={styles.container}>
            <Text style={styles.subtitles}> Tareas para el día de hoy </Text>
            <Text style={styles.subtitles}> {hoy} </Text>
            {tareas.length>0 ? <FlatList
                data={tareas}
                renderItem={({ item }) => {
                    let date1 = new Date(item.date)
                    if (hoy === date1.toDateString()) {
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

