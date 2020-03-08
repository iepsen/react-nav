import React from 'react'
import PropTypes from 'prop-types'
import { getHeaderStyle } from './css'

/**
 * Header functional component
 * @param {object} props
 * @param {boolean} props.isActive
 */
const Header = ({ isActive }) => <div style={getHeaderStyle(isActive)}>Header</div>

Header.propTypes = {
  isActive: PropTypes.bool.isRequired
}

export default Header
