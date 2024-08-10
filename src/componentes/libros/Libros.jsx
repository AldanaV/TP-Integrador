import React from 'react';
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
                <div className="imagenes">
                    <img style={{ height: '54vh' }}
                        src={aquiles}
                        alt='Aquiles'
                    />
                </div>
                <div className="imagenes">
                    <img style={{ height: '54vh' }}
                        src={wolf}
                        alt='Wolfsong'
                    />
                </div>
                <div className="imagenes">
                    <img style={{ height: '54vh' }}
                        src={tanpocavida}
                        alt='Tanpocavida'
                    />
                </div>
                <div className="imagenes">
                    <img style={{ height: '54vh' }}
                        src={graceling}
                        alt='Graceling'
                    />
                </div>
                <div className="imagenes">
                    <img style={{ height: '54vh' }}
                        src={sangre}
                        alt='Sangre'
                    />
                </div>
                <div className="imagenes">
                    <img style={{ height: '54vh' }}
                        src={felices}
                        alt='Felices'
                    />
                </div>
                <div className="imagenes">
                    <img style={{ height: '54vh' }}
                        src={reino}
                        alt='Reino'
                    />
                </div>
                <div className="imagenes">
                    <img style={{ height: '54vh' }}
                        src={belladona}
                        alt='Belladona'
                    />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Libros;