import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import React from "react"
import Styles from "./ForgotStyles"
const ForgotPassword = ({navigation}) => {
    return (

        <View style={Styles.mainContainer}>
            <Text style={Styles.forgotTxt}>Forgot password?</Text>
            <Text numberOfLines={2} style={Styles.paragraphTxt}>Enter your email address and we’ll send you confirmation code to reset your password</Text>
            <Text style={Styles.EmailTxt}>Email Address</Text>
            <View style={Styles.inputField}>
                <Text style={Styles.placeHolderTxt}>Enter Email</Text>
            </View>
            <TouchableOpacity style={Styles.btnView} onPress={()=>navigation.navigate('Otp')}>
                <Text style={Styles.btnTxt}>Sign In</Text>


            </TouchableOpacity>
        </View>
    )
}
export default ForgotPassword