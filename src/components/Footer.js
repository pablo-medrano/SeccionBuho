import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
           <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                  ¡Conoce mas de nuestra pagina!
                </p> 
                <p className='footer-subscription2-heading'>
                  Plataforma creada por estudiantes de la Universidad de Sonora de la licenciatura en ciencias de la computacion, con el fin de informar de los establecimientos que estan abiertos dentro de la universidad.
                </p> 
                  
            </section>
             <div className="footer-links">
                 <div className='footer-link-wrapper'>
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to='/about-us'>Creadores de la plataforma.</Link>
                        
                    </div>
                    <div className="footer-link-items">
                        <h2>Plataforma</h2>
                        <Link to='/plataforma'>¿Como funciona la plataforma?</Link>
                        
                    </div>
                    <div className="footer-link-items">
                        <h2>Lineamientos</h2>
                        <Link to='/'>Conoce los lineamientos otorgados por la universidad de Sonora!</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Quejas y/o sugerencias</h2>
                        <Link to='/quejas-y-sugerencias'>¿Tienes alguna sugerencia para nuestra pagina?</Link>
                    </div>
                </div>
                
             </div>
             <section className="social-media">
                  
                     <small className="social-logo">Universidad de Sonora</small>
                    
             </section>
        </div>
    );
}

export default Footer;
