import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import DNALogo from './assets/images/DNALogo.png'
export default function App() {

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'PaytoneOne-Regular': require('./assets/fonts/PaytoneOne-Regular.ttf'),
      });
    }
    loadFonts();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Care Cloud</Text>
      <Image source={DNALogo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontFamily: 'PaytoneOne-Regular',
    fontSize: 48,
    color: '#7AE284'
  }
});
