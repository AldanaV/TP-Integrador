import React from 'react';
import './Ingles.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import thesongofachilles from '../imagenes/thesongofachilles.png'
import solitaire from '../imagenes/solitaire.png'
import thelove from '../imagenes/thelove.png'
import once from '../imagenes/once.png'
import Footer from '../footer/Footer';

const LibrosIngles = () => {
    return (
        <div className="container-ingles">
            <div className="libros-ingles">
                <h1>Libros en inglés</h1>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Libros en inglés</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="contenedor-imagenes">
                <div className="imagenes-ingles">
                <img style={{ height: '54vh' }}
                        src={thesongofachilles}
                        alt='Achilles'
                    />
                </div>
                <div className="imagenes-ingles">
                <img style={{ height: '54vh' }}
                        src={solitaire}
                        alt='Solitaire'
                    />
                </div>
                <div className="imagenes-ingles">
                <img style={{ height: '54vh' }}
                        src={thelove}
                        alt='Thelove'
                    />
                </div>
                <div className="imagenes-ingles">
                <img style={{ height: '54vh' }}
                        src={once}
                        alt='Once'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default LibrosIngles;