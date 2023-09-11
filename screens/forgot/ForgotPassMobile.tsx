import * as React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { FontSize, Color, Border } from "../../GlobalStyles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const ForgotPassMobile = () => {

    const navigation = useNavigation();
    const [phone, setPhone] = React.useState("");

    const handleForgotpassEmailPress = () => {
        navigation.navigate('ForgotPassEmail');
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
        <View style={styles.forgotpass}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
            <Text
                style={styles.enterYourEmail}
            >{`Enter your email or your phone number, we
will send you confirmation code `}</Text>
            <View style={[styles.forgotpassChild, styles.childLayout]} />
            <View style={[styles.forgotpassItem, styles.childLayout]} />
            <View style={styles.forgotpassInner} />
            <TouchableOpacity onPress={handleForgotpassEmailPress}>
                <Text style={[styles.email, styles.emailTypo]}>Email</Text>
            </TouchableOpacity>
            <Text style={[styles.phoneNumber, styles.emailTypo]}>Phone Number</Text>
            <TextInput
                style={[styles.enterYourEmail1, styles.emailTypo]}
                placeholder="Enter Your Phone Number"
                value={phone}
                onChangeText={setPhone} />
            <View style={[styles.rectangleParent, styles.childLayout]}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Text style={styles.sendCode}>Send code</Text>
            </View>
            <View
                style={[styles.devicedeviceFrameComponents, styles.groupChildPosition]}
            >
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    childLayout: {
        height: 40,
        width: 320,
    },
    emailTypo: {
        fontSize: FontSize.size_xs,
        fontFamily: 'robotoRegular',
        textAlign: "left",
        color: Color.gray_100,
        position: "absolute",
    },
    groupChildPosition: {
        left: 0,
        top: 0,
        position: "absolute",
    },
    forgotPassword: {
        top: 245,
        fontSize: 24,
        lineHeight: 24,
        textAlign: "left",
        color: Color.gray_100,
        left: 20,
        fontFamily: 'robotoBold',
        fontWeight: "700",
        position: "absolute",
    },
    enterYourEmail: {
        top: 295,
        fontSize: 16,
        fontFamily: 'robotoRegular',
        textAlign: "left",
        color: Color.gray_100,
        left: 20,
        position: "absolute",
    },
    forgotpassChild: {
        top: 348,
        borderWidth: 1,
        borderColor: Color.colorDarkcyan,
        borderStyle: "solid",
        width: 320,
        borderRadius: Border.br_5xs,
        left: 15,
        position: "absolute",
        backgroundColor: Color.white,
    },
    forgotpassItem: {
        top: 416,
        borderWidth: 1,
        borderColor: Color.colorDarkcyan,
        borderStyle: "solid",
        width: 320,
        borderRadius: Border.br_5xs,
        left: 15,
        position: "absolute",
        backgroundColor: Color.white,
    },
    forgotpassInner: {
        top: 354,
        backgroundColor: "#a8dcd7",
        width: 100,
        height: 28,
        right: 40,
        borderRadius: Border.br_5xs,
        position: "absolute",
    },
    email: {
        left: 50,
        top: 358,
        fontSize: FontSize.size_xs,
    },
    phoneNumber: {
        left: 230,
        top: 358,
        fontSize: FontSize.size_xs,
    },
    enterYourEmail1: {
        top: 423,
        left: 31,
        width: 275,
    },
    groupChild: {
        backgroundColor: Color.colorDarkcyan,
        height: 40,
        width: 320,
        borderRadius: Border.br_5xs,
    },
    sendCode: {
        top: 12,
        left: 127,
        fontSize: FontSize.size_sm,
        color: Color.white,
        textAlign: "center",
        fontFamily: 'robotoBold',
        fontWeight: "700",
        position: "absolute",
    },
    rectangleParent: {
        top: 488,
        left: 15,
        width: 320,
        position: "absolute",
    },
    forgotpass: {
        borderRadius: 20,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
});

export default ForgotPassMobile;
