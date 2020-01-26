import React, { useEffect, useState } from 'react'
import { getFooterStyle } from './css'

/**
 * Footer functional component
 * @param {object} props
 * @param {boolean} props.isActive
 */
const Footer = ({ isActive }) => <div style={getFooterStyle(isActive)}>Footer</div>

export default Footer