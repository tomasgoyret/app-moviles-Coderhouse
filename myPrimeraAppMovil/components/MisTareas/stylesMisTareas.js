import { StyleSheet } from "react-native";
import color from "../../assets/variablesDeEstilo/colors";


const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        backgroundColor: color.background,
        flex: 1,
        alignItems: "center"
    },
    tasksList : {
        display: 'flex',
        width: 400
    },
    input: {
         padding: 10,
         color: color.fonts
    }
})

export default styles