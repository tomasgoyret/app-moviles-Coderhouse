import { View, Image, Text, Pressable, Alert } from 'react-native';
import styles from './stylesAuth';
import { Input, Icon, Button } from 'react-native-elements';
import color from '../../assets/variablesDeEstilo/colors';
import axios from 'axios';


export default function Authentication() {

    const auth_uri = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUUuOrljFuN1tckzxnm-pRrqQ_upyXkrc"
    const logo = '../../assets/edddd4.png'
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
            />
            <View style={styles.containerforgotPassword}>
                <Pressable onPress={() => { Alert.alert("Recuperar contraseña") }}>
                    <Text style={styles.forgotPassword} >Recuperar contraseña</Text>
                </Pressable>
            </View>

            <View style={styles.containerButtoms}>
                <Button
                    onPress={async () => {
                        try {
                            const response = await axios.post(auth_uri, { email: "colo@goyret.com", password: "hola123", returnSecureToken: true })
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
                <Pressable style={styles.newAccount} onPress={() => { Alert.alert("Crear cuenta") }}>
                    <Text style={styles.newAccountText}>¿No tenés cuenta? Crear una cuenta</Text>
                </Pressable>
            </View>



        </View>
    )
}