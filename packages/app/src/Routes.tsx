import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Sidebar from './component/header/sidebar/Sidebar';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LoggedNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: 'Home' }}
        component={Home}
      />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <>
      <Stack.Navigator
        headerMode="screen"
        initialRouteName="Logged"
        screenOptions={{ headerTransparent: true, headerShown: false }}>
        <Stack.Screen name="Logged" component={LoggedNavigation} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
