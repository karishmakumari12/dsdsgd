import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { } from 'react'
import Styles from "./LoginStyles";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={Styles.mainContainer}>
            {/* <Text style={Styles.loginParagraph}>Login to your {\n} account.</Text> */}
            <Text style={Styles.loginParagraph}>Login to your account</Text>
            <Text style={Styles.signUpTxt}>Please sign in to your account</Text>
            <Text style={Styles.EmailTxt}>Email Address</Text>
            <View style={Styles.inputField}>
                <Text style={Styles.placeHolderTxt}>Enter Email</Text>
            </View>
            <Text style={Styles.EmailTxt}>Password</Text>
            <View style={[Styles.inputField, { flexDirection: "row", justifyContent: "space-between" }]}>

                <Text style={Styles.placeHolderTxt}>Password</Text>
                <Image source={require('../../assets/images/eye.png')} />
            </View>
            <TouchableOpacity onPress={() =>
                navigation.navigate('ForgotPassword')
            }>
                <Text style={Styles.forgotTxt}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={Styles.btnView}>
                <Text style={Styles.btnTxt}>Sign In</Text>


            </View>
            <View style={Styles.signWithView}>
                <View style={Styles.horizontalLine} />
                <Text style={Styles.signWithTxt}>Or sign in with</Text>
                <View style={Styles.horizontalLine} />
            </View>
            <Image style={Styles.googleImg} source={require('../../assets/images/google.png')} />
            <View style={Styles.accountView}>
                <Text style={Styles.accountTxt}>Don't have an account? <Text style={Styles.resendTxt}>Register</Text></Text>

            </View>

        </View>
    )
}
export default LoginScreen;