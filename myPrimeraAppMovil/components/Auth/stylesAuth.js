import { StyleSheet } from "react-native";
import color from "../../assets/variablesDeEstilo/colors";
import fuente from "../../assets/variablesDeEstilo/fonts";


const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        backgroundColor: color.background,
        flex: 1, 
        alignItems: "center"
    },
    image: {
        height:350,
        width: 350,
    },
    input: {
        padding: 10,
    }
})

export default styles