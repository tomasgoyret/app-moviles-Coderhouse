import { View, Text, FlatList, Pressable, } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { Input, Icon, CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks } from '../../store/actions';
import styles from './stylesMisTareas';




export default function MisTareas({ navigation }) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const saveTask = () => {
        dispatch(newTask(task))
        console.log("Nueva tarea agregada: "+ task.title)
    }

    let tareas = useSelector(state => state.misTareas)


    const [task, setTask] = useState({
        user: auth,
        title: "",
        important: false,
        date: "",
        status: "pending",
        id: Math.random()
    })


    const handleNewTask = (titleTask) => {
        setTask({
            ...task,
            title: titleTask
        })
    }

    useEffect(()=>{
        dispatch(getTasks())
    },[tareas])

    return (
        <View style={styles.container}>
            {/* <View style={styles.containerInput}> */}
            <Input style={styles.input}
                valuie={task.title}
                onChangeText={(text) => handleNewTask(text)}
                placeholder='Ingrese la tarea que desea agregar'
                leftIcon={
                    <Pressable onPress={()=> saveTask()}>
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
            {/* </View> */}
            {tareas.length > 0 ? <FlatList
                data={tareas}
                renderItem={({ item }) => {
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
                )}}
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

