import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AskPolicyScreen from '../srceens/AskPolicyScreen/AskPolicyScreen';
import PolicyIDScreen from '../srceens/PolicyIDScreen/PolicyIDScreen';
import BackButton from './components/BackButton';
import MainStack from './MainStack';
import SignUpScreen from '../srceens/SignUpScreen/SignUpScreen';
import LogInScreen from '../srceens/LogInScreen/LogInScreen';
import ForgotPasswordScreen from '../srceens/ForgotPasswordScreen/ForgotPasswordScreen';
import ConfirmCodeScreen from '../srceens/ConfirmCodeScreen/ConfirmCodeScreen';
import AddNewPassScreen from '../srceens/AddNewPassScreen/AddNewPassScreen';
import ConfirmationScreen from '../srceens/ConfirmationScreen/ConfirmationScreen';
import WelcomeScreen from '../srceens/WelcomeScreen/WelcomeScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [initRoute, setInitRoute] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      (async () => await restoreInitRoute())();
    }
  }, [isReady]);

  const restoreInitRoute = async () => {
    const value = await AsyncStorage.getItem('user');
    const user = JSON.parse(value);

    if (user?.user.isAuth) {
      setInitRoute('MainStack');
    } else {
      setInitRoute('WelcomeScreen');
    }

    setIsReady(true);
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaView />
      <Stack.Navigator initialRouteName={initRoute}>
        <Stack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='AskPolicyScreen'
          component={AskPolicyScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='PolicyIDScreen'
          component={PolicyIDScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name='MainStack'
          component={MainStack}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name='LogInScreen'
          component={LogInScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name='ForgotPasswordScreen'
          component={ForgotPasswordScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name='ConfirmCodeScreen'
          component={ConfirmCodeScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name='AddNewPassScreen'
          component={AddNewPassScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name='ConfirmationScreen'
          component={ConfirmationScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
