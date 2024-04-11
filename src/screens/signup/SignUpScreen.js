import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { useState } from 'react'
import Styles from "../login/LoginStyles";
import CheckBox from 'react-native-check-box';


const SignUp = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    //check box function
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={Styles.mainContainer}>
            {/* <Text style={Styles.loginParagraph}>Login to your {\n} account.</Text> */}
            <Text style={Styles.loginParagraph}>Create your new account</Text>
            <Text style={Styles.signUpTxt}>Create an account to start looking for the food you like</Text>
            <Text style={Styles.EmailTxt}>Email Address</Text>
            <View style={Styles.inputField}>
                <Text style={Styles.placeHolderTxt}>Enter Email</Text>
            </View>
            <Text style={Styles.EmailTxt}>User Name</Text>
            <View style={Styles.inputField}>
                <Text style={Styles.placeHolderTxt}>User Name</Text>
            </View>
            <Text style={Styles.EmailTxt}>Password</Text>
            <View style={[Styles.inputField, { flexDirection: "row", justifyContent: "space-between" }]}>

                <Text style={Styles.placeHolderTxt}>Password</Text>
                <Image source={require('../../assets/images/eye.png')} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <CheckBox
                    isChecked={isChecked}
                    onClick={handleCheckboxChange}
                    checkBoxColor="#FF5733"
                />
                <Text style={Styles.tearmTxt}> I Agree with and <Text style={[Styles.tearmTxt, { color: '#FE8C00' }]}> Terms of Service </Text><Text style={Styles.tearmTxt}>  and  </Text><Text style={[Styles.tearmTxt, { color: '#FE8C00' }]}>Privacy Policy</Text></Text>
            </View>

            {/* <Text style={Styles.forgotTxt}>Forgot password?</Text> */}
            <TouchableOpacity style={Styles.btnView} onPress={() => navigation.navigate('Login')}>
                <Text style={Styles.btnTxt}>Register</Text>


            </TouchableOpacity>
            <View style={Styles.signWithView}>
                <View style={Styles.horizontalLine} />
                <Text style={Styles.signWithTxt}>Or sign in with</Text>
                <View style={Styles.horizontalLine} />
            </View>
            <Image style={Styles.googleImg} source={require('../../assets/images/google.png')} />
            <View style={Styles.accountView}>
                <Text style={Styles.accountTxt}>Have an account? <Text style={Styles.registerTxt}>Sing in</Text></Text>

            </View>

        </View>
    )
}
export default SignUp;