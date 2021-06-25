import React from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'

import { styles } from '../styles/screens/feed'

import TextLogo from '../assets/text_logo'
import AddIcon from '../assets/icons/add'
import HeartIcon from '../assets/icons/heart'
import MessengerIcon from '../assets/icons/messenger'
import { Badge } from '../components/Badge'

import MeImage from '../assets/images/profile/me.jpg'
import { Post } from '../components/Post'
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ScrollView
            style={styles.stories}
            contentContainerStyle={styles.storiesInset}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Badge
              haveMyStory={false}
              image={MeImage}
              me={true}
              newStory={false}
            />
            <Badge
              image={MeImage}
              me={false}
              newStory={true}
              username="me.marlone"
            />
            <Badge
              image={MeImage}
              me={false}
              newStory={true}
              username="me.marlone"
            />
            <Badge
              image={MeImage}
              me={false}
              newStory={false}
              username="me.marlone"
            />
            <Badge
              image={MeImage}
              me={false}
              newStory={false}
              username="me.marlone"
            />
          </ScrollView>
          <Post />
          <Post />
        </View>
      </ScrollView>
    </>
  )
}
