import useNav from './use-nav'

/**
 *
 * @param {Object} props
 * @param {Function} props.children
 * @param {string} props.id
 * @param {string} [props.onUp]
 * @param {string} [props.onDown]
 * @param {string} [props.onLeft]
 * @param {string} [props.onRight]
 * @param {boolean} [props.active]
 * @returns {React.ReactElement} Nav
 */
const Nav = ({ children, ...props }) => children(useNav(props))

export default Nav
