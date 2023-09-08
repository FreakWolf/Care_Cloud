import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize } from "../GlobalStyles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {

    const navigation = useNavigation();


    const handleSignupButtonPress = () => {
        navigation.navigate('SignupPage');
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
        <View style={styles.loginpage}>
            <View style={styles.rectangleParent}>
                <View style={[styles.groupChild, styles.groupLayout1]} />
                <View style={[styles.groupItem, styles.itemBorder]} />
                <Text style={[styles.login, styles.loginTypo]}>Login</Text>
                <TouchableOpacity onPress={handleSignupButtonPress}>
                    <Text style={styles.signup}>Signup</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.emailAddress, styles.orTypo]}>
                Email Address / Mobile No
            </Text>
            <View style={[styles.loginpageChild, styles.groupLayout]} />
            <Text style={[styles.verify, styles.verifyPosition]}>Verify</Text>
            <Text style={[styles.emailAddress1, styles.verifyPosition]}>
                Email Address / Mobile No
            </Text>
            <Text style={[styles.enterYourPassword, styles.orPosition]}>
                Enter your Password
            </Text>
            <View style={[styles.loginpageItem, styles.groupLayout]} />
            <Text style={styles.forgotPassword}>Forgot password ?</Text>
            <Text style={styles.enterPassword}>Enter password</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupInner, styles.groupLayout]} />
                <Text style={[styles.logIn, styles.loginTypo]}>Log In</Text>
            </View>
            <View style={[styles.orParent, styles.orPosition]}>
                <Text style={[styles.or, styles.orPosition]}>OR</Text>
                <View style={[styles.lineView, styles.lineViewPosition]} />
                <View style={[styles.groupChild1, styles.lineViewPosition]} />
            </View>
            {/* <Image
                style={styles.loginpageInner}
                contentFit="cover"
                source={require("../assets/group-1171275853.png")}
            /> */}
            <TouchableOpacity onPress={handleSignupButtonPress}>
                <Text style={[styles.newToCarecloudssignContainer, styles.orPosition]}>
                    <Text style={styles.newToCareclouds}>New to CareClouds/</Text>
                    <Text style={styles.signUp}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
            <Image
                style={[styles.freepikDnaInject443Icon, styles.freepikIconLayout]}
                contentFit="cover"
                source={require("../assets/images/DNALogo.png")}
            />
            <Text style={styles.careclouds}>CareClouds</Text>
            <Image
                style={[styles.freepikSparklesInject42Icon, styles.freepikIconLayout]}
                contentFit="cover"
                source={require("../assets/images/Shine.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    groupLayout1: {
        width: 150,
        top: 0,
        height: 50,
        position: "absolute",
        borderRadius: Border.br_xl,
    },
    itemBorder: {
        borderWidth: 1,
        borderColor: Color.colorDarkcyan,
        borderStyle: "solid",
        backgroundColor: Color.white,
    },
    loginTypo: {
        color: Color.white,
        textAlign: "center",
        fontSize: FontSize.size_sm,
        position: "absolute",
    },
    orTypo: {
        lineHeight: 22,
        letterSpacing: 0,
        color: Color.gray_100,
        textAlign: "left",
        fontFamily: 'robotoRegular',
        fontSize: FontSize.size_sm,
    },
    groupLayout: {
        height: 40,
        width: 320,
        position: "absolute",
    },
    verifyPosition: {
        top: 381,
        fontSize: FontSize.size_xs,
        color: Color.gray_100,
        fontFamily: 'robotoRegular',
        position: "absolute",
    },
    orPosition: {
        left: "50%",
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
    freepikIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    groupChild: {
        backgroundColor: Color.colorDarkcyan,
        left: 0,
    },
    groupItem: {
        left: 165,
        width: 150,
        top: 0,
        height: 50,
        position: "absolute",
        borderRadius: Border.br_xl,
    },
    login: {
        left: 58,
        textAlign: "center",
        fontFamily: 'robotoRegular',
        top: 17,
        color: Color.white,
    },
    signup: {
        left: 219,
        textAlign: "left",
        color: Color.colorDarkcyan,
        fontFamily: 'robotoRegular',
        fontSize: FontSize.size_sm,
        top: 17,
        position: "absolute",
    },
    rectangleParent: {
        top: 247,
        width: 315,
        height: 50,
        left: 20,
        position: "absolute",
    },
    emailAddress: {
        top: 339,
        color: Color.gray_100,
        left: 20,
        position: "absolute",
    },
    loginpageChild: {
        top: 369,
        borderRadius: Border.br_5xs,
        height: 40,
        borderWidth: 1,
        borderColor: Color.colorDarkcyan,
        borderStyle: "solid",
        backgroundColor: Color.white,
        left: 20,
    },
    verify: {
        left: 290,
        fontSize: FontSize.size_xs,
        textAlign: "center",
    },
    emailAddress1: {
        left: 24,
        fontSize: FontSize.size_xs,
        textAlign: "left",
    },
    enterYourPassword: {
        top: 425,
        marginLeft: -160,
        left: "50%",
        color: Color.gray_100,
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: "left",
        fontFamily: 'robotoRegular',
        fontSize: FontSize.size_sm,
    },
    loginpageItem: {
        top: 455,
        borderRadius: Border.br_5xs,
        height: 40,
        borderWidth: 1,
        borderColor: Color.colorDarkcyan,
        borderStyle: "solid",
        backgroundColor: Color.white,
        left: 20,
    },
    forgotPassword: {
        top: 503,
        left: 241,
        textAlign: "right",
        fontSize: FontSize.size_xs,
        color: Color.gray_100,
        fontFamily: 'robotoRegular',
        position: "absolute",
    },
    enterPassword: {
        top: 467,
        left: 28,
        fontSize: FontSize.size_xs,
        color: Color.gray_100,
        textAlign: "left",
        fontFamily: 'robotoRegular',
        position: "absolute",
    },
    groupInner: {
        borderRadius: Border.br_5xs,
        height: 40,
        backgroundColor: Color.colorDarkcyan,
        left: 0,
        top: 0,
    },
    logIn: {
        top: 12,
        left: 141,
        fontWeight: "700",
        fontFamily: 'robotoBold',
        textAlign: "center",
    },
    rectangleGroup: {
        top: 547,
        left: 20,
    },
    or: {
        marginLeft: -8,
        color: Color.gray_100,
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: "left",
        fontFamily: 'robotoRegular',
        fontSize: FontSize.size_sm,
        top: 0,
    },
    lineView: {
        width: 149,
        left: 0,
    },
    groupChild1: {
        left: 174,
        width: 147,
    },
    orParent: {
        top: 608,
        height: 22,
        marginLeft: -160,
        left: "50%",
        width: 320,
    },
    loginpageInner: {
        top: 646,
        left: 68,
        width: 224,
        height: 48,
        position: "absolute",
    },
    newToCareclouds: {
        color: Color.gray_100,
    },
    signUp: {
        color: Color.colorDarkcyan,
    },
    newToCarecloudssignContainer: {
        marginLeft: -77,
        top: 710,
        fontFamily: 'dMSansRegular',
        fontSize: FontSize.size_xs,
        textAlign: "center",
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
        top: 0,
        position: "absolute",
    },
    loginpage: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.white,
        borderRadius: Border.br_xl,
    },
});

export default LoginPage;
