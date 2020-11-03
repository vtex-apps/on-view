# on-view

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

## Usage

```sh
vtex add vtex.on-view@1.x
```

## API

### `useOnView`

The `onView` function is called whenever the HTML element is inside the viewport. It differs from [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) in that it uses a callback approach instead of using a `setState`, improving performance by preventing unnecessary re-renders.

```tsx
import React from 'react'
import { useOnView } from 'vtex.on-view'

function MyComponent() {
  const element = useRef<HTMLDivElement | null>(null)

  useOnView({
    ref: element,
    once: true,
    onView: () => {
      console.log('Element is visible')
    },
  })

  return <div ref={element}>Hello World</div>
}

export default MyComponent
```

### `useRenderOnView`

It renders a dummy element while the element is not inside the viewport.

```tsx
import React from 'react'
import { useRenderOnView } from 'vtex.on-view'

function MyComponent() {
  const element = useRef<HTMLDivElement | null>(null)

  const { hasBeenViewed, dummyElement } = useRenderOnView({
    lazyRender: true,
  })

  if (!hasBeenViewed) {
    return dummyElement
  }

  return <div>Hello World</div>
}

export default MyComponent
```

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
