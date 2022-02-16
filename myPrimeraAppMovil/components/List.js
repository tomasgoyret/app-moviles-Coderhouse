import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Text, TextInput, View, FlatList, Modal } from 'react-native';
import styles from './styles';

export default function List() {

  const [text, setText] = useState('')
  const [task, setTask] = useState([])

  const [modal, setModal] = useState(false)
  const [tareaSelected, setTaskSelected] = useState({})

  const [taskDone,setTaskDone] = useState([])

  const handleChangeText = (text) => {
    setText(text)
  }
  const handleTask = () => {
    if (!text) {
      return alert('el campo de la tarea no puede estar vacío')
    }
    setTask([
      ...task,
      {
        nro: Math.random().toString(),
        tarea: text,
      },
    ])
    setText('')
    alert(`Tarea "${text}" agregada`)
  }



  const handleDone = (item) => {
    setTask(task.filter(e=>e.nro != item.nro))
    setTaskDone([
      ...taskDone,
    item
    ])
  }

  const handleDelete = (tarea) => {
    setModal(true)
    setTaskSelected(tarea)
  }
  const handleConfirmDelete = () => {
    const { nro } = tareaSelected
    setTask(task.filter(e => e.nro != nro))
    setTaskDone(taskDone.filter(e => e.nro != nro))
    setModal(false)
    setTaskSelected({})
  }

  const handleVolver = () => {
    setModal(false)
    setTaskSelected({})
  }

  const handleInProgress = (item) =>{
    setTask([
      ...task,
      item
    ])
    setTaskDone(taskDone.filter(e=> e.nro != item.nro))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>


      <Text style={styles.text}>La app para gestionar tus tareas</Text>
      <TextInput value={text} onChangeText={handleChangeText} style={styles.textInput} placeholder='Escribe la tarea que quieres realizar'></TextInput>
      <Button color='black' onPress={handleTask} title='Agregar tarea'></Button>
    
           {task.length != 0 ? <Text style={styles.text}>Tareas pendientes</Text> : <Text style={styles.text}>No tienes tareas por realizar</Text>}
           <FlatList
             data={task}
             renderItem={({ item }) => (
                 <View style={styles.containerTarea}>
                   <Text style={styles.tarea}>{item.tarea}</Text>
                   <Button style={styles.boton} color='black' onPress={()=>handleDelete(item)} title="X" />
                   <Button color='black' onPress={() =>handleDone(item)} title = 'Finalizada'/>
                 </View>
               )
             }
             keyExtractor={item => item.nro}
           />
   

    {taskDone.length != 0 ? <Text style={styles.text}>Tareas Finalizadas</Text> : <Text style={styles.text}>No tienes tareas completadas</Text>}

           <FlatList
            data={taskDone}
            renderItem={({ item }) => (
                <View style={styles.containerTarea}>
                  <Text style={styles.tareaDone}>{item.tarea}</Text>
                  <Button color='black' onPress={()=>handleDelete(item)} title="X" />
                  <Button color='black' onPress={() =>handleInProgress(item)} title = 'En progreso'/>
                </View>
              )
            }
            keyExtractor={item => item.nro}
          />

    <Modal animationType='slide' visible={modal}>
            <View>
              <View>
                <Text>¿Está seguro que desea eliminar?</Text>
                <Text>{tareaSelected && tareaSelected.tarea}</Text>
              </View>
              <View>
                <Button
                  onPress={handleConfirmDelete}
                  title="Confirmar"
                />
                <Button
                  onPress={handleVolver}
                  title="Volver"
                />
              </View>
            </View>
          </Modal>
    </View>
    //   </View>
    //     </View>
  );
}

