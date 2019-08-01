import React, { useEffect, useState } from 'react'
import { withNav } from './with-nav'
import { useFocus } from './use-focus'
import { getFooterStyle } from './css'

const Footer = ({ id, onNavUp, onNavDown }) => {
  const [style, setStyle] = useState(getFooterStyle())
  const { hasFocus } = useFocus({ id })

  useEffect(() => {
    setStyle(getFooterStyle(hasFocus))
    if (hasFocus) {
      onNavUp('body')
      onNavDown('header')
    } else {
      onNavUp(null)
      onNavDown(null)
    }
  }, [hasFocus])
  return <div style={style}>Footer</div>
}

export default withNav(Footer)