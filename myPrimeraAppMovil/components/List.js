import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function List() {

const [text, setText ] = useState('')
const [task,setTask] = useState([])

const handleChangeText = (text) => {
    setText(text)
}
const handleTask = ()=>{
    setTask([
        ...task,
        text
    ])
    setText('')
    Alert.alert('Tarea agregada')
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>
      <View>
      <Text style={styles.text}>La app para gestionar tus tareas</Text>
      <TextInput value={text} onChangeText={handleChangeText} style={styles.textInput}  placeholder='Escribe la tarea que quieres realizar'></TextInput>
      <Button color='black' onPress={handleTask} title='Agregar tarea'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0655b',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
      marginTop: 30,
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white'
  },
  text:{
      color: 'white',
      marginTop: 20,
      marginBottom: 20,
      fontSize: 20
  },
  textInput:{
      marginTop: 20,
      color: 'white',
      marginBottom: 20
  }
});