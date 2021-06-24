import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 45 46" fill="none">
      <Path
        d="M10 36.5l-1.974 6.318a1 1 0 001.187 1.27L20 41.5"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.63 26.044a2 2 0 102.74 2.912l-2.74-2.912zm25.832-7.18a2 2 0 10-2.924-2.729l2.924 2.73zm-9.178 5.61L25.1 26.088l1.183-1.612zm1.322-.123l-1.462-1.365 1.462 1.365zm-8.712-4.28l-1.37-1.457 1.37 1.456zm-6.523 8.885l7.894-7.43-2.742-2.912-7.894 7.43 2.742 2.912zm6.617-7.351l6.113 4.482 2.365-3.225-6.112-4.483-2.366 3.226zm10.08 4.11l6.394-6.85-2.924-2.73-6.394 6.851 2.924 2.73zm-3.967.372a3 3 0 003.967-.372l-2.924-2.729a1 1 0 011.322-.124l-2.365 3.226zm-4.836-4.56a1 1 0 01-1.277.078l2.366-3.226a3 3 0 00-3.83.235l2.74 2.913z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41 21.5C41 30.996 32.89 39 22.5 39c-.711 0-1.412-.038-2.1-.11a.975.975 0 01-.597.59L17 40.5l-3.082.88A23.343 23.343 0 0022.5 43C34.926 43 45 33.374 45 21.5S34.926 0 22.5 0 0 9.626 0 21.5c0 7.693 4.229 14.443 10.586 18.242l1.3-3.902C7.086 32.646 4 27.356 4 21.5 4 12.004 12.11 4 22.5 4S41 12.004 41 21.5z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
