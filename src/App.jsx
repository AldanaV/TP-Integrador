import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import NabVarPrincipal from './componentes/navbar/Nabvar'
import Home from './componentes/home/Home'
import Libros from './componentes/libros/Libros'
import LibrosIngles from './componentes/ingles/Ingles'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componentes/footer/Footer'
import Principal from './componentes/email/Email'
import Contacto from './componentes/contacto/Contacto'




function App() {
  return (

    <div>
      <Router>
        <NabVarPrincipal />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/libros' Component={Libros} />
          <Route path='/ingles' Component={LibrosIngles} />
          <Route path='/contacto' Component={Contacto} />
        </Routes>
      </Router>
        
        
    </div>

  )
}


export default App
