import React from 'react'
import { useWindowDimensions } from 'react-native'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NewStoryScreen } from '../screens/NewStory'
import { BottomNavigator } from './bottom'

import { Feed } from '../screens/Feed'
import { Theme } from '../constants/Theme'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Theme.dark.background
  }
}

const Tab = createMaterialTopTabNavigator()

export const Main = () => {
  const layout = useWindowDimensions()

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Main"
        initialLayout={{ width: layout.width }}
        tabBarOptions={{
          tabStyle: { display: 'none' }
        }}
      >
        <Tab.Screen name="NewStory" component={NewStoryScreen} />
        <Tab.Screen name="Main" component={BottomNavigator} />
        <Tab.Screen name="Messages" component={Feed} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
