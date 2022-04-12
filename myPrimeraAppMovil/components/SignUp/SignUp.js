import { View, Image, Alert } from 'react-native';
import styles from './stylesSignUp.js';
import { Input, Icon, Button } from 'react-native-elements';
import color from '../../assets/variablesDeEstilo/colors';
import axios from 'axios';
import {useState} from 'react'


export default function SignUp({navigation}) {

    const auth_uri = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUUuOrljFuN1tckzxnm-pRrqQ_upyXkrc"

    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })

    const handleUsername = (username) =>{
        setNewUser({
            ...newUser,
            username: username
        })
    }
    const handlepassword = (password) =>{
        setNewUser({
            ...newUser,
            password: password
        })
    }
    const handleConfirmPassword = (confirmPassword) =>{
        setNewUser({
            ...newUser,
            confirmPassword: confirmPassword
        })
    }
    const newAccount = async (username, password, confirmPassword) => {
        if( password === confirmPassword){
            try {
                const response = await axios.post (auth_uri, { email : username , password: password, returnSecureToken: true})
            Alert.alert("Ya puedes iniciar sesión con la cuenta: "+ response.data.email)
            navigation.navigate("Authentication")
            } catch (error) {
                Alert.alert(error.message)
            }
        } else {
            Alert.alert("Las contraseñas no coinciden")
            console.log("Las contraseñas no coinciden")
        }
    }


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/edddd4.png')} />
            <Input
                style={styles.input}
                placeholder='Usuario'
                leftIcon={
                    <Icon
                        name="person-circle-outline"
                        type='ionicon'
                        size={22}
                        color={color.fonts}
                    />
                }
                value={newUser.username}
                onChangeText={(e) => {handleUsername(e)}} 
                autoCapitalize="none"
            />
            <Input
                style={styles.inputPassword}
                placeholder='Contraseña'
                leftIcon={
                    <Icon
                        name='lock-closed-outline'
                        type='ionicon'
                        size={22}
                        color={color.fonts}
                    />
                }
                value={newUser.password}
                onChangeText={(e) => {handlepassword(e)}}
                autoCapitalize="none"
                secureTextEntry
            />
            <Input
                style={styles.inputPassword}
                placeholder='Confirmar contraseña'
                leftIcon={
                    <Icon
                        name='lock-closed-outline'
                        type='ionicon'
                        size={22}
                        color={color.fonts}
                    />
                }
                value={newUser.confirmPassword}
                onChangeText={(e) => {handleConfirmPassword(e)}}
                secureTextEntry
                autoCapitalize="none"
            />

            <View style={styles.containerButtoms}>
                <Button
                    onPress={() => {
                        newAccount(newUser.username, newUser.password, newUser.confirmPassword)
                    }
                    }
                    title="Crear cuenta"
                    buttonStyle={{
                        backgroundColor: color.background,
                        borderWidth: 1,
                        borderColor: color.fonts,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 250,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ color: color.fonts }}
                />
                <Button
                    onPress={() => { navigation.navigate("Authentication") }}
                    icon={{
                        name: "arrow-back-circle-outline",
                        type: 'ionicon',
                        size: 20,
                        color: 'white',
                    }}
                    title="Volver"
                    buttonStyle={{
                        backgroundColor: color.background,
                        borderWidth: 1,
                        borderColor: color.fonts,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 250,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ color: color.fonts }}
                />
            </View>
        </View>
    )
}