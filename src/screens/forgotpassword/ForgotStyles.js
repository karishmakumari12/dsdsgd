import React from "react";
import {StyleSheet, View,Text } from "react-native";
const Styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#FFFFFF', 
        padding: 20 
    },
    forgotTxt:{
        color:"#101010",
        fontWeight:'600',
        fontSize:32,
        marginTop:20,
    },
    paragraphTxt:{
        fontSize:14,
        fontWeight:'500',
        color:"#878787",
        marginTop:10
    },
    inputField: {
        height: 60,
        width: "100%",
        borderWidth: 2,
        borderColor: "#EDEDED",
        marginTop: 10,
        borderRadius: 8,
        padding: 20,
      },
      EmailTxt: {
        fontWeight: "500",
        color: "#101010",
        marginTop: 30,
      },
      btnView: {
        height: 55,
        width: "100%",
        backgroundColor: "#FE8C00",
        borderRadius: 100,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
      },
      btnTxt: {
        fontSize: 14,
        fontWeight: "600",
        color: "#FFFFFF"
      },
})
export default Styles;

