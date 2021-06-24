import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  style: any
}

function SvgComponent({ style }: IProps) {
  return (
    <Svg style={style} width={20} height={20} viewBox="0 0 46 46" fill="none">
      <Circle cx={23} cy={23} r={23} fill="#0397F9" />
      <Path
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        d="M22.5 13.5v19M13.5 23.5h19"
      />
    </Svg>
  )
}

export default SvgComponent
