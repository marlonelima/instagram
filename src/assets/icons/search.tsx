import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={23} height={21} viewBox="0 0 48 47" fill="none">
      <Circle
        cx={20.5}
        cy={20.5}
        r={18.5}
        stroke={theme === 'dark' ? '#fff' : '#000'}
        strokeWidth={4}
      />
      <Path
        stroke={theme === 'dark' ? '#fff' : '#000'}
        strokeWidth={4}
        strokeLinecap="round"
        d="M34.826 34.887l10.061 9.287"
      />
    </Svg>
  )
}

export default SvgComponent
