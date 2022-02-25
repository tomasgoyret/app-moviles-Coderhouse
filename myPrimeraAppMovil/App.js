import List from './components/List';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native-web';

const Stack = createNativeStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    Raleway: require('./assets/fonts/static/Raleway-Regular.ttf'),
    RalewayBold: require('./assets/fonts/static/Raleway-Bold.ttf')
  })
  if (!loaded) return <AppLoading />
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='List' component={List}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


