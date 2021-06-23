import React from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import TextLogo from '../assets/text_logo'
import AddIcon from '../assets/icons/add'
import HeartIcon from '../assets/icons/heart'
import MessengerIcon from '../assets/icons/messenger'
export const Feed = () => {
  return (
    <>
      <View style={styles.header}>
        <TextLogo theme="dark" />

        <View style={styles.buttonAreaHeader}>
          <AddIcon theme="dark" />
          <HeartIcon theme="dark" />
          <MessengerIcon theme="dark" />
        </View>
      </View>
    </>
  )
}

export const styles = EStyleSheet.create({
  header: {
    width: '50%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonAreaHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
    marginLeft: '25%'
  }
})
