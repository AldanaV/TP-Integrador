import GuardarEmail from '../email/Email';
import './Footer.css';

function Footer() {
    return (

        <div>
            <section className="seccion">
                <div className="cajaPrincipal">
                    <div className="cajaSecundaria">
                        <div className="itemInfo">
                            <p className="imagenCaja">
                                <i class="bi bi-box2-heart-fill"></i>
                            </p>
                            <div className="tituloItem">
                                <p>ENVIO GRATIS - En compras superiores a $40.000</p>
                            </div>
                        </div>
                        <div className="itemInfo">
                            <p className="imagenCaja">
                                <i class="bi bi-cash-coin"></i>
                            </p>
                            <div className="tituloItem">
                                <p>DESCUENTO DE 10% - Compras en efectivo</p>
                            </div>
                        </div>
                        <div className="itemInfo">
                            <p className="imagenCaja">
                                <i class="bi bi-geo-alt-fill"></i>
                            </p>
                            <div className="tituloItem">
                                <p>PUNTOS DE ENTREGA - Quilmes - Constitución - Balvanera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GuardarEmail />

            <footer>
                <div className="footer">
                    <p>Derechos reservados © Libreria Nocturna 2024 </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;