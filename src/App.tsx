import React, { useEffect } from 'react'

import { SafeAreaView, StatusBar } from 'react-native'

import EStyleSheet from 'react-native-redesign'

import { Theme } from './constants/Theme'

import { Main } from './screens/Main'

const App = () => {
  return (
    <>
      <StatusBar translucent={false} backgroundColor={Theme.dark.statusBar} />
      <SafeAreaView style={{ flex: 1 }}>
        <Main />
      </SafeAreaView>
    </>
  )
}

EStyleSheet.build()

export default App
