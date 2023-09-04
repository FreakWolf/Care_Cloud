import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('HomePage1');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    PaytoneOneRegular: require('../assets/fonts/PaytoneOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (isLoading) {
    return (
      <View style={styles.loadingscreen}>
        <Image
          style={[styles.DNAlogo, styles.IconLayout]}
          source={require('../assets/images/DNALogo.png')}
        />
        <Text style={styles.careclouds}>Care Clouds</Text>
        <Image
          style={[styles.Shinelogo, styles.IconLayout]}
          source={require('../assets/images/Shine.png')}
        />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  IconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  DNAlogo: {
    height: '25.54%',
    width: '28.89%',
    top: '40%',
    right: '0%',
    bottom: '31.33%',
    left: '71.11%',
  },
  careclouds: {
    top: 410,
    left: 39,
    fontSize: 48,
    fontFamily: 'PaytoneOneRegular',
    color: '#7ae284',
    textAlign: 'left',
    position: 'absolute',
  },
  Shinelogo: {
    height: '30%',
    width: '122.47%',
    top: '40%',
    right: '-22.47%',
    bottom: '34.84%',
    left: '0%',
  },
  loadingscreen: {
    borderRadius: 20,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default LoadingScreen;
