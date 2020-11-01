import React from 'react';
import '../App.css'
import './LaInfodeNosotros.css';
import {Link} from 'react-router-dom';


function HeroSection() {
    return (
        <div className='hero-container2'>
            <h1>Creacion de la plataforma</h1>
                <p>
                    La plataforma fue creada para la materia de Ingenieria II a cargo del profesor Mireles.
                </p>

                <p>Los creadores son:</p>
                <q>
                    Diana Ballesteros.
                </q>
                <p>
                    De Hermosillo, Sonora. Actual estudiante. 
                </p>
                <q>
                    José Ibarra.
                </q>
                <p>
                    De Hermosillo, Sonora. Actual estudiante. 
                </p>
                <q>
                    Antonio Medina.
                </q>
                <p>
                    De Mochis, Sinaloa. Actual estudiante. 
                </p>
                <q>
                    Oscar Soto.
                </q>
                <p>
                    De Hermosillo, Sonora. Actual estudiante. 
                </p>
               
        </div>
    );
}

export default HeroSection;
