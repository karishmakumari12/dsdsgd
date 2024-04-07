import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground, FlatList, Dimensions, StatusBar, SafeAreaView, View, Image, Text } from 'react-native';
import OnBoardCard from '../../components/OnBoardCard';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import { onBoardingData } from '../../constant/staticData';
import Onboarding from 'react-native-onboarding-swiper';
const OnBoarding1 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />


      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <ImageBackground
              style={{ height: "100%", width: '100%', justifyContent: 'center' }}
              source={require('../../assets/images/first_onboarding.png')
              }
              resizeMode='cover'>
              <View style={styles.card}>
                <Text style={styles.delicaciesTxt}>We serve incomparable delicacies</Text>
                <Text numberOfLines={3} style={styles.restaurentPeraTxt}>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</Text>
                <View style={[{ flexDirection: 'row', alignSelf: 'center', margin: 16 }]}>
                </View>

              </View>
            </ImageBackground>,
          },
          {
            backgroundColor: '#fff',
            image: <ImageBackground
              style={{ height: "100%", width: '100%', justifyContent: 'center' }}
              source={require('../../assets/images/second_onboarding_img.png')
              }
              resizeMode='cover'>
                <View style={styles.card}>
                <Text style={styles.delicaciesTxt}>We serve incomparable delicacies</Text>
                <Text numberOfLines={3} style={styles.restaurentPeraTxt}>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</Text>
                <View style={[{ flexDirection: 'row', alignSelf: 'center', margin: 16 }]}>
                </View>

              </View>
            </ImageBackground>,
          
          },
          {
            backgroundColor: '#fff',
            image: <ImageBackground
              style={{ height: "100%", width: '100%', justifyContent: 'center' }}
              source={require('../../assets/images/first_onboarding.png')
              }
              resizeMode='cover'>
                <View style={styles.card}>
                <Text style={styles.delicaciesTxt}>We serve incomparable delicacies</Text>
                <Text numberOfLines={3} style={styles.restaurentPeraTxt}>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</Text>
                <View style={[{ flexDirection: 'row', alignSelf: 'center', margin: 16 }]}>
                </View>

              </View>
            </ImageBackground>,
            
          },

        ]}
      />
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
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
  tabs: {
    alignSelf: "center",
    marginLeft: 6,
    marginEnd: 6
  },
  skipStyle: {
    color: 'white',
  },
  arrowStyle: {
    alignSelf: 'center',
    marginStart: 6
  }

});

export default OnBoarding1;
