import { createAsyncAction, Store, successResult } from 'pullstate';
import { hydrateStore, persisteStore } from './Storage';

const AuthStore = new Store({
  isTransient: true,
  user: { email: '', firstName: '', id: '' },
});

AuthStore.subscribe(
  (s) => s,
  (authStore) => {
    persisteStore('AuthStore', authStore);
  }
);

hydrateStore('AuthStore', AuthStore);

export const doLogin = createAsyncAction(async ({ email, password }) => {
  AuthStore.update((s) => {
    s.user = { email, firstName: 'Matheus', id: '1231' };
  });

  await new Promise((resolve) => setTimeout(resolve, 500));

  AuthStore.update((s) => {
    s.isTransient = false;
  });
  return successResult();
});

export { AuthStore };
