import React from 'react';
import styles from './onboardingStyle';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };


const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 24,
                  height: 6,
                  borderRadius: 5
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{
          marginTop: 20,
          width: '100%'
      
        }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 60 }}>
              <Text style={{ fontWeight: '600', fontSize: 14, color: 'white', alignSelf: 'center' }}>
                GET STARTED
              </Text>
          
            </View>
          ) : (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: -200 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  Skip
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: 'white',
                      marginEnd: 6
                    }}>
                    Next
                  </Text>
                  <Image source={require('../../assets/images/next_arrow.png')} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const slides = [
    {
      image: require('../../assets/images/first_onboarding.png')
    },
    {
      image: require('../../assets/images/first_onboarding.png')
    },
    {
      image: require('../../assets/images/second_onboarding_img.png')
    },
  ];

  const Slide = ({ item }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image
          source={item?.image}
          style={{ flex: 1, width, }}
        />
        <View style={styles.card}>
          <Text style={styles.delicaciesTxt}>We serve incomparable delicacies</Text>
          <Text numberOfLines={3} style={styles.restaurentPeraTxt}>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</Text>
          <View style={[{ marginTop: 30 }]} />
          <Footer />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />

    </SafeAreaView>
  );
};

export default OnboardingScreen;
