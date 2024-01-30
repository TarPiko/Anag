import React from 'react';
import { types } from 'mobx-state-tree';
import AsyncStorage from '@react-native-community/async-storage';
import persist from '../utils/persist';
import UserModel from './UserModel';

const RootStore = types.model('RootStore', {
  user: types.optional(UserModel, {}),
});

const initialState = RootStore.create({});

// Function for persisting data
(async () => {
  await persist('user', initialState, {
    storage: AsyncStorage,
    jsonify: true,
  });
})();

export const rootStore = initialState;

export const RootStoreContext = React.createContext(null);

export function useRootModel() {
  const store = React.useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
