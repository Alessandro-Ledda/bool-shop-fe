import { Link } from "react-router-dom"

export default function MainFooter() {
    return (
        <>
            <div className="container-footer">
                <div className="first-section">
                    <img className="logo" />immagine
                </div>
                <div className="info-section d-flex">
                    <h5>SU DI NOI</h5>
                    <div className="us-link d-flex flex-column">
                        <Link>Chi siamo</Link>
                        <Link>Lavora con noi</Link>
                        <Link>Production</Link>
                        <Link>Per le aziende</Link>
                        <Link>Testimonianze</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Condizioni vendita</Link>
                        <Link>Cookie</Link>
                    </div>
                    <h5>INFORMAZIONI</h5>
                    <div className="info-links d-flex flex-column">
                        <Link>Contatti</Link>
                        <Link>Consegne e Spedizioni</Link>
                        <Link>Soddisfatti o Rimborsati</Link>
                        <Link>Metodi di pagamento</Link>
                        <Link>FAQs</Link>
                        <Link>Guest Tracking</Link>
                        <Link>Istruzioni Prodotti</Link>
                        <Link>Fine Serie</Link>
                    </div>
                    <h5>ACCOUNT</h5>
                    <div className="account-links d-flex flex-column">
                        <Link>Informazioni Personali</Link>
                        <Link>Ordini</Link>
                        <Link>Note di Credito</Link>
                        <Link>Indirizzi</Link>
                        <Link>I miei buoni</Link>
                        <Link>Notifiche Disponibilità</Link>
                        <Link>Le mie liste desideri</Link>
                    </div>
                    <h5>BLOG</h5>
                    <div className="blog-links d-flex flex-column">
                        <Link>Blog</Link>
                        <Link>Panche</Link>
                        <Link>Home Gym</Link>
                    </div>
                    <h5>SERIVIZI</h5>
                    <div className="service-links d-flex flex-column">
                        <Link>Noleggio</Link>
                        <Link>Allestimenti</Link>
                        <Link>Progettazione render</Link>
                        <Link>Montaggio</Link>
                        <Link>Home gym</Link>
                        <Link>Acquisto in sede</Link>
                        <Link>Campus ed università</Link>
                    </div>
                </div>
            </div>

        </>
    )
}