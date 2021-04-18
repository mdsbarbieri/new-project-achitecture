import {
  Button,
  Divider,
  Icon,
  Input,
  Layout,
  Text,
} from '@ui-kitten/components';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { INavigation } from '../../../types';
import { authStyles } from './Auth.style';

type IAuth = {
  navigation: INavigation;
};

const AlertIcon = (props: any) => (
  <Icon {...props} name="alert-circle-outline" />
);

const Auth = ({ navigation }: IAuth) => {
  const [authData, setAuthData] = useState({ email: '', password: '' });
  const [errorData, setErrorData] = useState({ email: false, password: false });
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const doLogin = () => {
    setErrorData({ email: !authData.email, password: !authData.password });
    if (!authData.email || !authData.password) {
      return;
    }
    navigation.navigate('Home', { user: authData });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={authStyles.view}>
      <Layout style={authStyles.layout}>
        <Text category="h1">Do Login</Text>
        <Input
          style={authStyles.input}
          placeholder="E-mail"
          label="E-mail"
          size="medium"
          keyboardType="email-address"
          autoCompleteType="email"
          textContentType="username"
          status={errorData.email ? 'danger' : 'basic'}
          value={authData.email}
          onChangeText={(email) => setAuthData({ ...authData, email })}
        />
        <Input
          style={authStyles.input}
          value={authData.password}
          label="Password"
          size="medium"
          textContentType="password"
          status={errorData.password ? 'danger' : 'basic'}
          placeholder="Place your Text"
          caption="Should contain at least 8 symbols"
          autoCompleteType="password"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(password) => setAuthData({ ...authData, password })}
        />
        <Divider />
        <Button onPress={doLogin} style={authStyles.button}>
          LOGIN
        </Button>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default Auth;
