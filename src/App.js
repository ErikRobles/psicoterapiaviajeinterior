import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViajeInterior from './components/ViajeInterior';
import Terapia from './components/Terapia';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Contacto from './components/Contacto';
import Navbar from './components/CustomNavBar';
import Footer from './components/Footer';
import CV from './components/CV';
import '../node_modules/font-awesome/css/font-awesome.min.css';


class App extends Component { 
  render() {
    return (
      <Router>
      <div className="App head-image">
      <Navbar></Navbar>
        <Route exact path="/" component={ViajeInterior} />  
        <Route exact path="/terapia" component={Terapia} />      
        <Route exact path="/preguntasfrecuentes" component={PreguntasFrecuentes} />      
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/CV" component={CV} />
        <Footer />          
      </div>
      </Router>
    ); 
  }
}

export default App;
