import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#283d3b',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title: {
      marginTop: 30,
      fontSize: 80,
      fontWeight: 'bold',
      color: '#edddd4',
      fontFamily: 'RalewayBold'
    },
    text: {
      color: '#edddd4',
      marginTop: 20,
      marginBottom: 20,
      fontSize: 20,
      fontFamily: 'Raleway'
    },
    textInput: {
      borderStyle: 'solid',
      borderColor: 'white',
      marginTop: 20,
      color: 'white',
      marginBottom: 20
    },
    tarea:{
      color: '#197278',
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
    containerBotones:{
      display: 'flex',
      flexDirection: 'row',
    },
    botones:{
      fontSize: 38,
    }
  });

  export default styles