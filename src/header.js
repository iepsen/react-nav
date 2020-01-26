import React, { useEffect, useState } from 'react'
import useNav from './use-nav'
import { getHeaderStyle } from './css'

/**
 * Header functional component
 * @param {object} props
 * @param {string} props.id
 */
const Header = ({ id }) => {
  const [style, setStyle] = useState(getHeaderStyle())
  const isActive = useNav({ id, onUp: 'footer', onDown: 'body', active: true })

  useEffect(() => {
    setStyle(getHeaderStyle(isActive))
  }, [isActive])

  return <div style={style}>Header</div>
}

export default Header