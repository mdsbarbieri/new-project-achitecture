import { useNavigation } from '@react-navigation/core';
import { Icon, Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import globalStyles from '../../../styles/global.style';
import { sidebarItemStyles } from './SidebarItem.style';

type SidebarItemProps = {
  text: string;
  destination: string;
  alt?: boolean;
};

const SidebarItem = ({ text, destination, alt = false }: SidebarItemProps) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(destination)}>
      <View style={sidebarItemStyles[alt ? 'altContainer' : 'container']}>
        <Text style={sidebarItemStyles[alt ? 'altText' : 'text']}>{text}</Text>
        {
          <Icon
            width="20"
            height="20"
            fill={
              globalStyles.colors[alt ? 'colorPrimary100' : 'colorPrimary500']
            }
            name="arrow-ios-forward-outline"
          />
        }
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SidebarItem;
