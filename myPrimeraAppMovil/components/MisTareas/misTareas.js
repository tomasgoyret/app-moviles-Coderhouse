import { Text,View, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodasLasTareas from './Tab Navigation Task/TODO';
import Pendientes from './Tab Navigation Task/Pendientes';
import Completadas from './Tab Navigation Task/Finalizadas';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import color from '../../assets/variablesDeEstilo/colors';
import { getTask } from '../../db';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { newTask } from '../../store/actions';


const Tab = createBottomTabNavigator()


export default function MisTareas({ navigation }) {
    const dispatch = useDispatch()
    
    const saveTask = async () => {
       await dispatch(newTask("hola@hola.com", { title : "comprar PAN"}))
    }

    const styles = StyleSheet.create({
        shadow: {
          shadowColor: `${color.lightRed}`,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 0.25,
          elevation: 5,
        },
        tabBar: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 90,
        },
        item: {
          color:  `${color.blue}`,  
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      })

      const [allTasks, setAllTasks] = useState()

      useEffect( async ()=>{
          try {
              let tasks =  await getTask()
              var tareas = tasks.rows._array.map((e)=> {
                var ele = {
                    description : e.description,
                    id : e.id
                }
                return ele
              
            })
              setAllTasks(tareas)
              console.log('Se importaron todas las tareas de BBDD')
            } catch (error) {
                console.log('Fallo el getTasks')
                console.log(error)
            }
      },[])

    return (
        <View>
            <Button title="Agregar tarea" onPress={() => saveTask()}></Button>
            {/* {allTasks && allTasks.map((e) => {
                return <Text>{e.description}</Text>
            })} */}
        {/* <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { ...styles.shadow, ...styles.tabBar },
        }}>
            <Tab.Screen name="ToDo" component={TodasLasTareas}
            options={{
                tabBarIcon: () => (
                    <View style={styles.item}>
                        <Icon
                        name="list-outline"
                        type='ionicon'
                    />
                    <Text>Todas</Text>
                    </View>
                    )
                }}
            />
            <Tab.Screen name="En proceso" component={Pendientes}
            options={{
                tabBarIcon: () => (
                    <View style={styles.item}>
                        <Icon
                        name="folder-open-outline"
                        type='ionicon'
                    />
                    <Text>Pendientes</Text>
                    </View>
                    )
                }}/>
            <Tab.Screen name="Completadas" component={Completadas}
            options={{
                tabBarIcon: () => (
                    <View style={styles.item}>
                        <Icon
                        name="checkmark-done-circle-outline"
                        type='ionicon'
                    />
                    <Text>Completadas</Text>
                    </View>
                    )
                }}/>
        </Tab.Navigator> */}
        </View>
    )


}

