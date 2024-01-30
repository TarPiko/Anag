import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClaimsScreen from '../srceens/ClaimsScreen/ClaimsScreen';
import RightIconsHeader from './components/RightIconsHeader';
import { LogoIcon } from '../assets/icons';
import MakeClaimScreen from '../srceens/MakeClaimScreen/MakeClaimScreen';
import BackButton from './components/BackButton';
import DamageInfoScreen from '../srceens/DamageInfoScreen/DamageInfoScreen';
import InsuredInfoScreen from '../srceens/InsuredInfoScreen/InsuredInfoScreen';
import FinishedClaimScreen from '../srceens/FinishedClaimScreen/FinishedClaimScreen';
import AccidentInfoScreen from '../srceens/AccidentInfoScreen/AccidentInfoScreen';
import ClaimDetailScreen from '../srceens/ClaimDetailScreen/ClaimDetailScreen';
import PaymentTypeScreen from '../srceens/PaymentTypeScreen/PaymentTypeScreen';

const Stack = createNativeStackNavigator();

const ClaimsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerRight: () => <RightIconsHeader />,
        headerLeft: () => <LogoIcon />,
      }}
    >
      <Stack.Screen name='ClaimsScreen' component={ClaimsScreen} />
      <Stack.Screen
        name='MakeClaimScreen'
        component={MakeClaimScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name='DamageInfoScreen'
        component={DamageInfoScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name='InsuredInfoScreen'
        component={InsuredInfoScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name='AccidentInfoScreen'
        component={AccidentInfoScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen name='FinishedClaimScreen' component={FinishedClaimScreen} />
      <Stack.Screen
        name='ClaimDetailScreen'
        component={ClaimDetailScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name='PaymentTypeScreen'
        component={PaymentTypeScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ClaimsStack;
