import React, { useRef } from 'react'
import { View, ScrollView } from 'react-native'

import {
  PanGestureHandler,
  NativeViewGestureHandler
} from 'react-native-gesture-handler'

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing
} from 'react-native-reanimated'

import { styles } from '../styles/screens/feed'

import TextLogo from '../assets/text_logo'
import AddIcon from '../assets/icons/add'
import HeartIcon from '../assets/icons/heart'
import MessengerIcon from '../assets/icons/messenger'
import { Badge } from '../components/Badge'

import MeImage from '../assets/images/profile/me.jpg'
import { Post } from '../components/Post'

export const Feed = () => {
  const panRef = useRef(null)
  const viewRef = useRef(null)
  const storiesRef = useRef(null)

  const bounceY = useSharedValue(0)

  const bounceStyle = useAnimatedStyle(() => {
    return {
      paddingTop: interpolate(
        bounceY.value,
        [30, 250],
        [0, 250],
        Extrapolate.CLAMP
      )
    }
  })

  function bounceEnd() {
    bounceY.value = withTiming(0, {
      duration: 350,
      easing: Easing.linear
    })
    return
  }

  return (
    <>
      <View>
        <View style={styles.header}>
          <TextLogo theme="dark" />

          <View style={styles.buttonAreaHeader}>
            <AddIcon theme="dark" />
            <HeartIcon theme="dark" />
            <MessengerIcon theme="dark" />
          </View>
        </View>

        <PanGestureHandler
          onGestureEvent={(gesture) => {
            bounceY.value = gesture.nativeEvent.translationY / 2
          }}
          ref={panRef}
          simultaneousHandlers={viewRef}
        >
          <NativeViewGestureHandler ref={viewRef}>
            <Animated.ScrollView
              onScrollEndDrag={bounceEnd}
              showsVerticalScrollIndicator={false}
              style={bounceStyle}
              bounces={false}
            >
              <PanGestureHandler
                onGestureEvent={(gesture) => {
                  bounceY.value = gesture.nativeEvent.translationY / 2
                }}
                onEnded={bounceEnd}
                ref={panRef}
                simultaneousHandlers={storiesRef}
              >
                <NativeViewGestureHandler ref={storiesRef}>
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
                </NativeViewGestureHandler>
              </PanGestureHandler>

              <Post />
              <Post />
            </Animated.ScrollView>
          </NativeViewGestureHandler>
        </PanGestureHandler>
      </View>
    </>
  )
}
