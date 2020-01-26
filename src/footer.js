import React, { useEffect, useState } from 'react'
import useNav from './use-nav'
import { getFooterStyle } from './css'

/**
 * Footer functional component
 * @param {object} props
 * @param {string} props.id
 */
const Footer = ({ id }) => {
  const [style, setStyle] = useState(getFooterStyle())
  const isActive = useNav({ id, onUp: 'body', onDown: 'header' })

  useEffect(() => {
    setStyle(getFooterStyle(isActive))
  }, [isActive])

  return <div style={style}>Footer</div>
}

export default Footer