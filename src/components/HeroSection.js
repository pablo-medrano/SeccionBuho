import React from 'react';
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-3.mp4' autoPlay loop muted/> 
            <h1>SECCION BUHO</h1>
                <p>
                    Encuentra informacion de servicios dentro de la unison!
                </p>
                <div className="hero-btns">
                    <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                        Busca un servicio!
                    </Button>
                </div>
        </div>
    );
}

export default HeroSection;


//<i className='far fa-play-circle' /> esto iba en el segunfo boton de la primera pagina 
/*<Button 
className='btns' 
buttonStyle='btn--primary'
buttonSize='btn--large'
>
    Si ya sabes que servicio quieres, entra aqui! 
</Button>*/