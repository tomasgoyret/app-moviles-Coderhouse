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
        flexDirection: "row"
    },
    containerCheckbox: {
        width: 300
    },
    containerIcons: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: 3.5
    },
    input: {
        padding: 10,
        color: color.fonts
    },
    
    subtitles: {
        color: color.fonts,
        fontSize: 25,
        fontFamily: "Raleway",
        textDecorationLine: "underline",
        marginBottom: 20
    },
    titleModal: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        color: color.fonts,
        fontSize: 25,
        fontFamily: "RalewayLightItalic",
        marginBottom: 100,
        marginTop: 100,
        paddingLeft: 30
    },
    containerModal: {
        margin: 0,
        padding: 20,
        backgroundColor: color.background,
        flex: 1,
        alignItems: "center"
    },
    containerDate: {
        display: "flex",
        justifyContent: "flex-start",
        width: 300
    },
    inputDate: {
        padding: 10,
        color: color.fonts,
        width: 300
    },
})

export default styles