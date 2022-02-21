import { useState } from 'react';
import { Button, Text, TextInput, View, FlatList, Modal } from 'react-native';
import Completed from './CompletedTask';
import styles from './styles';

export default function List() {

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

      <Button color='black' onPress={handleTask} title='Agregar tarea'></Button>
      <View>
        <Button color='#8f0334' onPress={handleTareasFinalizadas} title='Tareas finalizadas'></Button>
        <Button color='#176300' onPress={handleMistareas} title='Mis tareas'></Button>
      </View>


      {mostrarMisTareas &&
        <View>
          <Text style={styles.text}>Tareas pendientes</Text>
          <FlatList
            data={task}
            renderItem={({ item }) => (
              <View style={styles.containerTarea}>
                <Text style={styles.tarea}>{item.tarea}</Text>
                <Button style={styles.boton} color='black' onPress={() => handleDelete(item)} title="X" />
                <Button color='black' onPress={() => handleDone(item)} title='Finalizada' />
              </View>
            )
            }
            keyExtractor={item => item.nro}
          />
        </View>}


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

