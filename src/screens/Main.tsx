import React from 'react'

import { Feed } from './Feed'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Theme } from '../constants/Theme'

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
          style: {
            borderTopWidth: 0,
            backgroundColor: Theme.dark.background
          },
          activeTintColor: '#fff',
          iconStyle: { color: '#fff' }
        }}
      >
        <Tab.Screen name="Home" component={Feed} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
