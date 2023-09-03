import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useFonts } from 'expo-font';
import LoadingScreen from './screens/LoadingScreen';
import HomePage1 from './screens/HomePage1';

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "PaytoneOne-Regular": require("./assets/fonts/PaytoneOne-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "robotoRegular": require('./assets/fonts/Roboto-Regular.ttf'),
    "poetsenOne": require('./assets/fonts/PaytoneOne-Regular.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  // Function to hide the splash screen and navigate to HomePage1
  const hideSplashAndNavigate = () => {
    setHideSplashScreen(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage1"
          component={HomePage1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
