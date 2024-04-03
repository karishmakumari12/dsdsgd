
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Styles = StyleSheet.create({
  card: {
    height:400,
    width:331,
    borderRadius:48,
    margin:30,
    backgroundColor:'orange',
    padding:20,
    // alignSelf:'center'
    // justifyContent:'flex-end'
    bottom:0
   
  },
  delicaciesTxt:{
    // alignSelf:'center',
    color:"#FFFFFF",
    fontSize:32,
    alignSelf:"center",
    fontWeight:'600',
  },
  restaurentPeraTxt:{
    color:'#FFFFFF',
    alignSelf:"center",
    fontSize:14,
  }

});
export default Styles;
