import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Icon, Text } from '@ui-kitten/components';
import { useStoreState } from 'pullstate';
import React, { useMemo } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import { AuthStore } from '../../store/AuthStore';
import globalStyles from '../../styles/global.style';
import CustomStatusBar from '../statusbar/StatusBar';
import { sidebarStyles } from './Sidebar.style';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props: any) => {
  const navigation = props.navigation;
  const isTransient = useStoreState(AuthStore, (s) => s.isTransient);
  const user = useStoreState(AuthStore, (s) => s.user);

  const getUserAction = useMemo(() => {
    return isTransient ? (
      <SidebarItem text="Login" alt destination="Auth" />
    ) : (
      <Text style={sidebarStyles.saudation}>Hello {user.firstName}</Text>
    );
  }, [isTransient]);

  return (
    <View style={sidebarStyles.sidebar}>
      <CustomStatusBar />
      <View style={sidebarStyles.header}>
        {getUserAction}
        <TouchableWithoutFeedback onPress={navigation.toggleDrawer}>
          <View style={sidebarStyles.icon}>
            <Icon
              width="30"
              height="30"
              fill={globalStyles.colors.colorBasic100}
              {...props}
              name="close-outline"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <SafeAreaView style={sidebarStyles.sidebar}>
        <DrawerContentScrollView {...props}>
          <View style={sidebarStyles.navItems}>
            <SidebarItem text="Home" destination="Home" />
          </View>
        </DrawerContentScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Sidebar;
