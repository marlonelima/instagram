import React from 'react'
import { TouchableOpacity, View, Image, ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import TextLogo from '../assets/text_logo'
import AddIcon from '../assets/icons/add'
import HeartIcon from '../assets/icons/heart'
import MessengerIcon from '../assets/icons/messenger'
import MeImage from '../assets/images/profile/me.jpg'
import AddStoryIcon from '../assets/icons/add_story'
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
      <View>
        <ScrollView
          style={styles.stories}
          contentContainerStyle={styles.storiesInset}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.story}>
            <Image source={MeImage} style={styles.storiesPerson} />
            <AddStoryIcon style={styles.storiesAddIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.story, ...styles.newStory }}>
            <Image source={MeImage} style={styles.storiesPerson} />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.story, ...styles.newStory }}>
            <Image source={MeImage} style={styles.storiesPerson} />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.story, ...styles.newStory }}>
            <Image source={MeImage} style={styles.storiesPerson} />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.story, ...styles.newStory }}>
            <Image source={MeImage} style={styles.storiesPerson} />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.story, ...styles.newStory }}>
            <Image source={MeImage} style={styles.storiesPerson} />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.story, ...styles.newStory }}>
            <Image source={MeImage} style={styles.storiesPerson} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  )
}

export const styles = EStyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonAreaHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    width: '40%'
  },
  stories: {
    width: '100%'
  },
  storiesInset: {
    paddingHorizontal: '4%',
    display: 'flex',
    flexDirection: 'row',
    flex: 0
  },
  story: {
    width: '4.6rem',
    height: '4.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: 14,
    borderRadius: '2.4rem'
  },
  'story:last-child': {
    marginRight: 0
  },
  newStory: { borderColor: '#ff0055', borderWidth: 2 },
  storiesAddIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  storiesPerson: {
    width: '3.8rem',
    height: '3.8rem',
    borderRadius: '2rem'
  }
})
