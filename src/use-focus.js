import { useState, useEffect } from 'react'
import { ON_NAV_CHANGE } from './constants'

export const useFocus = ({ focused = false, id }) => {
  const [hasFocus, setHasFocus] = useState(focused)

  const onNavChange = event => {
    setHasFocus(id === event.detail.id)
  }

  useEffect(() => {
    document.addEventListener(ON_NAV_CHANGE, onNavChange)
    return function cleanup() {
      document.removeEventListener(ON_NAV_CHANGE, onNavChange)
    }
  }, [])

  return {
    hasFocus
  }
}