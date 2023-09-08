import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color } from "../GlobalStyles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const SignupPage = () => {

    const navigation = useNavigation();

    const handleLoginButtonPress = () => {
        navigation.navigate('LoginPage');
    };

    const [fontsLoaded] = useFonts({
        robotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
        robotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        robotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
        paytoneOneRegular: require('../assets/fonts/PaytoneOne-Regular.ttf'),
        dMSansRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.androidLarge66}>
            <View style={styles.rectangleParent}>
                <View style={[styles.groupChild, styles.groupLayout2]} />
                <View style={[styles.groupItem, styles.groupLayout2]} />
                <TouchableOpacity onPress={handleLoginButtonPress}>
                    <Text style={[styles.login, styles.loginTypo]}>Login</Text>
                </TouchableOpacity>
                <Text style={[styles.signup, styles.loginTypo]}>Signup</Text>
            </View>
            <View style={[styles.androidLarge66Child, styles.androidLayout]} />
            <View style={[styles.androidLarge66Item, styles.androidLayout]} />
            <View style={[styles.androidLarge66Inner, styles.androidLayout]} />
            <View style={[styles.rectangleView, styles.androidLayout]} />
            {/* <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-1171275853.png")}
            /> */}
            <TouchableOpacity onPress={handleLoginButtonPress}>
                <Text style={[styles.alreadyHaveAnContainer, styles.orTypo]}>
                    <Text style={styles.alreadyHaveAn}>Already have an account/</Text>
                    <Text style={styles.login1}> Login</Text>
                </Text>
            </TouchableOpacity>
            <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View style={[styles.groupInner, styles.groupLayout1]} />
                <Text style={[styles.firstName, styles.orTypo]}>First Name</Text>
            </View>
            <View style={[styles.rectangleContainer, styles.groupLayout1]}>
                <View style={[styles.groupInner, styles.groupLayout1]} />
                <Text style={[styles.firstName, styles.orTypo]}>Last Name</Text>
            </View>
            <Text style={[styles.enterYourEmail, styles.enterTypo]}>
                Enter Your Email address
            </Text>
            <Text style={[styles.enterYourMobile, styles.enterTypo]}>
                Enter Your Mobile number
            </Text>
            <Text style={[styles.enterYourPassword, styles.enterTypo]}>
                Enter Your Password
            </Text>
            <Text style={[styles.confirmYoursPassword, styles.enterTypo]}>
                Confirm Yours Password
            </Text>
            <View style={styles.orParent}>
                <Text style={[styles.or, styles.orTypo]}>OR</Text>
                <View style={[styles.lineView, styles.lineViewPosition]} />
                <View style={[styles.groupChild2, styles.lineViewPosition]} />
            </View>
            <Image
                style={[styles.freepikDnaInject443Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/images/DNALogo.png")}
            />
            <Text style={styles.careclouds}>CareClouds</Text>
            <Image
                style={[styles.freepikSparklesInject42Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/images/Shine.png")}
            />
            {/* <View style={[styles.groupView, styles.groupLayout]}>
                <View style={[styles.rectangleParent1, styles.groupLayout]}>
                    <View style={[styles.groupChild3, styles.groupLayout]} />
                    <Image
                        style={[styles.vectorIcon, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector.png")}
                    />
                </View>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    groupLayout2: {
        width: 150,
        top: 0,
        height: 50,
        position: "absolute",
        borderRadius: Border.br_xl,
    },
    loginTypo: {
        fontFamily: 'robotoBold',
        fontWeight: "700",
        top: 17,
        fontSize: FontSize.size_sm,
        position: "absolute",
    },
    androidLayout: {
        height: 40,
        width: 320,
        borderRadius: Border.br_5xs,
        borderWidth: 1,
        borderColor: Color.colorDarkcyan,
        borderStyle: "solid",
        left: 20,
        position: "absolute",
        backgroundColor: Color.white,
    },
    orTypo: {
        fontFamily: 'robotoRegular',
        textAlign: "left",
        position: "absolute",
    },
    groupLayout1: {
        width: 148,
        height: 40,
        position: "absolute",
    },
    enterTypo: {
        left: 28,
        color: Color.gray_100,
        fontFamily: 'robotoRegular',
        fontSize: FontSize.size_xs,
        textAlign: "left",
        position: "absolute",
    },
    lineViewPosition: {
        height: 1,
        borderTopWidth: 1,
        borderColor: Color.gray_100,
        top: 11,
        borderStyle: "solid",
        position: "absolute",
    },
    rectangleParent1Position: {
        top: 0,
        left: 0,
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    groupLayout: {
        width: 48,
        height: 48,
        position: "absolute",
    },
    groupChild: {
        borderWidth: 1,
        borderColor: Color.colorDarkcyan,
        borderStyle: "solid",
        backgroundColor: Color.white,
        left: 0,
    },
    groupItem: {
        left: 165,
        backgroundColor: Color.colorDarkcyan,
    },
    login: {
        left: 57,
        textAlign: "center",
        color: Color.colorDarkcyan,
    },
    signup: {
        left: 218,
        color: Color.white,
        textAlign: "left",
    },
    rectangleParent: {
        top: 237,
        width: 315,
        height: 50,
        left: 20,
        position: "absolute",
    },
    androidLarge66Child: {
        top: 366,
    },
    androidLarge66Item: {
        top: 422,
    },
    androidLarge66Inner: {
        top: 478,
    },
    rectangleView: {
        top: 534,
    },
    groupIcon: {
        left: 68,
        width: 224,
        height: 48,
        top: 635,
        position: "absolute",
    },
    alreadyHaveAn: {
        color: Color.gray_100,
    },
    login1: {
        color: Color.colorDarkcyan,
    },
    alreadyHaveAnContainer: {
        marginLeft: -92,
        top: 700,
        fontSize: FontSize.size_xs,
        fontFamily: 'robotoRegular',
        left: "50%",
    },
    groupInner: {
        borderRadius: Border.br_5xs,
        left: 0,
        top: 0,
        borderWidth: 1,
        borderColor: Color.colorDarkcyan,
        borderStyle: "solid",
        backgroundColor: Color.white,
    },
    firstName: {
        top: 12,
        left: 12,
        color: Color.gray_100,
        fontSize: FontSize.size_xs,
        fontFamily: 'robotoRegular',
    },
    rectangleGroup: {
        top: 313,
        width: 148,
        left: 20,
    },
    rectangleContainer: {
        left: 192,
        top: 313,
        width: 148,
    },
    enterYourEmail: {
        top: 378,
    },
    enterYourMobile: {
        top: 435,
    },
    enterYourPassword: {
        top: 491,
    },
    confirmYoursPassword: {
        top: 547,
    },
    or: {
        marginLeft: -8,
        letterSpacing: 0,
        lineHeight: 22,
        color: Color.gray_100,
        left: "50%",
        fontFamily: 'robotoRegular',
        fontSize: FontSize.size_sm,
        top: 0,
    },
    lineView: {
        width: 149,
        left: 0,
    },
    groupChild2: {
        left: 174,
        width: 147,
    },
    orParent: {
        marginLeft: -160,
        top: 597,
        height: 22,
        left: "50%",
        width: 320,
        position: "absolute",
    },
    time: {
        fontSize: 12,
        letterSpacing: 0.1,
        lineHeight: 17,
        fontWeight: "500",
        fontFamily: 'robotoMedium',
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
        width: 21,
        height: 21,
        display: "none",
        zIndex: 2,
        left: "50%",
        position: "absolute",
    },
    devicedeviceFrameComponents: {
        right: 0,
        height: 45,
        flexDirection: "row",
        paddingHorizontal: 21,
        paddingVertical: 9,
        alignItems: "flex-end",
        justifyContent: "space-between",
        left: 0,
        position: "absolute",
    },
    freepikDnaInject443Icon: {
        height: "25.31%",
        width: "37.5%",
        top: "3.75%",
        right: "0%",
        bottom: "70.95%",
        left: "62.5%",
    },
    careclouds: {
        top: 132,
        left: 25,
        fontSize: 48,
        fontFamily: 'paytoneOneRegular',
        color: "#7ae284",
        textAlign: "left",
        position: "absolute",
    },
    freepikSparklesInject42Icon: {
        height: "21.91%",
        width: "121.73%",
        top: "5.29%",
        right: "-21.73%",
        bottom: "72.79%",
        left: "0%",
    },
    groupChild3: {
        backgroundColor: "#a8dcd7",
        borderRadius: Border.br_5xs,
        left: 0,
        top: 0,
    },
    vectorIcon: {
        height: "50%",
        width: "40.63%",
        top: "25%",
        right: "30.21%",
        bottom: "25%",
        left: "29.17%",
    },
    rectangleParent1: {
        left: 0,
        top: 0,
    },
    groupView: {
        left: 156,
        top: 635,
        width: 48,
    },
    androidLarge66: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.white,
        borderRadius: Border.br_xl,
    },
});

export default SignupPage;
