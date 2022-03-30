import { View, Image, Text, Pressable } from 'react-native';
import styles from './stylesAuth';
import { Input, Icon, Button } from 'react-native-elements';
import color from '../../assets/variablesDeEstilo/colors';


export default function Authentication() {

    const logo = '../../assets/edddd4.png'
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require(logo)} />
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
                style={styles.input}
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
                titleStyle={{ fontWeight: 'thin' , color: color.fonts }}
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
                titleStyle={{ fontWeight: 'thin' , color: color.fonts }}
            />

            <Pressable>
            <Text>¿No tenés cuenta? Crear una cuenta</Text>
            </Pressable>
            <Pressable>
            <Text>¿Olvidate la contraseña? Recuperar contraseña</Text>
            </Pressable>
           

        </View>
    )
}