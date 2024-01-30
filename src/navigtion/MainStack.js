import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardStack from './DashboardStack';
import ProfileStack from './ProfileStack';
import IDCardStack from './IDCardStack';
import QuotesStack from './QuotesStack';
import ClaimsStack from './ClaimsStack';
import { ClipboardIcon, LayoutIcon, QrCodeIcon, TicketIcon, UserIcon } from '../assets/icons';
import { COLORS } from '../constants/defaultStyles';
import normalizeFontSize from '../utils/normalizeFontSize';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  const activeColor = COLORS.green;
  const inactiveColor = COLORS.icon;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: COLORS.dark,
        header: () => null,
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: normalizeFontSize(10),
        },
      }}
      initialRouteName='DashboardStack'
    >
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <UserIcon color={focused ? activeColor : inactiveColor} />,
        }}
      />
      <Tab.Screen
        name='IDCardStack'
        component={IDCardStack}
        options={{
          title: 'ID Card',
          tabBarIcon: ({ focused }) => <QrCodeIcon color={focused ? activeColor : inactiveColor} />,
        }}
      />
      <Tab.Screen
        name='DashboardStack'
        component={DashboardStack}
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ focused }) => <LayoutIcon color={focused ? activeColor : inactiveColor} />,
        }}
      />
      <Tab.Screen
        name='QuotesStack'
        component={QuotesStack}
        options={{
          title: 'Quotes',
          tabBarIcon: ({ focused }) => <TicketIcon color={focused ? activeColor : inactiveColor} />,
        }}
      />
      <Tab.Screen
        name='ClaimsStack'
        component={ClaimsStack}
        options={{
          title: 'Claims',
          tabBarIcon: ({ focused }) => (
            <ClipboardIcon color={focused ? activeColor : inactiveColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
