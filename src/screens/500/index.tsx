import React from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';

const logo500 = require('./500.png');

const ERROR_500 = () => (
  <View
  // style={{
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#E5E9E8',
  // }}
  >
    <Image
      source={logo500}
      //   style={{
      //     width: Dimensions.get('screen').width - 80,
      //     height: 320,
      //   }}
      //   resizeMode="contain"
    />
    <Text
    //   style={{
    //     color: '#000',
    //     fontWeight: 'bold',
    //     fontSize: 25,
    //     textAlign: 'center',
    //     marginTop: 15,
    //   }}
    >
      {`Sorry! It's not you. It's us.`}
    </Text>
    <Text
    //   style={{
    //     color: '#000',
    //     fontWeight: '600',
    //     fontSize: 14,
    //     marginVertical: 10,
    //   }}
    >
      We are expecting an internal server problem.
    </Text>
    <TouchableOpacity
      onPress={() => {}}
      //   style={{
      //     backgroundColor: '#000',
      //     paddingVertical: 10,
      //     paddingHorizontal: 20,
      //     marginTop: 10,
      //     borderRadius: 5,
      //   }}
    >
      <Text
      // style={{
      //   color: '#FFF',
      //   fontWeight: '600',
      //   fontSize: 14,
      // }}
      >
        TRY AGAIN
      </Text>
    </TouchableOpacity>
  </View>
);

export default ERROR_500;
