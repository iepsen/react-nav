import React, { useEffect, useState } from 'react'
import { withNav } from './with-nav'
import { useFocus } from './use-focus'
import { getBodyStyle } from './css'

const Body = ({ id, onNavUp, onNavDown }) => {
  const [style, setStyle] = useState(getBodyStyle())
  const { hasFocus } = useFocus({ id })

  useEffect(() => {
    setStyle(getBodyStyle(hasFocus))
    if (hasFocus) {
      onNavUp('header')
      onNavDown('footer')  
    } else {
      onNavUp(null)
      onNavDown(null)
    }
  }, [hasFocus])
  return <div style={style}>Body</div>
}

export default withNav(Body)