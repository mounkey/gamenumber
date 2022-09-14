import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Foot from './components/foot';
import Head from './components/head';
import StartGameScreen from './screens/startGame';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      <Head title='Adivina el numero' />
      <ScrollView>
        <StartGameScreen />
      </ScrollView>
      <Foot></Foot>
    </View>
  );
}



