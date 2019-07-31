import React, { useEffect } from 'react'
import { ON_KEY_DOWN, ON_NAV_CHANGE } from './constants'

export const withNav = Component => props => {
  let upId, rightId, downId, leftId = null
  const onNavUp = id => {
    setTimeout(() => {
      upId = id
    }, 0)
  }
  const onNavRight = id => {
    setTimeout(() => {
      rightId = id
    }, 0)
  }
  const onNavDown = id => {
    setTimeout(() => {
      downId = id
    }, 0)
  }
  const onNavLeft = id => {
    setTimeout(() => {
      leftId = id
    }, 0)
  }
  const dispatchEvent = detail => {
    document.dispatchEvent(new CustomEvent(ON_NAV_CHANGE, { detail }))
  }

  const onKeyDown = event => {
    const keys = [37, 38, 39, 40]
    if (!keys.includes(event.keyCode)) {
      return
    }
    switch (event.keyCode) {
      case 37:
        if (!leftId) return
        dispatchEvent({ id: leftId })
      break
      case 38:
        if (!upId) return
        dispatchEvent({ id: upId })
      break
      case 39:
        if (!rightId) return
        dispatchEvent({ id: rightId })
      break
      case 40:
        if (!downId) return
        dispatchEvent({ id: downId })
      break
    }
  }
  useEffect(() => {
    document.addEventListener(ON_KEY_DOWN, onKeyDown)
    return function cleanup() {
      document.removeEventListener(ON_KEY_DOWN, onKeyDown)
    }
  }, [])
  return (
    <Component 
      onNavUp={onNavUp}
      onNavRight={onNavRight}
      onNavDown={onNavDown}
      onNavLeft={onNavLeft}
      {...props} />
  )
}