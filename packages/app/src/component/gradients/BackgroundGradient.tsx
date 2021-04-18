import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { gradientStyles } from './Gradient.style';

const BackgroundGradient = ({ children }: any) => {
  return (
    <LinearGradient
      colors={['#ec008c', '#fc6767']}
      style={gradientStyles.background}
      locations={[0.8, 1]}>
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;
