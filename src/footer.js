import React from 'react'
import PropTypes from 'prop-types'
import { getFooterStyle } from './css'

/**
 * Footer functional component
 * @param {object} props
 * @param {boolean} props.isActive
 */
const Footer = ({ isActive }) => <div style={getFooterStyle(isActive)}>Footer</div>

Footer.propTypes = {
  isActive: PropTypes.bool.isRequired
}

export default Footer
