
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const Styles = StyleSheet.create({
  
  card: {
    height:height/2,
    width:width/1.2,
    borderRadius:48,
    backgroundColor:'#FE8C00',
    padding:20,
    alignSelf:'center',
    position:'absolute',
    margin:30,
    bottom:0
  },
  delicaciesTxt:{
    textAlign:"center",
    color:"#FFFFFF",
    fontSize:32,
    alignSelf:"center",
    fontWeight:'600',
  },
  restaurentPeraTxt:{
    color:'#FFFFFF',
    textAlign:"center",
    alignSelf:"center",
    fontSize:14,
  },
  tabs:{
    alignSelf:"center",
    marginLeft:6,
    marginEnd:6
  },
  skipStyle:{
    color:'white',
  },
  arrowStyle:{
   alignSelf:'center',
   marginStart:6
  }

});
export default Styles;
