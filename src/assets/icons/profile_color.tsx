import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={23} height={23} viewBox="0 0 96 96" fill="none">
      <Circle cx={48} cy={48} r={48} fill="#8EDDF5" />
    </Svg>
  )
}

export default SvgComponent
