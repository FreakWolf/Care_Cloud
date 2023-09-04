import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, Border, Color } from "../GlobalStyles";
import { useFonts } from "expo-font";

const HomePage2 = () => {

    const [fontsLoaded] = useFonts({
        robotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
        robotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        robotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.homepage2}>
            <LinearGradient
                style={styles.homepage2Child}
                locations={[0, 1]}
                colors={["#a8dcd7", "rgba(168, 220, 215, 0)"]}
            />
            <Text style={styles.healthTracking}>Health Tracking</Text>
            <Text
                style={[styles.monitorYourVital, styles.nextTypo]}
            >{`Monitor your vital signs and track your 
progress over time`}</Text>
            <View style={[styles.ellipseParent, styles.frameItemLayout]}>
                <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/images/ellipse-1784.png")}
                />
                <Image
                    style={[styles.image2, styles.frameItemPosition]}
                    contentFit="cover"
                    source={require("../assets/images/image2.png")}
                />
                <View style={[styles.frameItem, styles.frameItemPosition]} />
            </View>
            <Text style={styles.skip}>Skip</Text>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.next, styles.nextTypo]}>Next</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    nextTypo: {
        fontFamily: 'robotoRegular',
        fontSize: FontSize.size_sm,
        textAlign: "center",
        position: "absolute",
    },
    frameItemLayout: {
        width: 299,
        position: "absolute",
    },
    frameItemPosition: {
        left: 0,
        top: 0,
    },
    groupChildLayout: {
        height: 30,
        width: 84,
        position: "absolute",
    },
    homepage2Child: {
        top: 470,
        left: 1,
        width: 360,
        height: 296,
        backgroundColor: "transparent",
        borderRadius: Border.br_5xs,
        position: "absolute",
    },
    healthTracking: {
        marginTop: 120,
        marginLeft: -71,
        fontSize: 20,
        fontWeight: "700",
        fontFamily: 'robotoBold',
        textAlign: "center",
        color: Color.gray,
        left: "50%",
        top: "50%",
        position: "absolute",
    },
    monitorYourVital: {
        marginLeft: -120,
        top: 550,
        color: Color.gray,
        fontSize: 16,
        fontFamily: 'robotoRegular',
        left: "50%",
    },
    frameChild: {
        marginTop: -104.5,
        marginLeft: -149.5,
        width: 300,
        height: 400,
        left: "50%",
        top: "50%",
        position: "absolute",
    },
    image2: {
        width: 300,
        height: 411,
        position: "absolute",
    },
    frameItem: {
        borderRadius: 7,
        height: 412,
        display: "none",
        width: 299,
        position: "absolute",
        backgroundColor: Color.white,
    },
    ellipseParent: {
        marginLeft: -149,
        top: 80,
        height: 365,
        left: "50%",
        overflow: "hidden",
    },
    skip: {
        top: 25,
        left: 300,
        fontWeight: "500",
        fontFamily: 'robotoMedium',
        fontSize: FontSize.size_sm,
        textAlign: "center",
        color: Color.gray,
        position: "absolute",
    },
    groupChild: {
        backgroundColor: "#199a8e",
        left: 0,
        top: 0,
        borderRadius: Border.br_5xs,
    },
    next: {
        top: 6,
        left: 28,
        color: Color.white,
        fontFamily: 'robotoRegular',
    },
    rectangleParent: {
        top: 650,
        left: 250,
    },
    homepage2: {
        borderRadius: 20,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
});

export default HomePage2;
