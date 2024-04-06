import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
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
    resetHeading: {
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
    passTxt: {
        fontWeight: "500",
        color: "#101010",
        marginTop: 30,
    },
    inputField: {
        height: 60,
        width: "100%",
        borderWidth: 2,
        borderColor: "#EDEDED",
        marginTop: 10,
        borderRadius: 8,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    placeHolderTxt: {
        fontWeight: "500",
        fontSize: 14,
        color: "#878787",
    },
    hintTxt: {
        marginTop: 5,
        color: '#878787',
        fontWeight: '500',
        fontSize: 14
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