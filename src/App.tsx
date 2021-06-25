import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Splash from 'react-native-splash-screen'

import EStyleSheet from 'react-native-extended-stylesheet'

import { Theme } from './constants/Theme'
import { styles } from './styles/app'

import { Main } from './screens/Main'

const App = () => {
  useEffect(() => Splash.hide())

  return (
    <>
      <StatusBar translucent={false} backgroundColor={Theme.dark.statusBar} />
      <SafeAreaView style={styles.background}>
        <Main />
      </SafeAreaView>
    </>
  )
}

EStyleSheet.build()

export default App
