const Stack = createNativeStackNavigator();
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import LoadingScreen from './screens/LoadingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "PaytoneOne-Regular": require("./assets/fonts/PaytoneOne-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;