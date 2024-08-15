import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Ingles.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import thesongofachilles from '../imagenes/thesongofachilles.png'
import solitaire from '../imagenes/solitaire.png'
import thelove from '../imagenes/thelove.png'
import once from '../imagenes/once.png'
import Footer from '../footer/Footer';

const LibrosIngles = () => {
    const navigate = useNavigate();
    const [libros, setLibros] = useState([
        {
            src: thesongofachilles,
            nombre: 'Achilles', 
            descripcion: ''
        },
        {
            src: solitaire,
            nombre: 'Solitaire', 
            descripcion: ''
        },
        {
            src: thelove,
            nombre: 'Thelove', 
            descripcion: ''
        },
        {
            src: once,
            nombre: 'Once', 
            descripcion: ''
        },
    ]);
  
    const verDetalleClick = (libro) => {
        navigate('/detalle', { state: libro });
    };

    return (
        <div className="container-libros">
            <div className="libros-titulo">
                <h1>Libros en inglés</h1>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Libros en inglés</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="container-imagenes">
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
            <Footer />
        </div>
    )
}
export default LibrosIngles;