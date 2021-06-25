import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={23} height={23} viewBox="0 0 43 47" fill="none">
      <Rect
        x={2}
        y={12}
        width={39}
        height={33}
        rx={10}
        stroke={theme === 'dark' ? '#fff' : '#000'}
        strokeWidth={4}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.816 17c-.331 2.215-1.086 4.102-2.038 5.482C24.473 24.375 23.071 25 22 25c-1.07 0-2.473-.625-3.778-2.518-.952-1.38-1.707-3.267-2.038-5.482h-4.036c.817 6.817 4.917 12 9.852 12 4.935 0 9.035-5.183 9.852-12h-4.036zm.177-3h4.001C31.812 6.223 27.407 0 22 0s-9.812 6.223-9.994 14h4.001c.088-3.08.987-5.702 2.215-7.482C19.527 4.625 20.929 4 22 4c1.07 0 2.473.625 3.778 2.518 1.228 1.78 2.127 4.401 2.215 7.482z"
        fill={theme === 'dark' ? '#fff' : '#000'}
      />
    </Svg>
  )
}

export default SvgComponent
