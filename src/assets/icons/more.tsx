import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
  style: any
}

function SvgComponent({ theme, style }: IProps) {
  return (
    <Svg style={style} width={10} height={15} viewBox="0 0 11 63" fill="none">
      <Circle cx={5.5} cy={5.5} r={5.5} fill="#fff" />
      <Circle cx={5.5} cy={30.5} r={5.5} fill="#fff" />
      <Circle cx={5.5} cy={57.5} r={5.5} fill="#fff" />
    </Svg>
  )
}

export default SvgComponent
