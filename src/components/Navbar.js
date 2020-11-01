import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    //para cuando haga pequeña la pestaña el boton de sign up no aparezca cada vez que actualizo la pagina
    useEffect(() => {
        showButton()
    }, []);
    //----------------------------------------------------------------------------------------------------

    window.addEventListener('resize', showButton);

    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   Universidad de Sonora <i className='fab fa-typo3'/>
                </Link>  
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                           Inicio
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/IniciarSesion' className='nav-links' onClick={closeMobileMenu}>
                           Iniciar sesion
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Sign up
                       </Link>
                   </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'>Registrarse</Button>}
            </div>
        </nav>
       </>
    );
}

export default Navbar;

/*<li className='nav-item'>
                       <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                           Iniciar sesion
                       </Link>
     </li>*/