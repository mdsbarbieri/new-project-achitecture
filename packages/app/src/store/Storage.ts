import AsyncStorage from '@react-native-async-storage/async-storage';

export const hydrateStore = async (key: string, store: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      store.replace(JSON.parse(value));
    }
  } catch (e) {
    console.log('error reading stored value');
  }
};

export const persisteStore = async (key: string, store: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(store));
  } catch (e) {
    console.log('error reading stored value');
  }
};
