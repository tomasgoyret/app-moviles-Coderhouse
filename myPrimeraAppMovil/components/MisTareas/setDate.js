import { Text, View } from 'react-native';
import React from 'react';
import { setTaskToday, setTaskAnotherDay } from '../../store/actions';
import { useState } from 'react';
import styles from './stylesMisTareas';
import { Input, Icon, Alert, Button } from 'react-native-elements';
import color from '../../assets/variablesDeEstilo/colors';
import { DateTimePicker } from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';



export default function SetDate({taskSelected, input}) {

    const [newDate,setNewDate] = useState(new Date())
    const [value,setValue] = useState(false)
    const dispatch = useDispatch()

    return (
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
            {input ? <DateTimePicker
                value={new Date()}
                //mode="date"
                dateFormat="day month year"
                themeVariant="dark"
                // onChange={(e, date) => {
                //     setNewDate(date)
                //     // setTaskAnotherDay(taskSelected, newDate)
                //     setInput(false)
                // }}
            ></DateTimePicker> : <Text> </Text>}
        </View>
    )
}