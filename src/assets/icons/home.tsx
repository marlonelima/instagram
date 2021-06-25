import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 47 48" fill="none">
      <Path
        d="M.5 48V22L24 .5 46.5 23v25h-17V31.5c-.167-1.667-1.6-5-6-5S17.333 30.833 17 33v15H.5z"
        fill={theme === 'dark' ? '#fff' : '#000'}
      />
    </Svg>
  )
}

export default SvgComponent
