import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './nav'
import Header from './header'
import Body from './body'
import Footer from './footer'
import { getContainerStyle } from './css'

ReactDOM.render(
  <div style={getContainerStyle()}>
    <Nav id="header" onDown="body" active>
      {isActive => (
        <Header isActive={isActive} />
      )}
    </Nav>
    <Nav id="body" onUp="header" onDown="footer">
      {isActive => (
        <Body isActive={isActive} />
      )}
    </Nav>
    <Nav id="footer" onUp="body">
      {isActive => (
        <Footer isActive={isActive} />
      )}
    </Nav>
  </div>,
  document.getElementById('app')
);
module.hot.accept();