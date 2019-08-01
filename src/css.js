const getCommonStyle = focused => {
  return {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '80px',
    color: focused ? 'white' : 'black',
  }
}

export const getContainerStyle = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
  }
}

export const getHeaderStyle = focused => {
  return {
    ...getCommonStyle(focused),
    alignSelf: 'flex-start',
    backgroundColor: focused ? 'red' : 'white'
  }
}

export const getBodyStyle = focused => {
  return {
    ...getCommonStyle(focused),
    alignSelf: 'center',
    backgroundColor: focused ? 'green' : 'white'
  }
}

export const getFooterStyle = focused => {
  return {
    ...getCommonStyle(focused),
    alignSelf: 'flex-end',
    backgroundColor: focused ? 'blue' : 'white'
  }
}