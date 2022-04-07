import { View, Text, FlatList, } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { getTask } from '../../db';
import { Input, Icon, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks } from '../../store/actions';
import styles from './stylesMisTareas';




export default function MisTareas({ navigation }) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const saveTask = () => {
        dispatch(newTask("hola@hola.com", { title: "hacer otra cosa" }))
    }

    let tareas = useSelector(state => state.misTareas)

    // const styles = StyleSheet.create({
    //     shadow: {
    //         shadowColor: `${color.lightRed}`,
    //         shadowOffset: { width: 0, height: 10 },
    //         shadowOpacity: 0.25,
    //         shadowRadius: 0.25,
    //         elevation: 5,
    //     },
    //     tabBar: {
    //         position: 'absolute',
    //         bottom: 25,
    //         left: 20,
    //         right: 20,
    //         borderRadius: 15,
    //         height: 90,
    //     },
    //     item: {
    //         color: `${color.blue}`,
    //         flex: 1,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //     },
    // })

    const [newTask, setNewTask] = useState({
        user: auth,
        title: "",
        important: false,
        date : "",
        status: "pending",
        id: Math.random()
    })

    console.log(newTask)

    const handleNewTask = (titleTask) => {
        setNewTask({
            ...newTask,
            title:titleTask
        })
    }


    return (
        <View style={styles.container}>
            <Input
                valuie={newTask.title}
                onChangeText={ (text) => handleNewTask(text)}
                placeholder='Ingrese la tarea que desea agregar'
                leftIcon={
                    <Icon
                        name='add-outline'
                        type='ionicon'
                        size={24}
                        color={color.fonts}
                        borderRadius={1000}
                        backgroundColor={color.darkRed}
                    />
                }
            />
            {tareas.length > 0 ? <FlatList
                data={tareas}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
                keyExtractor={item => item + Math.random()}
            >

            </FlatList> : <Text>Sin Tareas</Text>}

            {/* <Button
                onPress={() => { setVisible(true) }}
                icon={{
                    name: 'add-outline',
                    type: 'ionicon',
                    size: 40,
                    color: 'white',
                }}
                buttonStyle={{
                    backgroundColor: color.darkRed,
                    borderWidth: 1,
                    borderColor: color.fonts,
                    display: 'flex',
                    justifyContent: "center",
                    borderRadius: 1000,
                }}
                containerStyle={{
                    position: "absolute",
                    top: "85%",
                    right: "10%",

                }}
                titleStyle={{ color: color.fonts }}
            /> */}
            {/* <BottomSheet style={styles.addTask}
                modalProps={{
                    animationType: "slide",
                    transparent: false,
                }}
                isVisible={visible}>
                <View style={styles.addTask} >
                    <Text>Agregar tareas</Text>
                    <Button
                        onPress={() => { setVisible(!visible) }}
                        icon={{
                            name: 'add-outline',
                            type: 'ionicon',
                            size: 40,
                            color: 'white',
                        }}
                        buttonStyle={{
                            backgroundColor: color.blue,
                            borderWidth: 1,
                            borderColor: color.fonts,
                            display: 'flex',
                            justifyContent: "center",
                            borderRadius: 1000,
                        }}
                        containerStyle={{
                            position: "absolute",
                            top: "85%",
                            right: "10%",

                        }}
                        titleStyle={{ color: color.fonts }}
                    />
                </View>
            </BottomSheet> */}
        </View>
    )


}

