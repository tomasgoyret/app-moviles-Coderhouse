import {Text, View, FlatList, Button} from 'react-native';
import styles from './styles';

export default function Pending ({handleDelete, handleDone, task}) {
    return (
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
        </View>
    )
}