import { Image, Dimensions, ImageSourcePropType } from 'react-native'

function getImageHeight(postImage: ImageSourcePropType): number {
  const { width: imageWidth, height: imageHeight } =
    Image.resolveAssetSource(postImage)

  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const ratio = Math.min(screenWidth / imageWidth, screenHeight / imageHeight)

  return imageHeight * ratio
}

export { getImageHeight }
