import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,ImageBackground} from 'react-native';
import OnBoardCard from '../components/OnBoardCard';

const OnBoarding1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
   <ImageBackground 
   style={styles.img}
   source={require('../assets/images/img.png')
   }
   resizeMode='cover'
   
   >
    <OnBoardCard/>

   </ImageBackground>
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
