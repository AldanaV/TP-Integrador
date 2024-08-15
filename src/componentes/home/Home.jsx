import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Carrusel from '../carrusel/Carrusel';
import './Home.css';
import wolf from '../imagenes/wolf.png'
import reino from '../imagenes/reino.png'
import graceling from '../imagenes/graceling.png'
import felices from '../imagenes/felices.png'
import aquiles from '../imagenes/aquiles.png'
import Footer from '../footer/Footer';

const Home = () => {
    const navigate = useNavigate();
    const [libros, setLibros] = useState([
        {
            src: wolf,
            nombre: 'Wolfsong', 
            descripcion: ''
        },
        {
            src: reino,
            nombre: 'Reino', 
            descripcion: ''
        },
        {
            src: graceling,
            nombre: 'Graceling', 
            descripcion: ''
        },
        {
            src: felices,
            nombre: 'Felices', 
            descripcion: ''
        },
        {
            src: aquiles,
            nombre: 'Aquiles', 
            descripcion: ''
        },
        
    ]);
  
    const verDetalleClick = (libro) => {
        navigate('/detalle', { state: libro });
    };

    return(
        <div className='container-total'>
            <Carrusel/>
            <div className='container'>
                <h2 className='titulo'>¡Sumérgete en tu próxima aventura!</h2>
                <h5>Top libros más vendidos:</h5>
                <div className='librosVendidos'>
                    {
                        libros.map((libro) => (
                            <div className='imagenes' key={libro.nombre}>
                                <img 
                                    src={libro.src}
                                    alt={libro.nombre}
                                    onClick={() => verDetalleClick(libro)}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;