import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-redesign'

export const styles = EStyleSheet.create({
  post: {
    width: '100%',
    marginTop: 20
  },
  header: {
    width: '100%',
    paddingHorizontal: '4%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  username: {
    fontSize: '0.9rem',
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold'
  },
  moreIcon: { marginLeft: 'auto', marginRight: 10 },
  postImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    margin: 5
  }
})
