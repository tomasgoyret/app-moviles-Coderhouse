import { View, Text, FlatList, Pressable, Alert, } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { Input, Icon, CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks, setTaskDone, setTaskInProgress, setTaskImportant, deleteTask, setTaskAnotherDay } from '../../store/actions';
import styles from './stylesPlaneadas';


export default function Planeadeas() {

    const dispatch = useDispatch()
    let tareas = useSelector(state => state.misTareas)
    tareas = tareas.sort((prev,post) => {
        if(prev.date < post.date) {
            return -1
        } else if (prev.date > post.date){
            return 1
        } else return 0
    })
    //let hoy = today.toDateString()

    useEffect(() => {
        dispatch(getTasks())
    }, [tareas])

    return (
        <View style={styles.container}>
            <Text style={styles.subtitles}> Cronograma de tareas </Text>
            {tareas.length>0 ? <FlatList
                data={tareas}
                renderItem={({ item }) => {
                    if (item.date) {
                        let today = item.date.split("T")
                        let dia = today[0].split("-")
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
                                        title={item.title + "    " + dia[2]+"-"+dia[1]+"-"+dia[0]}
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
                                <View style={styles.containerIcons}>
                                    <Pressable onPress={() => {
                                        dispatch(setTaskAnotherDay(item,""))
                                        Alert.alert("Fecha eliminada: Tarea " + item.title)
                                    }}>
                                        <Icon
                                            name={'calendar-outline'}
                                            type='ionicon'
                                            size={25}
                                            color={item.date ? color.lightRed : color.fonts}
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