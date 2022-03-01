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
        borderRadius: 500,
    },
    navText: {
        fontSize: 15,
        color: color.fonts,
        fontFamily: fuente.regular,
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 5,
        fontWeight: "900",
    },
    navContainer: {
        marginLeft: 15,
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
}
)

export default styles