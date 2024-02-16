import { NavLink } from "react-router-dom"

const Nav = () => {

 
  return (
    <nav className="nav">
    <h1 className="bannerTitle">Portal Brisas del campo</h1>
        <ul>
            <li><NavLink to='/' className="link">Home</NavLink></li>
            <li><NavLink to='/galeria' className="link">Galeria</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav