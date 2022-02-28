import { StyleSheet } from "react-native";
import color from "../../assets/variablesDeEstilo/colors";
import fuente from "../../assets/variablesDeEstilo/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontSize: 20,
        color: color.fonts,
        fontFamily: fuente.regular,
        marginTop: 5,
        marginLeft: 10,
    },
    containerUser: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    containerUserData: {
        marginLeft: 15,
    }

}
)

export default styles