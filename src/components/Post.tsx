import React from 'react'

import { Image, View, Text } from 'react-native'

import { styles } from '../styles/components/post'

import profileImage from '../assets/images/profile/me.jpg'
import postImage from '../assets/images/posts/me.jpg'
import MoreIcon from '../assets/icons/more'
import HeartIcon from '../assets/icons/heart_post'
import CommentIcon from '../assets/icons/comment'
import ShareIcon from '../assets/icons/share'
import SaveIcon from '../assets/icons/save'

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
      <View style={styles.reaction}>
        <View style={styles.reactionLeft}>
          <HeartIcon theme={'dark'} />
          <CommentIcon theme={'dark'} />
          <ShareIcon theme={'dark'} />
        </View>
        <SaveIcon theme={'dark'} style={styles.saveIcon} />
      </View>
      <View style={styles.info}>
        <Text style={styles.description}>
          <Text style={styles.usernameDescription}>me.marlone {'  '}</Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada,
          velit in sodales imperdiet, dui mauris posuere lorem, et maximus nisi
          ante et augue.
        </Text>
      </View>
    </View>
  )
}
