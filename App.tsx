import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import LoadingScreen from './screens/home/LoadingScreen';
import HomePage1 from './screens/home/HomePage1';
import HomePage2 from './screens/home/HomePage2';
import HomePage3 from './screens/home/HomePage3';
import LoginandSignup from './screens/Login&Signup';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import ForgotPassEmail from './screens/forgot/ForgotPassEmail';
import ForgotPassMobile from './screens/forgot/ForgotPassMobile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
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
        <Stack.Screen
          name="HomePage2"
          component={HomePage2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage3"
          component={HomePage3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginandSignup"
          component={LoginandSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassEmail"
          component={ForgotPassEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassMobile"
          component={ForgotPassMobile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
