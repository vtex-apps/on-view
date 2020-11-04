import React, { useState, useRef } from 'react'

import useOnView from './useOnView'

const useRenderOnView = ({
  lazyRender = false,
  height = 400,
  offset = 200,
  waitForUserInteraction = true,
}) => {
  const placeholder = useRef<HTMLDivElement | null>(null)
  const [hasBeenViewed, setHasBeenViewed] = useState(false)

  useOnView({
    ref: placeholder,
    onView: () => setHasBeenViewed(true),
    once: true,
    initializeOnInteraction: waitForUserInteraction,
    bailOut: !lazyRender,
  })

  const placeholderElement = (
    <div
      style={{
        width: '100%',
        height,
        position: 'relative',
      }}
    >
      <div
        ref={placeholder}
        style={{
          /** Allows detecting the view a bit earlier, allowing rendering before the user
           * sees the whitespace where the component should be */
          top: -offset,
          bottom: 0,
          left: 0,
          right: 0,
          position: 'absolute',
        }}
      />
    </div>
  )

  return { hasBeenViewed: hasBeenViewed || !lazyRender, placeholderElement }
}

export default useRenderOnView
