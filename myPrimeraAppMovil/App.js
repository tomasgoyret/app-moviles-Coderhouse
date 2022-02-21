import List from './components/List';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({
    Raleway: require('./assets/static/Raleway-Regular.ttf'),
    RalewayBold: require('./assets/static/Raleway-Bold.ttf')
  })
  if(!loaded) return AppLoading
  return (
    <List/>
  );
}


