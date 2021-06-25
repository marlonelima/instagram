import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
  header: {
    width: '100%',
    height: 60,
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
    width: '100%',
    marginTop: 10,
    borderColor: 'rgba(255,255,255,0.2)',
    paddingBottom: 10,
    borderBottomWidth: EStyleSheet.hairlineWidth
  },
  storiesInset: {
    paddingHorizontal: '4%',
    display: 'flex',
    flexDirection: 'row',
    flex: 0
  }
})
