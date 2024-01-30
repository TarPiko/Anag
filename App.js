import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/navigtion/Routes';
import { rootStore, RootStoreContext } from './src/models/RootStore';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    <RootStoreContext.Provider value={rootStore}>
      <Routes />
    </RootStoreContext.Provider>
  );
};

export default App;
