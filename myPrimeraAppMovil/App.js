import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import store from './store';
import { init } from './db';
import MainNavigator from './Navigation/MainNavigator';


init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Data base fail conect')
    console.log(err)
  })
export default function App() {
  const [loaded] = useFonts({
    Raleway: require('./assets/fonts/static/Raleway-Medium.ttf'),
    RalewayBold: require('./assets/fonts/static/Raleway-Bold.ttf'),
    RalewayLightItalic: require('./assets/fonts/static/Raleway-LightItalic.ttf'),
  })
  if (!loaded) return <AppLoading />

  return (
    <Provider store={store}>
        <MainNavigator/>
    </Provider>
  );
}


