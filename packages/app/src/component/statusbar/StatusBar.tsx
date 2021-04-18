import { useIsDrawerOpen } from '@react-navigation/drawer';
import React from 'react';
import { StatusBar } from 'react-native';

const CustomStatusBar = () => {
  const isDrawerOpen = useIsDrawerOpen();
  return (
    <StatusBar
      animated={true}
      barStyle={isDrawerOpen ? 'light-content' : 'dark-content'}
    />
  );
};

export default CustomStatusBar;
