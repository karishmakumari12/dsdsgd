import { StyleSheet,Dimensions } from "react-native";
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
 
  card: {
    height: height / 2,
    width: width / 1.2,
    borderRadius: 48,
    backgroundColor: '#FE8C00',
    padding: 20,
    alignSelf: 'center',
    position: 'absolute',
    margin: 30,
    bottom: 0
  },
  delicaciesTxt: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 32,
    alignSelf: "center",
    fontWeight: '600',
  },
  restaurentPeraTxt: {
    color: '#FFFFFF',
    textAlign: "center",
    alignSelf: "center",
    fontSize: 14,
  },
 
  indicator: {
    height: 6,
    width: 24,
    backgroundColor: '#C2C2C2',
    marginHorizontal: 3,
    borderRadius: 5,
  },


});

export default styles;