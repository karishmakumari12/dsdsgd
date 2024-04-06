import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground, FlatList, Dimensions, StatusBar, SafeAreaView, View } from 'react-native';
import OnBoardCard from '../../components/OnBoardCard';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import { onBoardingData } from '../../constant/staticData';
const OnBoarding1 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
     
      {/* <ImageBackground
        style={styles.img}
        source={require('../../assets/images/first_onboarding.png')
        }
        resizeMode='cover'> */}
        <FlatList horizontal showsHorizontalScrollIndicator
          pagingEnabled
          data={onBoardingData} renderItem={({ item }) => <OnBoardCard item={item} />} />


      {/* </ImageBackground> */}
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
});

export default OnBoarding1;
