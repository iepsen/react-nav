import React, { useEffect, useState } from 'react'
import { getBodyStyle } from './css'

/**
 * Body functional component
 * @param {object} props
 * @param {boolean} props.isActive
 */
const Body = ({ isActive }) => <div style={getBodyStyle(isActive)}>Body</div>

export default Body