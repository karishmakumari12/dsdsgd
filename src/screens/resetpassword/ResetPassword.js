import { Text, View, Image,TextInput } from "react-native";
import { } from 'react'
import Styles from "./ResetPasswordStyles";
const ResetPassword = () => {
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.heading}>
                <View style={Styles.backCircle}>
                    <Image source={require('../../assets/images/backArrow.png')} />
                </View>
                <Text style={Styles.resetTxt}>Reset Password</Text>
                <View style={Styles.unVisibleView}></View>
            </View>
            <Text style={Styles.resetHeading}>Reset Password</Text>
            <Text style={Styles.ParagraphTxt}>Your new password must be different from the previously used password</Text>
            <Text style={Styles.passTxt}>New Password</Text>
            <View style={Styles.inputField}>
                <Text style={Styles.placeHolderTxt}>New Password</Text>
                <Image source={require('../../assets/images/eye.png')} />
            </View>
            <Text style={Styles.hintTxt}>Must be at least 8 character</Text>
            <Text style={Styles.passTxt}>Confirm Password</Text>
            <View style={Styles.inputField}>
                <Text style={Styles.placeHolderTxt}>Confirm Password</Text>
                <Image source={require('../../assets/images/eye.png')} />
            </View>
            <Text style={Styles.hintTxt}>Both password must match</Text>
            <View style={Styles.btnView}>
                <Text style={Styles.btnTxt}>Verify Account</Text>


            </View>
        </View>
    )
}
export default ResetPassword;