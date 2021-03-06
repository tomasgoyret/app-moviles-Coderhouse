import { StyleSheet } from "react-native";
import color from "../../assets/variablesDeEstilo/colors";
import fuente from "../../assets/variablesDeEstilo/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: color.background,
        color: color.fonts,
        fontFamily: fuente.regular
    },
    user: {
        backgroundColor: color.background,
        color: color.fonts,
        fontFamily: fuente.titulo,
        fontSize: 20
    },
    mail: {
        backgroundColor: color.background,
        color: color.fonts,
        fontFamily: fuente.cursiva
    },
    imagen: {
        width: 60,
        height: 60,
    },
    navText: {
        fontSize: 20,
        color: color.fonts,
        fontFamily: fuente.regular,
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 5,
        fontWeight: "900",
    },
    navContainer: {
        marginLeft: 7,
        marginRight: 15,
        paddingBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    containerUser: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    containerUserData: {
        marginLeft: 15,
    },
    navOption: {
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    subtitles: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        color: color.fonts,
        fontSize: 25,
        fontFamily: "RalewayLightItalic",
        marginLeft: 30
    }, 
    containerBoton : {
        marginTop: 30
    }
}
)

export default styles