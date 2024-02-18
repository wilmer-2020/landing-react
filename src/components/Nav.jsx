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
            <div className="link-container">
            <a className="link-whatsapp" href="">Escribenos</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Whatsapp" className="icon-whatsapp"><g fill="none" stroke="white" strokeMiterlimit="10" className="colorStroke000000 svgStroke"><path d="M8.002.5h-.004C3.863.5.5 3.864.5 8c0 1.64.529 3.161 1.428 4.396l-.935 2.787 2.883-.921A7.448 7.448 0 0 0 8.002 15.5c4.135 0 7.498-3.364 7.498-7.5S12.137.5 8.002.5z" fill="green" className="color000000 svgShape"></path><path d="M12.175 10.931c-.172.484-.858.884-1.405 1.001-.374.079-.862.142-2.507-.534-2.103-.863-3.457-2.982-3.562-3.119-.1-.138-.849-1.122-.849-2.139 0-1.017.522-1.514.732-1.726.172-.175.458-.254.732-.254.088 0 .168.004.24.008.21.008.315.021.454.35.172.413.593 1.43.643 1.534.05.104.101.246.029.384-.067.142-.126.204-.231.325-.105.121-.206.213-.311.342-.097.113-.206.234-.084.442.122.204.542.884 1.161 1.43.799.705 1.447.93 1.678 1.026.172.071.378.054.505-.079.16-.171.358-.454.559-.734.143-.2.324-.225.513-.154.193.067 1.215.567 1.426.671.21.104.349.154.4.242.049.087.049.5-.123.984z" fill="white" className="color000000 svgShape"></path></g></svg>
            </div>
        </ul>
    </nav>
  )
}

export default Nav