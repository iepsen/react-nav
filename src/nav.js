import React, { useEffect, useState } from 'react'
import useNav from './use-nav'

/**
 * 
 * @param {Object} props
 * @param {Function} props.children
 * @param {string} props.id
 * @param {string} [props.onUp]
 * @param {string} [props.onDown]
 * @param {string} [props.onLeft]
 * @param {string} [props.onRight]
 * @param {boolean} [props.active]
 * @returns {React.ReactElement}
 */
const Nav = ({ children, ...props}) => {
  const isActive = useNav(props)
  return children(isActive)
}

export default Nav