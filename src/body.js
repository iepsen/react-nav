import React, { useEffect, useState } from 'react'
import useNav from './use-nav'
import { getBodyStyle } from './css'

/**
 * Body functional component
 * @param {object} props
 * @param {string} props.id
 */
const Body = ({ id }) => {
  const [style, setStyle] = useState(getBodyStyle())
  const isActive = useNav({ id, onUp: 'header', onDown: 'footer' })

  useEffect(() => {
    setStyle(getBodyStyle(isActive))
  }, [isActive])

  return <div style={style}>Body</div>
}

export default Body