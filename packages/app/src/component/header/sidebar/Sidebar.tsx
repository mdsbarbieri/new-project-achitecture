import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import globalStyles from '../../../styles/global.style';
import { sidebarStyles } from './Sidebar.style';

const Sidebar = (props: any) => {
  const navigation = props.navigation;
  return (
    <View style={sidebarStyles.sidebar}>
      <View style={sidebarStyles.header}>
        <TouchableWithoutFeedback onPress={navigation.toggleDrawer}>
          <View style={sidebarStyles.icon}>
            <Icon
              width="30"
              height="30"
              fill={globalStyles.colors.colorBasic200}
              {...props}
              name="menu-outline"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <SafeAreaView style={sidebarStyles.sidebar}>
        <DrawerContentScrollView {...props}>
          <View style={sidebarStyles.customItem}>
            <Button
              appearance="outline"
              status="primary"
              onPress={() => navigation.navigate('Home')}>
              Login
            </Button>
          </View>
        </DrawerContentScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Sidebar;
