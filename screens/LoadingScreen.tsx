import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily } from "../GlobalStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingscreen}>
      <Image
        style={[styles.DNAlogo, styles.IconLayout]}
        source={require("../assets/images/DNALogo.png")}
      />
      <Text style={styles.careclouds}>Care Clouds</Text>
      <Image
        style={[styles.Shinelogo, styles.IconLayout]}
        source={require("../assets/images/Shine.png")}
      />
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
  DNAlogo: {
    height: "25.54%",
    width: "28.89%",
    top: "43.12%",
    right: "0%",
    bottom: "31.33%",
    left: "71.11%",
  },
  careclouds: {
    top: 435,
    left: 39,
    fontSize: 48,
    fontFamily: FontFamily.paytoneOneRegular,
    color: "#7ae284",
    textAlign: "left",
    position: "absolute",
  },
  Shinelogo: {
    height: "22.04%",
    width: "122.47%",
    top: "43.13%",
    right: "-22.47%",
    bottom: "34.84%",
    left: "0%",
  },
  time: {
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: "#000",
    zIndex: 0,
    textAlign: "left",
  },
  rightIcons: {
    width: 40,
    height: 15,
    zIndex: 1,
  },
  cameraCutoutIcon: {
    marginLeft: -10.48,
    top: 16,
    left: "50%",
    width: 21,
    height: 21,
    display: "none",
    zIndex: 2,
    position: "absolute",
  },
  devicedeviceFrameComponents: {
    top: 0,
    right: 0,
    left: 0,
    height: 45,
    flexDirection: "row",
    paddingHorizontal: 21,
    paddingVertical: 9,
    alignItems: "flex-end",
    justifyContent: "space-between",
    position: "absolute",
  },
  loadingscreen: {
    borderRadius: 20,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoadingScreen;
