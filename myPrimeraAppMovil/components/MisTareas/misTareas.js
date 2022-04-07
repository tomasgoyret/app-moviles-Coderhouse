import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import color from '../../assets/variablesDeEstilo/colors';
import { getTask } from '../../db';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getTasks } from '../../store/actions';
import styles from './stylesMisTareas';
import { State } from 'react-native-gesture-handler';


export default function MisTareas({ navigation }) {
    const dispatch = useDispatch()

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

    const [allTasks, setAllTasks] = useState()

    // useEffect(() => {
    //     dispatch(getTasks())
    //     // try {
    //     //     let tasks = await getTasks()
    //     //     var tareas = tasks.rows._array.map((e) => {
    //     //         var ele = {
    //     //             description: e.description,
    //     //             id: e.id
    //     //         }
    //     //         return ele

    //     //     })
    //     //     setAllTasks(tareas)
    //     //     console.log('Se importaron todas las tareas de BBDD')
    //     // } catch (error) {
    //     //     console.log('Fallo el getTasks')
    //     //     console.log(error)
    //     // }
    // }, [tareas])

    
    return (
        <View style={styles.container}>
            {tareas.length > 0 ? <FlatList
            data={tareas}
            renderItem = {({item}) => (
                <Text>{item.title}</Text>
            )}
            keyExtractor={item => item + Math.random()}
            >

            </FlatList> : <Text>Sin Tareas</Text> }
            
            <Button
                onPress={() => { saveTask() }}
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
            />
        </View>
    )


}

