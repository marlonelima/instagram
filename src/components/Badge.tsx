import React from 'react'

import { Pressable, View, Image, Text, ImageSourcePropType } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing
} from 'react-native-reanimated'

import LinearGradient from 'react-native-linear-gradient'

import { styles } from '../styles/components/badge'

import AddStoryIcon from '../assets/icons/add_story'

interface IProps {
  haveMyStory?: boolean
  me: boolean
  newStory: boolean
  username?: string
  image: ImageSourcePropType
}

export const Badge = (props: IProps) => {
  const size = useSharedValue(1)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: size.value
        }
      ]
    }
  })

  function onPress() {
    size.value = withTiming(0.95, {
      duration: 50,
      easing: Easing.in(Easing.linear)
    })
  }

  function onPressOut() {
    size.value = withTiming(1, {
      duration: 50,
      easing: Easing.in(Easing.linear)
    })
  }

  return (
    <Pressable onPressIn={onPress} onPressOut={onPressOut} style={styles.story}>
      <Animated.View style={[styles.containerPhoto, animatedStyles]}>
        <LinearGradient
          style={styles.newStory}
          colors={
            props.newStory
              ? ['#e78428', '#a50303']
              : props.me && !props.haveMyStory
              ? ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
              : ['#808080', '#808080']
          }
          useAngle={true}
          angle={30}
        >
          <View
            style={[
              styles.storyPhoto,
              props.newStory ? styles.newStoryCircle : styles.oldStoryCircle
            ]}
          >
            <Image source={props.image} style={[styles.storiesPerson]} />
            {props.me && !props.haveMyStory && (
              <AddStoryIcon style={styles.storiesAddIcon} />
            )}
          </View>
        </LinearGradient>
      </Animated.View>

      <Text style={{ ...styles.storyName }}>
        {props.me ? 'Seu story' : props.username}
      </Text>
    </Pressable>
  )
}
