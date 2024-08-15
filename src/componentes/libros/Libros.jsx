import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Libros.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import aquiles from '../imagenes/aquiles.png'
import wolf from '../imagenes/wolf.png'
import graceling from '../imagenes/graceling.png'
import felices from '../imagenes/felices.png'
import reino from '../imagenes/reino.png'
import sangre from '../imagenes/sangre.png'
import tanpocavida from '../imagenes/tanpocavida.png'
import belladona from '../imagenes/belladona.png'
import Footer from '../footer/Footer';

const Libros = () => {
    const navigate = useNavigate();
    const [libros, setLibros] = useState([
        {
            src: wolf,
            nombre: 'LA CANCION DEL LOBO', 
            descripcion: 'Ox nunca tuvo a nadie, hasta que un extraño chico le tendió la mano y lo condujo a un mundo donde lo maravilloso es posible. Le dio un hogar. Una familia. Una manada. Pero allí donde vive lo increíble también lo hacen las pesadillas. Y aunque Ox es solo un humano, muy pronto deberá alzar su aullido y pelear con uñas y dientes por quienes ama. Cae en las garras de la historia que ha cautivado a miles de lectores en todo el mundo.',
            precio: '$23.000',
            editorial: 'V&R EDITORAS SA',
            paginas: '704',
            isbn: '9789877475173',
            categoria: 'Ficción contemporánea',
            autor : 'KLUNE, T.J.'

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
        {
            src: sangre,
            nombre: 'Sangre', 
            descripcion: ''
        },
        {
            src: tanpocavida,
            nombre: 'Tanpocavida', 
            descripcion: ''
        },
        {
            src: belladona,
            nombre: 'Belladona', 
            descripcion: ''
        },
    ]);
  
    const verDetalleClick = (libro) => {
        navigate('/detalle', { state: libro });
    };

    return (
        <div className="container-libros">
            <div className="libros-titulo">
                <h1>Libros</h1>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Libros</Breadcrumb.Item>
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

export default Libros;