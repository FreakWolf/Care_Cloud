import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Color, Border, FontSize } from "../GlobalStyles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const LoginandSignup = () => {

  const navigation = useNavigation();

  const handleLoginButtonPress = () => {
    navigation.navigate('LoginPage');
  };

  const handleSignupButtonPress = () => {
    navigation.navigate('SignupPage');
  };

  const [fontsLoaded] = useFonts({
    robotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    robotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    paytoneOneRegular: require('../assets/fonts/PaytoneOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.loginandsignup}>
      <Image
        style={[styles.DNAlogo, styles.IconLayout]}
        contentFit="cover"
        source={require("../assets/images/DNALogo.png")}
      />
      <Text style={styles.careclouds}>CareClouds</Text>
      <Image
        style={[styles.Shinelogo, styles.IconLayout]}
        contentFit="cover"
        source={require("../assets/images/Shine.png")}
      />
      <View>
        <TouchableOpacity onPress={handleLoginButtonPress}>
          <View style={[styles.loginChild, styles.androidShadowBoxLogin]} />
          <View style={[styles.loginChild, styles.androidShadowBoxLogin]} />
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleSignupButtonPress}>
          <View style={[styles.signupChild, styles.androidShadowBoxignup]} />
          <View style={[styles.signupChild, styles.androidShadowBoxignup]} />
          <Text style={[styles.signup, styles.signupTypo]}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidShadowBoxLogin: {
    height: 50,
    width: 150,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkcyan,
    top: 600,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  androidShadowBoxignup: {
    height: 50,
    width: 150,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkcyan,
    top: 600,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  loginTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: 'robotoRegular',
    fontSize: FontSize.size_sm,
    top: 617,
    position: "absolute",
  },
  signupTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: 'robotoRegular',
    fontSize: FontSize.size_sm,
    top: 617,
    position: "absolute",
  },
  DNAlogo: {
    height: "25.54%",
    width: "28.89%",
    top: "40%",
    right: "0%",
    bottom: "31.33%",
    left: "71.11%",
  },
  careclouds: {
    top: 410,
    left: 39,
    fontSize: 48,
    fontFamily: 'paytoneOneRegular',
    color: "#7ae284",
    textAlign: "left",
    position: "absolute",
  },
  Shinelogo: {
    height: "22.04%",
    width: "122.47%",
    top: "40%",
    right: "-22.47%",
    bottom: "34.84%",
    left: "0%",
  },
  loginChild: {
    left: 22,
  },
  signupChild: {
    right: 22,
  },
  loginItem: {
    left: 187,
  },
  login: {
    left: 80,
  },
  signup: {
    left: 241,
  },
  loginandsignup: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },

});

export default LoginandSignup;
