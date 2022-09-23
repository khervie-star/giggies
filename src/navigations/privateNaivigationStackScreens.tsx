import * as React from 'react';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/homeScreen';
import RecentScreen from '../screens/recentScreen';
import ProfileScreen from '../screens/profileScreen';
import * as Animatable from 'react-native-animatable';

export function HomeStackScreen() {
  const viewRef = React.useRef(null);
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarBadge: 3}}
      />
    </HomeStack.Navigator>
  );
}

export function SearchStackScreen() {
  const viewRef = React.useRef(null);
  const SearchStack = createNativeStackNavigator();

  return (
    <>
      <SearchStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <SearchStack.Screen
          name="Search"
          component={RecentScreen}
          options={{tabBarBadge: 3}}
        />
      </SearchStack.Navigator>
    </>
  );
}

export function ProfileStackScreen() {
  const ProfileStack = createNativeStackNavigator();

  return (
    <>
      <ProfileStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <ProfileStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{tabBarBadge: 3}}
        />
      </ProfileStack.Navigator>
    </>
  );
}
