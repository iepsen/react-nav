import React from 'react'
import PropTypes from 'prop-types'
import { getBodyStyle } from './css'

/**
 * Body functional component
 * @param {object} props
 * @param {boolean} props.isActive
 */
const Body = ({ isActive }) => <div style={getBodyStyle(isActive)}>Body</div>

Body.propTypes = {
  isActive: PropTypes.bool.isRequired
}

export default Body
