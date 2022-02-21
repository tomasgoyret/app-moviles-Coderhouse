import {Text, View, FlatList, Button} from 'react-native';
import styles from './styles';

export default function Completed ({handleDelete, handleInProgress, taskDone}) {
    return (
        <View>
            <Text style={styles.text}>Tareas Finalizadas</Text>
    
            <FlatList
              data={taskDone}
              renderItem={({ item }) => (
                <View style={styles.containerTarea}>
                  <Text style={styles.tareaDone}>{item.tarea}</Text>
                  <Button color='black' onPress={() => handleDelete(item)} title="X" />
                  <Button color='black' onPress={() => handleInProgress(item)} title='En progreso' />
                </View>
              )
              }
              keyExtractor={item => item.nro}
            />
        </View>
    )
}