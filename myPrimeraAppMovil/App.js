import List from './components/List';
import Importante from './components/Importante/Importante'
import Home from './components/Home/Home';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, createBottomTabNavigator } from '@react-navigation/native-stack'
import MiDia from './components/My Day/MiDia';
import MisTareas from './components/MisTareas/misTareas';
import Authentication from './components/Auth/Auth.js';
import { Provider } from 'react-redux';
import store from './store';
import { init } from './db';
import SignUp from './components/SignUp/SignUp';

const Stack = createNativeStackNavigator()

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Data base fail conect')
    console.log(err)
  })
export default function App() {
  const [loaded] = useFonts({
    Raleway: require('./assets/fonts/static/Raleway-Light.ttf'),
    RalewayBold: require('./assets/fonts/static/Raleway-Bold.ttf'),
    RalewayLightItalic: require('./assets/fonts/static/Raleway-LightItalic.ttf'),
  })
  if (!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Authentication'
          screenOptions={
            {headerShown: false}
          }
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Importante' component={Importante} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='MiDia' component={MiDia} />
          <Stack.Screen name='Mis tareas' component={MisTareas} />
          <Stack.Screen name='Nueva tarea' component={List} />
          <Stack.Screen options={{
            headerShown: false
          }}
          name='Authentication' component={Authentication} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


