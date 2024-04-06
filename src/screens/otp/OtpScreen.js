import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { } from 'react'
import Styles from "./OtpStyles"
const Otp = ({navigation}) => {
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.heading}>
                <TouchableOpacity style={Styles.backCircle} onPress={()=>navigation.navigate('ForgotPassword')}>
                    <Image source={require('../../assets/images/backArrow.png')} />
                </TouchableOpacity>
                <Text style={Styles.resetTxt}>Reset Password</Text>
                <View style={Styles.unVisibleView}></View>
            </View>
            <Text style={Styles.verifieTxt}>Email verification</Text>
            <Text style={Styles.ParagraphTxt}>Enter the verification code we send you on:
                Alberts******@gmail.com|</Text>
            <View style={Styles.otpView}>
                <TextInput style={Styles.otpField} />
                <TextInput style={Styles.otpField} />
                <TextInput style={Styles.otpField} />
                <TextInput style={Styles.otpField} />
            </View>
            <View style={Styles.CodeView}>
                <Text style={Styles.receiveTxt}>Didn’t receive code? <Text style={Styles.resendTxt}>Resend</Text></Text>
                
            </View>
            <View style={Styles.timerView}>
                <Image source={require('../../assets/images/timer.png')} />
                <Text> 09.00 </Text>
            </View>
            <TouchableOpacity style={Styles.btnView} onPress={()=>navigation.navigate('ResetPassword')}>
                <Text style={Styles.btnTxt}>Verify Account</Text>


            </TouchableOpacity>
        </View>
    )
}
export default Otp;