import React from 'react'

import { View } from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera'

export const NewStoryScreen = () => {
  return (
    <View style={styles.container}>
      <RNCamera style={{ flex: 1 }} />
    </View>
  )
}

import EStyleSheet from 'react-native-redesign'

export const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})
