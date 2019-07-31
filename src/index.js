import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Body from './body'
import Footer from './footer'

ReactDOM.render(
  <React.Fragment>
    <Header id="header" />
    <Body id="body" />
    <Footer id="footer" />
  </React.Fragment>,
  document.getElementById('app')
);
module.hot.accept();