import { Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { INavigation, IRoute } from '../../../types';
import Header from '../../component/header/Header';
import { homeStyles } from './Home.style';

type IUser = {
  password?: string;
  email?: string;
} | null;

type IHome = {
  navigation: INavigation;
  route: IRoute;
};

const Home = ({ navigation, route }: IHome) => {
  const [user, setUser] = useState<IUser>(null);

  useEffect(() => {
    if (route.params?.user) {
      setUser(route.params.user);
    }
  }, [route.params]);

  return (
    <>
      <Header navigation={navigation} />
      <Layout style={homeStyles.container}>
        <Layout style={homeStyles.content}>
          {user && <Text category="h4">{`Logged as ${user.email}`}</Text>}
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
