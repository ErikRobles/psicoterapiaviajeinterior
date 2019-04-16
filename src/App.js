import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViajeInterior from 'psicoterapiaviajeinterior/components/ViajeInterior';
import Terapia from 'psicoterapiaviajeinterior/components/Terapia';
import PreguntasFrecuentes from 'psicoterapiaviajeinterior/components/PreguntasFrecuentes';
import Contacto from 'psicoterapiaviajeinterior/components/Contacto';
import Navbar from 'psicoterapiaviajeinterior/components/CustomNavBar';
import Footer from 'psicoterapiaviajeinterior/components/Footer';
import CV from 'psicoterapiaviajeinterior/components/CV';
import '../node_modules/font-awesome/css/font-awesome.min.css';


class App extends Component { 
  render() {
    return (
      <Router basename="/psicoterapiaviajeinterior/">
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
