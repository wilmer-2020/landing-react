import { NavLink } from "react-router-dom"
import { useState } from "react";
const Nav = () => {

  const [colorNav, setColorNav] = useState('');
  const [colorText, setColorText] = useState('')
  const changeColor = () => {
    if (window.scrollY >= 270) {
      setColorNav('#fffdf8')
      setColorText('#13678A')
    }else{
      setColorNav('transparent')
      setColorText('#fffdf8')
    }
  }

  window.addEventListener("scroll",changeColor)
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