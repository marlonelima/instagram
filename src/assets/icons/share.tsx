import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 46 41" fill="none">
      <Path
        d="M17.5 17.5L2 2h42M17.5 17.5l5 21L44 2M17.5 17.5L44 2"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
