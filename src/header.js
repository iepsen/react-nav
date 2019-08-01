import React, { useEffect, useState } from 'react'
import { withNav } from './with-nav'
import { useFocus } from './use-focus'
import { getHeaderStyle } from './css'

const Header = ({ id, onNavUp, onNavDown }) => {
  const [style, setStyle] = useState(getHeaderStyle())
  const { hasFocus } = useFocus({ isFocused: true, id })

  useEffect(() => {
    setStyle(getHeaderStyle(hasFocus))
    if (hasFocus) {
      onNavDown('body')
      onNavUp('footer')
    } else {
      onNavDown(null)
      onNavUp(null)
    }
  }, [hasFocus])
  return <div style={style}>Header</div>
}

export default withNav(Header)