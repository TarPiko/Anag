import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../srceens/ProfileScreen/ProfileScreen';
import RightIconsHeader from './components/RightIconsHeader';
import { LogoIcon } from '../assets/icons';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerRight: () => <RightIconsHeader />,
        headerLeft: () => <LogoIcon />,
      }}
    >
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
