import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../srceens/HomeScreen/HomeScreen';
import RightIconsHeader from './components/RightIconsHeader';
import { LogoIcon } from '../assets/icons';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerRight: () => <RightIconsHeader />,
        headerLeft: () => <LogoIcon />,
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
