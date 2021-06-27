import React from 'react'

import { Image, View, Text } from 'react-native'

import { styles } from '../styles/components/post'

import profileImage from '../assets/images/profile/me.jpg'
import postImage from '../assets/images/posts/me.jpg'
import MoreIcon from '../assets/icons/more'

import { getImageHeight } from '../utils/image'

export const Post = () => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.username}>me.marlone</Text>
        <MoreIcon style={styles.moreIcon} theme={'dark'} />
      </View>
      <View
        style={{
          width: '100%',
          height: getImageHeight(postImage)
        }}
      >
        <Image style={styles.postImage} source={postImage} />
      </View>
    </View>
  )
}
