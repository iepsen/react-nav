import React, { useEffect, useState } from 'react'
import { withNav } from './with-nav'
import { useFocus } from './use-focus'

const Header = ({ id, onNavUp, onNavDown }) => {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const { hasFocus } = useFocus({ focused: true, id })

  useEffect(() => {
    setBackgroundColor(hasFocus ? 'red' : 'white')
    if (hasFocus) {
      onNavDown('body')
      onNavUp('footer')
    } else {
      onNavDown(null)
      onNavUp(null)
    }
  }, [hasFocus])
  return <div style={{ backgroundColor }}>Header</div>
}

export default withNav(Header)