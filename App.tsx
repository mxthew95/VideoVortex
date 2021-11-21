import React, { useEffect, useState, FC } from 'react';
import {
  View,
  Text
} from 'react-native';

const title: string = "Hello World!";

const App = () => {
  
  return(
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default App;