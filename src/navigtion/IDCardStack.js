import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IDCardScreen from '../srceens/IDCardScreen/IDCardScreen';
import RightIconsHeader from './components/RightIconsHeader';
import { LogoIcon } from '../assets/icons';

const Stack = createNativeStackNavigator();

const IDCardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerRight: () => <RightIconsHeader />,
        headerLeft: () => <LogoIcon />,
      }}
    >
      <Stack.Screen name='IDCardScreen' component={IDCardScreen} />
    </Stack.Navigator>
  );
};

export default IDCardStack;
