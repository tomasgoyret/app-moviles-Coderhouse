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
    addTask: {
        height: 500,
        flex: 1,
        maxHeight: "50%",
        backgroundColor: color.lightRed
    },
    input: {
         padding: 10,
         color: color.fonts
    }

    // },
    // inputPassword: {
    //     paddingLeft: 10,
    //     paddingBottom: 0
    // },
    // containerButtoms: {
    //     marginTop: 40,
    // },
    // containerforgotPassword: {
    //     color: color.fonts,
    //     position: 'relative',
    //     marginLeft: "50%",
    // },
    // forgotPassword: {
    //     color: color.fonts,
    // },
    // newAccount: {
    //     position: "relative",
    //     top: 80
        
    // },
    // newAccountText: {
    //     color: color.fonts,        
    // },
})

export default styles