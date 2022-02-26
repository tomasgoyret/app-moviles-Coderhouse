import { Text, Button, View } from 'react-native';
import React from 'react';
import styles from './styleHome';



export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.container}>aquí va el Usuario</Text>
            <Button color='black' onPress={() => { navigation.navigate('List') }}
                title='My Day'></Button>
            <Button onPress={() => { navigation.navigate('List') }}
                title='Important'></Button>
            <Button color='red' onPress={() => { navigation.navigate('List') }}
                title='Task'></Button>
            <Text>Lists</Text>

            <Button color='green' onPress={() => { navigation.navigate('List') }}
                title='New Task'></Button>

        </View>
    )
}

