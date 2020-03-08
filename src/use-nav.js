import { useEffect, useState } from 'react'
import { ON_KEY_DOWN, ON_NAV_CHANGE } from './constants'

/**
 * This hook aims to handle RCU/Keyboard navigation
 * between elements
 *
 * @param {object} props
 * @param {string} props.id
 * @param {boolean} [props.active]
 * @param {string} [props.onUp]
 * @param {string} [props.onDown]
 * @param {string} [props.onLeft]
 * @param {string} [props.onRight]
 * @returns {boolean} isActive
 */
const useNav = ({ id, active = false, onUp = null, onDown = null, onLeft = null, onRight = null }) => {
  const [isActive, setActive] = useState(active)

  useEffect(() => {
    /**
     * Receive the keyboard key and dispatches the callback
     * based on the key pressed
     * @param {KeyboardEvent} event
     */
    const onKeyDown = event => {
      if (!isActive) return
      switch (event.key) {
        case 'ArrowUp':
          dispatchEvent(onUp)
          break
        case 'ArrowDown':
          dispatchEvent(onDown)
          break
        case 'ArrowLeft':
          dispatchEvent(onLeft)
          break
        case 'ArrowRight':
          dispatchEvent(onRight)
          break
        default:
      }
    }

    /**
     * Receive a CustomEvent when a navigation event is fired
     * @param {CustomEvent} event
     */
    const onNavChange = event => setActive(id === event.detail.id)

    /**
     * Fires a CustomEvent with id as details
     * @param {string} nextId
     */
    const dispatchEvent = nextId => {
      if (!nextId) return
      document.dispatchEvent(new CustomEvent(ON_NAV_CHANGE, { detail: { id: nextId } }))
    }

    document.addEventListener(ON_KEY_DOWN, onKeyDown)
    document.addEventListener(ON_NAV_CHANGE, onNavChange)
    return () => {
      document.removeEventListener(ON_KEY_DOWN, onKeyDown)
      document.removeEventListener(ON_NAV_CHANGE, onNavChange)
    }
  })

  return isActive
}

export default useNav
