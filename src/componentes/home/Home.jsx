import React from 'react';
import Carrusel from '../carrusel/Carrusel';
import './Home.css';
import wolf from '../imagenes/wolf.png'
import reino from '../imagenes/reino.png'
import graceling from '../imagenes/graceling.png'
import felices from '../imagenes/felices.png'
import aquiles from '../imagenes/aquiles.png'
import Footer from '../footer/Footer';
import RedireccionarLibro from '../redireccionar/Redireccionar';




const Home = () => {
    return(
        <div className='container-total'>
            <Carrusel/>
            <div className='container'>
                <h2 className='titulo'>¡Sumérgete en tu próxima aventura!</h2>
                <div className='librosVendidos'>
                    <h5>Top libros más vendidos:</h5>
                    <div className='imagenes'>
                        <img style={{height:'35vh'}}
                            src={wolf}
                            alt='Wolfsong'
                           // onClick={RedireccionarLibro(Wolfsong)}
                        />
                    </div>
                    <div className='imagenes'>
                        <img style={{height:'35vh'}}
                            src={reino}
                            alt='Reino'
                           // onClick={RedireccionarLibro(Reino)}
                        />
                    </div>
                    <div className='imagenes'>
                        <img style={{height:'35vh'}}
                            src={graceling}
                            alt='Graceling'
                           // onClick={RedireccionarLibro(Graceling)}
                        />
                    </div>
                    <div className='imagenes'>
                        <img style={{height:'35vh'}}
                            src={felices}
                            alt='Felices'
                        />
                    </div>
                    <div className='imagenes'>
                        <img style={{height:'35vh'}}
                            src={aquiles}
                            alt='Aquiles'
                        />
                    </div>
                </div>
            </div>

            <Footer/>


        </div>
    )
}

export default Home;