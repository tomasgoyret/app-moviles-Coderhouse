import { Text,View} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';



export default function Listas () {

    let listas = useSelector(state => state.list)
    var cod = 0

    return (
        <View>
            <Text>Listas</Text>
            {listas[0]? listas.map((e)=>{
                       cod = cod + 1
                        return <Text key={cod}> 1 {e.name} </Text>
                    }) : <Text>No hay tarea</Text>}
        </View>
    )
}
