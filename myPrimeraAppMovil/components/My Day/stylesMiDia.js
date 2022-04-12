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
    tasksList: {
        display: 'flex',
        width: 400,
        flexDirection: "row",
        
    },
    containerCheckbox: {
        width: 330,
        // marginTop:60
    },
    containerIcons: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    },
    input: {
        padding: 10,
        color: color.fonts
    },
    container: {
        display:"flex",
        margin: 0,
        padding: 0,
        backgroundColor: color.background,
        alignItems: "center"
    },
    subtitles: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        color: color.fonts,
        fontSize: 25,
        fontFamily: "RalewayLightItalic",
    }
})

export default styles