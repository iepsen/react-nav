import React from 'react'
import { getHeaderStyle } from './css'

/**
 * Header functional component
 * @param {object} props
 * @param {boolean} props.isActive
 */
const Header = ({ isActive }) => <div style={getHeaderStyle(isActive)}>Header</div>

export default Header