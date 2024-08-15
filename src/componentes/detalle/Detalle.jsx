import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';
import './Detalle.css'

const Detalle = () => {
    const location = useLocation();
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [src, setSrc] = useState('');

    useEffect(() => {
        const { nombre, descripcion, src } = location.state || {};
        setNombre(nombre);
        setDescripcion(descripcion);
        setSrc(src);
    }, []);

    return (<>
            <div className="cajaDescripcion">
                <div className="tituloLibro">
                    <div className="libroImg">
                        <img src={src}></img>
                    </div>
                    <div className="libroInfo">
                        <h2>{ nombre }</h2>
                        <p>{ descripcion }</p>
                    </div>
                </div>
                <Footer/>
            </div>
    </>);
};

export default Detalle;