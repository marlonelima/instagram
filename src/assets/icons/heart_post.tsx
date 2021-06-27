import * as React from 'react'
import Svg, { Path, Rect, Circle, Line, Mask } from 'react-native-svg'

interface IProps {
  theme: string
}

function SvgComponent({ theme }: IProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 55 50" fill="none">
      <Path
        d="M38.948 4.55c3.077 0 5.97 1.203 8.145 3.388 4.491 4.51 4.491 11.851 0 16.362L35.645 35.8 27.5 43.98l-8.145-8.18L7.907 24.3c-4.49-4.511-4.49-11.851 0-16.363a11.418 11.418 0 018.145-3.388c3.077 0 5.97 1.203 8.145 3.388l.805.809 2.498 2.51 2.498-2.51.805-.808a11.417 11.417 0 018.145-3.389zm0-3.55a14.97 14.97 0 00-10.643 4.428l-.805.809-.805-.809A14.97 14.97 0 0016.052 1 14.971 14.971 0 005.41 5.428c-5.879 5.905-5.879 15.477 0 21.382l11.448 11.499s0 0 0 0L27.5 49l10.643-10.69 11.448-11.5c5.879-5.904 5.879-15.477 0-21.381A14.966 14.966 0 0038.948 1z"
        fill="#fff"
        stroke="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
