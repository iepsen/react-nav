import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Body from './body'
import Footer from './footer'
import { getContainerStyle } from './css'

ReactDOM.render(
  <div style={getContainerStyle()}>
    <Header id="header" />
    <Body id="body" />
    <Footer id="footer" />
  </div>,
  document.getElementById('app')
);
module.hot.accept();