import EStyleSheet from 'react-native-redesign'

export const styles = EStyleSheet.create({
  story: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#000',
    marginRight: 10,
    width: '4.8rem'
  },
  storyPhoto: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '2.4rem',
    maxWidth: 75,
    maxHeight: 75,
    backgroundColor: '#000'
  },
  newStoryCircle: { width: '4.4rem', height: '4.4rem' },
  oldStoryCircle: { width: '4.55rem', height: '4.5rem' },
  containerPhoto: { height: '4.6rem', width: '4.7rem' },
  newStory: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2.4rem'
  },
  storiesAddIcon: {
    position: 'absolute',
    bottom: '8%',
    right: '8%'
  },
  storiesPerson: {
    width: '3.8rem',
    height: '3.8rem',
    borderRadius: '2rem',
    maxWidth: 70,
    maxHeight: 70
  },
  storyName: {
    color: '#fff',
    fontSize: '0.7rem',
    maxWidth: '100%',
    marginTop: 3
  }
})
