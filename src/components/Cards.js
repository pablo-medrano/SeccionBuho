import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>
                Nuestra pagina web tiene dos opciones!
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        /* ESTO es lo que aparece en la segunda pantalla
                        debajo del titulo en un cuadrito como imagen*/
                        src="images/registrar2.png"
                        text="¿Tienes agun servicio o manejas uno dentro de la universidad y quieres formar parte de esta comunidad?"
                        /*label='Adventure'*/
                        path='/sign-up'
                        />
                        <CardItem
                        /* ESTO es lo que aparece en la segunda pantalla
                        debajo del titulo en un cuadrito como imagen*/
                        src="images/lupa.jpg"
                        text="¿Eres alumno y quieres saber informacion de algun servicio dentro de la universidad? No necesitas cuenta para eso ve al boton de buscar servicio o da click aqui!"
                        /*label='Luxury'*/
                        path='/services'
                        />
                    </ul>
                     
                </div>
            </div>
            
        </div>
    )
}

export default Cards;

//src="images/img-9.jpg"
//src="images/img-2.jpg"