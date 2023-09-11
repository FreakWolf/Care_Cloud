import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontSize, Border } from "../../GlobalStyles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const HomePage3 = () => {

    const navigation = useNavigation();

    const handleNextButtonPress = () => {
        navigation.navigate('LoginandSignup');
    };

    const handleSkipButtonPress = () => {
        navigation.navigate('LoginandSignup');
    };

    const [fontsLoaded] = useFonts({
        robotoRegular: require('../../assets/fonts/Roboto-Regular.ttf'),
        robotoMedium: require('../../assets/fonts/Roboto-Medium.ttf'),
        robotoBold: require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.homepage3}>
            <LinearGradient
                style={styles.homepage3Child}
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
                    style={[styles.image3, styles.framePosition]}
                    contentFit="cover"
                    source={require("../../assets/images/image3.png")}
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
    framePosition: {
        left: 0,
        top: 0,
    },
    skipTypo: {
        top: 50,
        left: 300,
        fontWeight: "500",
        fontFamily: 'robotoMedium',
        fontSize: FontSize.size_sm,
        textAlign: "center",
        color: Color.gray,
        position: "absolute",
    },
    groupChildLayout: {
        height: 30,
        width: 84,
        position: "absolute",
    },
    skipTypo1: {
        fontFamily: 'robotoRegular',
        fontSize: FontSize.size_sm,
        textAlign: "center",
        position: "absolute",
    },
    homepage3Child: {
        top: 510,
        left: 1,
        width: 360,
        height: 296,
        backgroundColor: "transparent",
        borderRadius: Border.br_5xs,
        position: "absolute",
    },
    takeCareOf: {
        marginTop: 120,
        marginLeft: -130,
        fontSize: 24,
        fontWeight: "700",
        fontFamily: 'robotoBold',
        top: "52%",
    },
    preventionIsBetter: {
        marginLeft: -144,
        top: 580,
        fontSize: 16,
        fontFamily: 'robotoRegular',
    },
    frameChild: {
        marginTop: -97.5,
        marginLeft: -140.5,
        width: 266,
        height: 266,
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
    image3: {
        width: 300,
        height: 400,
        position: "absolute",
    },
    ellipseParent: {
        marginLeft: -149,
        top: 120,
        height: 365,
        width: 299,
        left: "50%",
        position: "absolute",
        overflow: "hidden",
    },
    skip: {
        top: 50,
        left: 300,
        fontSize: FontSize.size_sm,
        textAlign: "center",
        position: "absolute",
        color: Color.gray_100,
        fontFamily: 'robotoMedium',
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
    homepage3: {
        borderRadius: 20,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
});

export default HomePage3;
