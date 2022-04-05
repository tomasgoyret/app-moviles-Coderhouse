import { View, Image, Text, Pressable, Alert, Modal } from 'react-native';
import styles from './stylesAuth';
import { Input, Icon, Button } from 'react-native-elements';
import color from '../../assets/variablesDeEstilo/colors';
import axios from 'axios';
import {useState} from 'react'
import SignUp from '../SignUp/SignUp';


export default function Authentication({navigation}) {

    const auth_uri = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUUuOrljFuN1tckzxnm-pRrqQ_upyXkrc"

    const [auth, setAuth] = useState({
        email: "",
        password: ""
    })

    const handleOnChangeEmail = (email) => {
        setAuth({
            ...auth,
            email: email
        })
    }
    const handleOnChangePassword = (password) => {
        setAuth(
            {...auth,
            password : password}
        )
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/edddd4.png')} />
            <Input
                style={styles.input}
                placeholder='Email'
                leftIcon={
                    <Icon
                        name="person-circle-outline"
                        type='ionicon'
                        size={22}
                        color={color.fonts}
                    />
                }
                value={auth.email}
                onChangeText= {(email) =>{ 
                    handleOnChangeEmail(email)
                }
                }
                autoCapitalize= "none"
                keyboardType='email-address'
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
                value={auth.password}
                onChangeText= {(password) => {
                    handleOnChangePassword(password)
                }
                }
                autoCapitalize="none"
                secureTextEntry
            />
            <View style={styles.containerforgotPassword}>
                <Pressable onPress={() => { Alert.alert("Esta app está en desarrollo, funcionalidad en construcción") }}>
                    <Text style={styles.forgotPassword} >Recuperar contraseña</Text>
                </Pressable>
            </View>

            <View style={styles.containerButtoms}>
                <Button
                    onPress={async () => {
                        try {
                            Alert.alert(auth.email)
                            const response = await axios.post(auth_uri, { email: auth.email, password: auth.password, returnSecureToken: true })
                            console.log(response.data.email)
                        } catch (err) {
                            console.error(err.message)
                        }
                    }
                    }
                    title="Iniciar Sesión"
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
                    onPress={() => { Alert.alert("Esta app está en desarrollo, funcionalidad en construcción") }}
                    icon={{
                        name: 'logo-google',
                        type: 'ionicon',
                        size: 20,
                        color: 'white',
                    }}
                    title="Google"
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

            <View>
                <Pressable style={styles.newAccount} onPress={() => { navigation.navigate("SignUp") }}>
                    <Text style={styles.newAccountText}>¿No tenés cuenta? Crear una cuenta</Text>
                </Pressable>
            </View>

            {/* <Modal animationType='slice' visible={modal}>
                <SignUp></SignUp>
            </Modal> */}




        </View>
    )
}