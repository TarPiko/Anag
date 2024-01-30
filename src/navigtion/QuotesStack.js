import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuotesScreen from '../srceens/QuotesScreen/QuotesScreen';
import PolicyTypesScreen from '../srceens/PolicyTypesScreen/PolicyTypesScreen';
import RightIconsHeader from './components/RightIconsHeader';
import BackButton from './components/BackButton';
import DriverInfoScreen from '../srceens/DriverInfoScreen/DriverInfoScreen';
import VehicleInfoScreen from '../srceens/VehicleInfoScreen/VehicleInfoScreen';
import QuoteSubmitScreen from '../srceens/QuoteSubmitScreen/QuoteSubmitScreen';
import FinishedQuoteScreen from '../srceens/FinishedQuoteScreen/FinishedQuoteScreen';
import QuoteDetailScreen from '../srceens/QuoteDetailScreen/QuoteDetailScreen';
import PolicyCreatedScreen from '../srceens/PolicyCreatedScreen/PolicyCreatedScreen';
import { LogoIcon } from '../assets/icons';

const Stack = createNativeStackNavigator();

const QuotesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerLeft: () => <BackButton />,
        headerRight: () => <RightIconsHeader />,
      }}
    >
      <Stack.Screen
        name='QuotesScreen'
        component={QuotesScreen}
        options={{
          headerLeft: () => <LogoIcon />,
        }}
      />
      <Stack.Screen name='PolicyTypesScreen' component={PolicyTypesScreen} />
      <Stack.Screen name='DriverInfoScreen' component={DriverInfoScreen} />
      <Stack.Screen name='VehicleInfoScreen' component={VehicleInfoScreen} />
      <Stack.Screen name='QuoteSubmitScreen' component={QuoteSubmitScreen} />
      <Stack.Screen
        name='FinishedQuoteScreen'
        component={FinishedQuoteScreen}
        options={{
          headerLeft: () => <LogoIcon />,
        }}
      />
      <Stack.Screen name='QuoteDetailScreen' component={QuoteDetailScreen} />
      <Stack.Screen
        name='PolicyCreatedScreen'
        component={PolicyCreatedScreen}
        options={{
          headerLeft: () => <LogoIcon />,
        }}
      />
    </Stack.Navigator>
  );
};

export default QuotesStack;
