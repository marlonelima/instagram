import React from 'react'
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageSourcePropType
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from '../styles/components/badge'

import AddStoryIcon from '../assets/icons/add_story'

interface IProps {
  me: boolean
  newStory: boolean
  username?: string
  image: ImageSourcePropType
}

export const Badge = (props: IProps) => {
  return (
    <TouchableOpacity style={styles.story}>
      <LinearGradient
        style={styles.newStory}
        colors={
          props.newStory
            ? ['#e78428', '#a50303']
            : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
        }
        useAngle={true}
        angle={30}
      >
        <View style={[styles.storyPhoto]}>
          <Image source={props.image} style={styles.storiesPerson} />
          {props.me && <AddStoryIcon style={styles.storiesAddIcon} />}
        </View>
      </LinearGradient>

      <Text style={styles.storyName}>
        {props.me ? 'Seu story' : props.username}
      </Text>
    </TouchableOpacity>
  )
}
