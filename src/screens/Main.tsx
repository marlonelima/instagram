import React from 'react'

import { Feed } from './Feed'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Theme } from '../constants/Theme'
import HomeIcon from '../assets/icons/home'
import SearchIcon from '../assets/icons/search'
import ReelsIcon from '../assets/icons/reels'
import StoreIcon from '../assets/icons/store'
import ProfileIcon from '../assets/icons/profile_color'

const Tab = createBottomTabNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Theme.dark.background
  }
}

export const Main = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            borderTopWidth: 0,
            backgroundColor: Theme.dark.background
          },
          activeTintColor: '#fff',
          iconStyle: { color: '#fff' }
        }}
      >
        <Tab.Screen
          options={{ tabBarIcon: () => <HomeIcon theme="dark" /> }}
          name="Home"
          component={Feed}
        />
        <Tab.Screen
          options={{ tabBarIcon: () => <SearchIcon theme="dark" /> }}
          name="Search"
          component={Feed}
        />
        <Tab.Screen
          options={{ tabBarIcon: () => <ReelsIcon theme="dark" /> }}
          name="Reels"
          component={Feed}
        />
        <Tab.Screen
          options={{ tabBarIcon: () => <StoreIcon theme="dark" /> }}
          name="Store"
          component={Feed}
        />
        <Tab.Screen
          options={{ tabBarIcon: () => <ProfileIcon theme="dark" /> }}
          name="Profile"
          component={Feed}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
