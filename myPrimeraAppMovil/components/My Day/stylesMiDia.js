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
        marginTop:60
    },
    containerCheckbox: {
        width: 330
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