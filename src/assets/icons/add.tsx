import * as React from 'react'
import Svg, { Path, Rect, Circle, Line } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 46 46" fill="none">
      <Rect
        x={2}
        y={2}
        width={42}
        height={42}
        rx={12}
        stroke="#fff"
        strokeWidth={4}
      />
      <Path
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        d="M23 12v22M12 23h22"
      />
    </Svg>
  )
}

export default SvgComponent
