import React, { useEffect, useState } from 'react'
import { withNav } from './with-nav'
import { useFocus } from './use-focus'

const Footer = ({ id, onNavUp, onNavDown }) => {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const { hasFocus } = useFocus({ id })

  useEffect(() => {
    setBackgroundColor(hasFocus ? 'red' : 'white')
    if (hasFocus) {
      onNavUp('body')
      onNavDown('header')
    } else {
      onNavUp(null)
      onNavDown(null)
    }
  }, [hasFocus])
  return <div style={{ backgroundColor }}>Footer</div>
}

export default withNav(Footer)