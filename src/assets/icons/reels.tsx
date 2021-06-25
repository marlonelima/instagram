import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={23} height={23} viewBox="0 0 47 47" fill="none">
      <Rect
        x={2}
        y={2}
        width={43}
        height={43}
        rx={14}
        stroke={theme === 'dark' ? '#fff' : '#000'}
        strokeWidth={4}
      />
      <Path
        stroke={theme === 'dark' ? '#fff' : '#000'}
        strokeWidth={4}
        d="M44 13H3M18.153 11.968l-3.987-9.171M31.153 11.968l-3.987-9.171"
      />
      <Path
        d="M18 34.33V22.67a1 1 0 011.472-.881l10.883 5.83a1 1 0 010 1.762l-10.883 5.83A1 1 0 0118 34.33z"
        fill={theme === 'dark' ? '#fff' : '#000'}
      />
    </Svg>
  )
}

export default SvgComponent
