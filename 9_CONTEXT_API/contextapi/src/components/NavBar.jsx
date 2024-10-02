import './NavBar.css'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        <NavLink to='/other'>Mais</NavLink>
    </nav>
  )
}

export default NavBar