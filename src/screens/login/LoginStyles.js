
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const Styles = StyleSheet.create({
  mainContainer:{
    flex: 1, 
    backgroundColor: "white", 
    padding: 20 
  },

  loginParagraph: {
    fontSize: 32,
    color: "#101010",
    fontWeight: "600",
    marginTop: 20,
  

  },
  signUpTxt: {
    color: '#878787',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '500',
  },
  EmailTxt: {
    fontWeight: "500",
    color: "#101010",
    marginTop: 30,
  },
  input: {
    height: 60,
    width: "100%",
    borderWidth: 2,
    borderColor: "#EDEDED",
    marginTop: 10,
    borderRadius: 8,
    padding: 20,
  },
  placeHolderTxt:{
    fontWeight:"500",
    fontSize:14,
    color:"#878787",
  },
  forgotTxt: {
    fontSize: '500',
    fontSize: 14,
    alignSelf: "flex-end",
    color: "#FE8C00",
    marginTop: 20,
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
  horizontalLine: {
    height: 1, 
    width: 120, 
    backgroundColor: "#878787",
    alignSelf: "center"
  },
  signWithTxt:{
    alignSelf: "center", 
    marginHorizontal: 20 ,
  },
  googleImg:{
    alignSelf: 'center', 
    marginTop: 20 
  },
  accountView:{
    flexDirection: "row",
     alignSelf: "center", 
     marginTop: 20,
  },
  accountTxt:{
    color: "#101010",
     fontSize: 14, 
     fontWeight: "500" 
  },
  registerTxt:{
    color: '#FE8C00', 
    fontWeight: "500" 
  },
  signWithView:{
    flexDirection: "row", 
    marginTop: 20
  },
  tearmTxt:{
    fontSize:14,
    fontWeight:'500',
    color:"#101010",
  }

});
export default Styles;
