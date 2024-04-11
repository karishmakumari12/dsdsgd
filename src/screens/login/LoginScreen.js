import { View, Text, StatusBar, Image, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from 'react'
import Styles from "./LoginStyles";
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")

    useEffect(() => {
        GoogleSignin.configure();
    }, []);
    const signIn = async () => {
        console.log("efddjknkejn")
        try {
            const check = await GoogleSignin.hasPlayServices();
            console.log("=============>hasPlayServices", check)
            await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signIn();
            // it is console login user data email id user name
            console.log('INfo', userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log(error);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error);
            } else {
                // some other error happened
                console.log(error);
            }
        }
    };
    //email validation
    const emailValidation = () => {

    }
    //password validation
    const passwordValidation = () => {

    }
    return (
        <View style={Styles.mainContainer}>
            {/* <Text style={Styles.loginParagraph}>Login to your {\n} account.</Text> */}
            <Text style={Styles.loginParagraph}>Login to your account</Text>
            <Text style={Styles.signUpTxt}>Please sign in to your account</Text>
            <Text style={Styles.EmailTxt}>Email Address</Text>
            <TextInput
                style={Styles.input}
                placeholder="Email Address"
                placeholderTextColor={'grey'}
                onChangeText={txt => {
                    setEmail(txt);
                }}
            />
            <Text style={Styles.EmailTxt}>Password</Text>
            <View style={[Styles.inputField, { flexDirection: "row", justifyContent: "space-between" }]}>

                <Text style={Styles.placeHolderTxt}>Password</Text>
                <Image source={require('../../assets/images/eye.png')} />
            </View>
            <TextInput
                style={Styles.input}
                //   maxLength={10}
                //   keyboardType="numeric"
                //   style={{height:40,width:'100%',backgroundColor:'pink'}}
                //   onFocus={() => setCreateBtn(!createBtn)}
                placeholder="Email Address"
                placeholderTextColor={'grey'}
                onChangeText={txt => {
                    setEmail(txt);
                }}
            />
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
            <TouchableOpacity onPress={() => {
                signIn();
            }}>
                <Image style={Styles.googleImg} source={require('../../assets/images/google.png')} />
            </TouchableOpacity>
            <View style={Styles.accountView}>

                <Text style={Styles.accountTxt}>Don't have an account? <Text style={Styles.resendTxt}>Register</Text></Text>

            </View>

        </View>
    )
}
export default LoginScreen;