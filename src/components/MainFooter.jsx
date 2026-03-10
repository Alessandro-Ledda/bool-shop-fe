import { Link } from "react-router-dom"
import logo from '../assets/boolshop-logo-2nd.svg';

export default function MainFooter() {
    return (
        <>
            <footer className="gym-footer">
                <div className="my-footer">
                    <div className="first-section d-flex justify-content-center">
                        <img className="logo" src={logo} />
                    </div>
                    <div className="info-section d-flex justify-content-center pt-5">
                        <div className="us-link d-flex flex-column col-2">
                            <h5 className="footer-title">SU DI NOI</h5>
                            <Link to={"/"} className="footer-text">Chi siamo</Link >
                            <Link to={"/"} className="footer-text">Lavora con noi</Link >
                            <Link to={"/"} className="footer-text">Production</Link >
                            <Link to={"/"} className="footer-text">Per le aziende</Link >
                            <Link to={"/"} className="footer-text">Testimonianze</Link >
                            <Link to={"/"} className="footer-text">Privacy Policy</Link >
                            <Link to={"/"} className="footer-text">Condizioni vendita</Link >
                            <Link to={"/"} className="footer-text">Cookie</Link >
                        </div>

                        <div className="info-links d-flex flex-column col-2">
                            <h5 className="footer-title">INFORMAZIONI</h5>
                            <Link to={"/"} className="footer-text">Contatti</Link>
                            <Link to={"/"} className="footer-text">Consegne e Spedizioni</Link>
                            <Link to={"/"} className="footer-text">Soddisfatti o Rimborsati</Link>
                            <Link to={"/"} className="footer-text">Metodi di pagamento</Link>
                            <Link to={"/"} className="footer-text">FAQs</Link>
                            <Link to={"/"} className="footer-text">Guest Tracking</Link>
                            <Link to={"/"} className="footer-text">Istruzioni Prodotti</Link>
                            <Link to={"/"} className="footer-text">Fine Serie</Link>
                        </div>
                        <div className="account-links d-flex flex-column col-2">
                            <h5 className="footer-title">ACCOUNT</h5>
                            <Link to={"/"} className="footer-text">Informazioni Personali</Link>
                            <Link to={"/"} className="footer-text">Ordini</Link>
                            <Link to={"/"} className="footer-text">Note di Credito</Link>
                            <Link to={"/"} className="footer-text">Indirizzi</Link>
                            <Link to={"/"} className="footer-text">I miei buoni</Link>
                            <Link to={"/"} className="footer-text">Notifiche Disponibilità</Link>
                            <Link to={"/"} className="footer-text">Le mie liste desideri</Link>
                        </div>

                        <div className="blog-links d-flex flex-column col-2">
                            <h5 className="footer-title">BLOG</h5>
                            <Link to={"/"} className="footer-text">Blog</Link>
                            <Link to={"/"} className="footer-text">Panche</Link>
                            <Link to={"/"} className="footer-text">Home Gym</Link>
                        </div>

                        <div className="service-links d-flex flex-column col-2">
                            <h5 className="footer-title">SERIVIZI</h5>
                            <Link to={"/"} className="footer-text">Noleggio</Link>
                            <Link to={"/"} className="footer-text">Allestimenti</Link>
                            <Link to={"/"} className="footer-text">Progettazione render</Link>
                            <Link to={"/"} className="footer-text">Montaggio</Link>
                            <Link to={"/"} className="footer-text">Home gym</Link>
                            <Link to={"/"} className="footer-text">Acquisto in sede</Link>
                            <Link to={"/"} className="footer-text">Campus ed università</Link>
                        </div>
                    </div>
                </div>
            </footer >

        </>
    )
}