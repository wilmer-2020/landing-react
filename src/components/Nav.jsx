import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {

  const location = useLocation()
  const [colorNav, setColorNav] = useState('');
  const [colorText, setColorText] = useState('')

  const changeColor = () => {
    if (location.pathname === '/' && window.scrollY >= 270) {
      setColorNav('#fffdf8')
      setColorText('#13678A')
    }else{
      setColorNav('transparent')
      setColorText('#fffdf8')
    }
    if (location.pathname === '/galeria'){
      setColorNav('#fffdf8')
      setColorText('#13678A')
    }
  }
  useEffect(() => {
       changeColor()
      
  }, [location])

  window.addEventListener("scroll",changeColor)
  window.addEventListener("hashchange",changeColor)
  return (
    <nav className='' style={{
      backgroundColor:colorNav
    }}>
    <h1 className="bannerTitle" style={{color:colorText}}>Portal Brisas del campo</h1>
        <ul>
            <li><NavLink to='/' className="link" style={{color:colorText}}>Home</NavLink></li>
            <li><NavLink to='/galeria' className="link" style={{color:colorText}}>Galeria</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav