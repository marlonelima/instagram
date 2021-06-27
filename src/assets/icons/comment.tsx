import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 46 48" fill="none">
      <Path
        d="M35 43l8 2.5L42 32"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.243 40.538A18.55 18.55 0 0123 43C12.587 43 4 34.351 4 23.5S12.587 4 23 4s19 8.649 19 19.5c0 2.675-.522 5.216-1.464 7.526l.483 7.08C44.139 34.094 46 29.02 46 23.5 46 10.521 35.703 0 23 0S0 10.521 0 23.5 10.297 47 23 47c5.303 0 10.188-1.834 14.078-4.915l-4.835-1.547z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
