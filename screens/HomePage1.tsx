import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useFonts } from "expo-font";

const HomePage1 = () => {

    const [fontsLoaded, error] = useFonts({
        robotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
        poetsenOne: require('../assets/fonts/PaytoneOne-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.androidLarge67}>
            <LinearGradient
                style={styles.androidLarge67Child}
                locations={[0, 1]}
                colors={["#a8dcd7", "rgba(168, 220, 215, 0)"]}
            />
            <Text style={[styles.takeCareOf, styles.takeCareOfPosition]}>
                Take care of your health
            </Text>
            <Text
                style={[styles.preventionIsBetter, styles.takeCareOfPosition]}
            >{`Prevention is better than cure , take care of 
your family’s health right now`}</Text>
            <View style={styles.ellipseParent}>
                <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/images/ellipse-1784.png")}
                />
                <View style={[styles.frameItem, styles.frameItemPosition]} />
                <Image
                    style={styles.image149Icon}
                    contentFit="cover"
                    source={require("../assets/images/image-149.png")}
                />
            </View>
            <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.next, styles.skipTypo1]}>Next</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    takeCareOfPosition: {
        textAlign: "center",
        color: Color.gray_100,
        left: "50%",
        position: "absolute",
    },
    frameItemPosition: {
        display: "none",
        position: "absolute",
    },
    skipTypo: {
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
    },
    groupChildLayout: {
        height: 30,
        width: 84,
        position: "absolute",
    },
    skipTypo1: {
        fontSize: FontSize.size_sm,
        textAlign: "center",
        position: "absolute",
    },
    framePosition: {
        left: 0,
        top: 0,
    },
    androidLarge67Child: {
        top: 504,
        width: 360,
        height: 296,
        backgroundColor: "transparent",
        borderRadius: Border.br_5xs,
        left: 1,
        position: "absolute",
    },
    takeCareOf: {
        marginTop: 144,
        marginLeft: -136,
        fontSize: 24,
        fontFamily: FontFamily.poiretOne,
        top: "50%",
    },
    preventionIsBetter: {
        marginLeft: -144,
        top: 596,
        fontSize: 16,
        fontFamily: FontFamily.robotoRegular,
    },
    frameChild: {
        marginTop: -84.5,
        marginLeft: -139.5,
        width: 280,
        height: 280,
        left: "50%",
        top: "50%",
        position: "absolute",
    },
    frameItem: {
        borderRadius: 7,
        height: 412,
        left: 0,
        top: 0,
        width: 299,
        backgroundColor: Color.white,
    },
    image149Icon: {
        width: 298,
        height: 378,
        top: 0,
        left: 1,
        position: "absolute",
    },
    ellipseParent: {
        marginLeft: -149,
        top: 115,
        height: 365,
        width: 299,
        left: "50%",
        position: "absolute",
        overflow: "hidden",
    },
    skip: {
        top: 63,
        left: 312,
        fontSize: FontSize.size_sm,
        textAlign: "center",
        position: "absolute",
        fontFamily: FontFamily.robotoMedium,
        color: Color.gray_100,
        fontWeight: "500",
    },
    androidLarge67Item: {
        top: 673,
        left: 155,
        width: 39,
        height: 8,
        position: "absolute",
    },
    groupChild: {
        backgroundColor: "#199a8e",
        left: 0,
        top: 0,
        borderRadius: Border.br_5xs,
    },
    next: {
        top: 7,
        left: 28,
        color: Color.white,
        fontFamily: FontFamily.robotoRegular,
    },
    rectangleParent: {
        top: 705,
        left: 257,
    },
    time: {
        fontSize: 12,
        letterSpacing: 0.1,
        lineHeight: 17,
        color: "#000",
        textAlign: "left",
        zIndex: 0,
    },
    rightIcons: {
        width: 40,
        height: 15,
        zIndex: 1,
    },
    cameraCutoutIcon: {
        marginLeft: -10.48,
        top: 16,
        width: 21,
        height: 21,
        zIndex: 2,
        left: "50%",
    },
    devicedeviceFrameComponents: {
        right: 0,
        height: 45,
        flexDirection: "row",
        paddingHorizontal: 21,
        paddingVertical: 9,
        alignItems: "flex-end",
        justifyContent: "space-between",
        position: "absolute",
    },
    androidLarge67: {
        borderRadius: 20,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
});

export default HomePage1;
