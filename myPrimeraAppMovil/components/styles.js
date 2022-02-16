import { StyleSheet } from "react-native";

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
      borderStyle: 'solid',
      borderColor: 'white',
      marginTop: 20,
      color: 'white',
      marginBottom: 20
    },
    tarea:{
      color: 'white',
      marginTop: 10,
      marginBottom: 10,
      fontSize: 20,
    },
    tareaDone:{
      color: 'black',
      marginTop: 10,
      marginBottom: 10,
      fontSize: 20,
      textDecorationLine: 'line-through'
    },
    containerTarea:{
      borderWidth: 1,
      borderColor:'white',
      borderStyle: 'solid',
      padding: 5,
      marginVertical: 5, 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  export default styles