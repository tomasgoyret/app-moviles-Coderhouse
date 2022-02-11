import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View,FlatList } from 'react-native';

export default function List() {

  const [text, setText] = useState('')
  const [task, setTask] = useState([])

  const handleChangeText = (text) => {
    setText(text)
  }
  const handleTask = () => {
    setTask([
      ...task,
      {
        nro: Math.random().toString(),
        tarea: text,
      },
    ])
    setText('')
    Alert.alert('Tarea agregada')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>
      
      <View>
        <Text style={styles.text}>La app para gestionar tus tareas</Text>
        <TextInput value={text} onChangeText={handleChangeText} style={styles.textInput} placeholder='Escribe la tarea que quieres realizar'></TextInput>
        <Button color='black' onPress={handleTask} title='Agregar tarea'></Button>
      

      <FlatList
        data={task}
        renderItem={({ item }) => (
            <View style={styles.containerTarea}>
              <Text style={styles.tarea}>{item.tarea}</Text>
              {/* <Button onPress={handleOnDelete(item)} title="X" /> */}
            </View>
          )
        }
        keyExtractor={item => item.nro}
      />

  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa59e',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 30,
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white'
  },
  text: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20
  },
  textInput: {
    marginTop: 20,
    color: 'white',
    marginBottom: 20
  },
  tarea:{
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20
  },
  containerTarea:{
    borderWidth: 3,
    borderColor:'white',
    borderStyle: 'solid',
    padding: 5,
    marginVertical: 5, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});