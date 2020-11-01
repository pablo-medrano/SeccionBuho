import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';
import Plataforma from './components/pages/Plataforma';
import QuejasYSugerencias from './components/pages/QuejasYSugerencias';





function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/about-us' exact component={AboutUs}/>
        <Route path='/plataforma' exact component={Plataforma}/>
        <Route path='/quejas-y-sugerencias' exact component={QuejasYSugerencias}/>

      </Switch>
    </Router>
    </>
  );
}

export default App;
