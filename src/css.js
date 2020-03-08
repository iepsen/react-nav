/**
 * Returns common style for each component
 * @param {boolean=} active
 * @returns {React.CSSProperties}
 */
const getCommonStyle = (active = false) => {
  return {
    fontFamily: '\'Roboto\', sans-serif',
    fontSize: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '80px',
    color: active ? 'white' : 'black'
  }
}

/**
 * Returns style for container
 * @returns {React.CSSProperties}
 */
export const getContainerStyle = () => {
  return {
    display: 'flex',
    flexDirection: 'column'
  }
}

/**
 * Returns style for Header component
 * @param {boolean=} active
 * @returns {React.CSSProperties}
 */
export const getHeaderStyle = (active = false) => {
  return {
    ...getCommonStyle(active),
    alignSelf: 'flex-start',
    backgroundColor: active ? 'red' : 'white'
  }
}

/**
 * Returns style for Body component
 * @param {boolean=} active
 * @returns {React.CSSProperties}
 */
export const getBodyStyle = (active = false) => {
  return {
    ...getCommonStyle(active),
    alignSelf: 'center',
    backgroundColor: active ? 'green' : 'white'
  }
}

/**
 * Returns style for Footer component
 * @param {boolean=} active
 * @returns {React.CSSProperties}
 */
export const getFooterStyle = (active = false) => {
  return {
    ...getCommonStyle(active),
    alignSelf: 'flex-end',
    backgroundColor: active ? 'blue' : 'white'
  }
}
