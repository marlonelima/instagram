import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
  style: any
}

function SvgComponent({ theme, style }: IProps) {
  return (
    <Svg style={style} width={24} height={23} viewBox="0 0 36 42" fill="none">
      <Path
        d="M2 39.5V2h32v37.5l-16-16-16 16z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
