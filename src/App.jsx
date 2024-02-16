import Nav from "./components/Nav";
import Home from './Pages/Home';
import Contacto from './Pages/Contacto';
import Galeria from './Pages/Galeria';
import { Routes,Route } from 'react-router-dom';
import './styles/index.css'
import Footer from "./components/Footer";



function App() {

 

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/galeria' element={<Galeria></Galeria>}></Route>
    </Routes>
   
    <Footer/>
    </>
  )
}

export default App
