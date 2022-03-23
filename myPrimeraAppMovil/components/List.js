import { useState } from 'react';
import { Button, Text, TextInput, View, FlatList, Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import Completed from './CompletedTask';
import Pending from './PendingTasks';
import styles from './styles';
import { insertTask } from '../db';
import { normalizeText } from 'react-native-elements/dist/helpers';

export default function List() {

  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [task, setTask] = useState([])

  const [modal, setModal] = useState(false)
  const [tareaSelected, setTaskSelected] = useState({})

  const [taskDone, setTaskDone] = useState([])
  const [mostrarTaskDone, setMostrarTaskDone] = useState(false)

  const [mostrarMisTareas, setMostrarMisTareas] = useState(false)

  const handleChangeText = (text) => {
    setText(text)
  }
  const handleTask = async () => {
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
    try {
      let response = await insertTask(text)
      console.log(response, 'insertTask')
      console.log(`se agrego ${text} a la BBDD`)
    } catch (err) {
      console.log(`No se pudo agregar a la BBDD`)
      console.log(err)
    }

    setText('')
    alert(`Tarea "${text}" agregada`)
  }

  const handleTareasFinalizadas = () => {
    setMostrarMisTareas(false)
    setMostrarTaskDone(true)
  }

  const handleMistareas = () => {
    setMostrarMisTareas(true)
    setMostrarTaskDone(false)
  }

  const handleDone = (item) => {
    setTask(task.filter(e => e.nro != item.nro))
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

  const handleInProgress = (item) => {
    setTask([
      ...task,
      item
    ])
    setTaskDone(taskDone.filter(e => e.nro != item.nro))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>
      <Text style={styles.text}>La app para gestionar tus tareas</Text>

      <TextInput value={text} onChangeText={handleChangeText} style={styles.textInput} placeholder='Escribe la tarea que quieres realizar'></TextInput>

      <Button color='#8a151b' onPress={handleTask} title='Agregar tarea'></Button>

      <View style={styles.containerBotones}>
        <Button style={styles.botones} color='#b7ae9d' onPress={handleMistareas} title='Mis tareas'></Button>
        <Button color='#585340' onPress={handleTareasFinalizadas} title='Tareas finalizadas'></Button>
      </View>


      {mostrarMisTareas &&
        (<View>
          <Pending
          task={task}
          handleDone={handleDone}
          handleDelete={handleDelete}
          ></Pending>
          
        </View>)}


      {mostrarTaskDone &&
        (<View>
      <Completed
      taskDone={taskDone} 
      handleDelete= {handleDelete}
      handleInProgress= {handleInProgress}
      ></Completed>
        </View>)}



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
  );
}

