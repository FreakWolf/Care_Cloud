import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontSize, Border } from "../../GlobalStyles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const HomePage1 = () => {

    const navigation = useNavigation();

    const handleNextButtonPress = () => {
        navigation.navigate('HomePage2');
    };

    const handleSkipButtonPress = () => {
        navigation.navigate('LoginandSignup');
    };

    const [fontsLoaded] = useFonts({
        robotoRegular: require('../../assets/fonts/Roboto-Regular.ttf'),
        robotoMedium: require('../../assets/fonts/Roboto-Medium.ttf'),
        poetsenOne: require('../../assets/fonts/PoetsenOne-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.homepage1}>
            <LinearGradient
                style={styles.homepage1Child}
                locations={[0, 1]}
                colors={["#a8dcd7", "rgba(168, 220, 215, 0)"]}
            />
            <Text style={[styles.takeCareOf, styles.takeCareOfPosition]}>
                Take care of your health
            </Text>
            <Text
                style={[styles.preventionIsBetter, styles.takeCareOfPosition]}
            >{`Prevention is better than cure , take care 
of your family’s health right now`}</Text>
            <View style={styles.ellipseParent}>
                <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../../assets/images/ellipse-1784.png")}
                />
                <View style={[styles.frameItem, styles.frameItemPosition]} />
                <Image
                    style={styles.image1}
                    contentFit="cover"
                    source={require("../../assets/images/image1.png")}
                />
            </View>
            <TouchableOpacity onPress={handleSkipButtonPress}>
                <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextButtonPress}>
                <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                    <View style={[styles.groupChild, styles.groupChildLayout]} />
                    <Text style={[styles.next, styles.skipTypo1]}>Next</Text>
                </View>
            </TouchableOpacity>
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
        fontFamily: 'robotoMedium',
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
    homepage1Child: {
        top: 470,
        width: 360,
        height: 296,
        backgroundColor: "transparent",
        borderRadius: Border.br_5xs,
        left: 1,
        position: "absolute",
    },
    takeCareOf: {
        marginTop: 120,
        marginLeft: -136,
        fontSize: 24,
        fontFamily: 'poetsenOne',
        top: "50%",
    },
    preventionIsBetter: {
        marginLeft: -144,
        top: 550,
        fontSize: 16,
        fontFamily: 'robotoRegular',
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
    image1: {
        width: 298,
        height: 378,
        top: 0,
        left: 1,
        position: "absolute",
    },
    ellipseParent: {
        marginLeft: -149,
        top: 80,
        height: 365,
        width: 299,
        left: "50%",
        position: "absolute",
        overflow: "hidden",
    },
    skip: {
        top: 25,
        left: 300,
        fontSize: FontSize.size_sm,
        textAlign: "center",
        position: "absolute",
        fontFamily: 'robotoMedium',
        color: Color.gray_100,
        fontWeight: "500",
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
    homepage1: {
        borderRadius: 20,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
});

export default HomePage1;
