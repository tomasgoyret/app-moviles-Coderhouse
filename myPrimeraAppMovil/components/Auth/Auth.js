import { View, Image, Text, Pressable, Alert } from 'react-native';
import styles from './stylesAuth';
import { Input, Icon, Button } from 'react-native-elements';
import color from '../../assets/variablesDeEstilo/colors';


export default function Authentication() {

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