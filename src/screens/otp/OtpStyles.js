import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    heading: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 20,
    },

    backCircle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: "#EAEAEA",
        borderWidth: 1.5,
        justifyContent: "center",
        alignItems: 'center',
    },
    unVisibleView: {
        height: 40,
        width: 40,

    },
    resetTxt: {
        color: '#101010',
        fontWeight: '600',
        fontSize: 16,
        alignSelf: 'center'

    },
    verifieTxt: {
        color: "#101010",
        fontSize: 32,
        fontWeight: '600',
        marginTop: 20

    },
    ParagraphTxt: {
        fontWeight: '500',
        fontSize: 14,
        color: "#878787",
        marginTop: 20,
    },
    otpView: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',

    },
    otpField: {
        height: 75,
        width: 75,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: "#EAEAEA",
        justifyContent: 'center',
        textAlign:'center'
    },
    CodeView:{
        flexDirection: "row",
         alignSelf: "center", 
         marginTop: 20,
      },
      receiveTxt:{
        color: "#101010",
         fontSize: 14, 
         fontWeight: "400" 
      },
      resendTxt:{
        color: '#FE8C00', 
        fontWeight: "400" ,
        fontSize: 14, 
      },
      timerView:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:20,
      },
      btnView: {
        height: 55,
        width: "100%",
        backgroundColor: "#FE8C00",
        borderRadius: 100,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute', bottom: 0,
        alignSelf: 'center',
        marginBottom:20,
    },
    btnTxt: {
        fontSize: 14,
        fontWeight: "600",
        color: "#FFFFFF"
    },

})
export default Styles;