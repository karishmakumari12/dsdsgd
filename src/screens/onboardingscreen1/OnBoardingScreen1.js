import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground, FlatList, Dimensions, StatusBar, SafeAreaView, View, Image, Text } from 'react-native';
import OnBoardCard from '../../components/OnBoardCard';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import { onBoardingData } from '../../constant/staticData';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './onboardingStyle';

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

export default OnBoarding1;
