import {
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { INavigation } from '../../../types';
import globalStyles from '../../styles/global.style';
import { headerStyles } from './Header.style';

type IHeader = { navigation: INavigation };

const Header = ({ navigation }: IHeader) => {
  const MenuIcon = (props: any) => (
    <Icon
      width="30"
      height="30"
      fill={globalStyles.colors.colorPrimary500}
      {...props}
      name="menu-outline"
    />
  );

  const TopNavigationActionMenu = () => (
    <TopNavigationAction
      onPress={navigation.toggleDrawer}
      style={headerStyles.menuContent}
      icon={MenuIcon}
    />
  );

  return (
    <View>
      <TopNavigation
        style={headerStyles.nav}
        accessoryLeft={TopNavigationActionMenu}
        alignment="center"
      />
    </View>
  );
};

export default Header;
