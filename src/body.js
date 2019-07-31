import React, { useEffect, useState } from 'react'
import { withNav } from './with-nav'
import { useFocus } from './use-focus'

const Body = ({ id, onNavUp, onNavDown }) => {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const { hasFocus } = useFocus({ id })

  useEffect(() => {
    setBackgroundColor(hasFocus ? 'red' : 'white')
    if (hasFocus) {
      onNavUp('header')
      onNavDown('footer')  
    } else {
      onNavUp(null)
      onNavDown(null)
    }
  }, [hasFocus])
  return <div style={{ backgroundColor }}>Body</div>
}

export default withNav(Body)