import React, { Component } from 'react'
import styled from 'styled-components';
import map1 from '../assets/img/map1.png';
import map2 from '../assets/img/mapterapia.png';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
import Input from './components/Intput';


const API_PATH = './src/components/contact-form.php';


const Styles = styled.div`
   .headroom {
     padding-top: 300px;
   }
`;

const TEST_SITE_KEY = "6Lefs50UAAAAACSaRFirMDjEHHKPkXngOaNDPJ5f";

class Contacto extends Component {
  constructor(props) {
    super(props) 


    this.handleSubmit = this.handleSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      isVerified: false,
        name: '',
        subject: '',
        email : '',
        message: '',
        mailSent: false,
        error: null
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
};

handleSubmit() {
  if(this.state.isVerified) {
    alert('Tu mensaje fue enviado exitosamente!');

  } else {
    alert('Favor de verificar que usted es un humano y no un robot!');
  }
}

recaptchaLoaded() {
  console.log('reCaptcha has successfully loaded');
}

verifyCallback(response) {
  if(response) {
    this.setState({
      isVerified: true
    })
  }
}

  handleInputChange = (event) => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <Styles>
      <div className="headroom">
            <div className="container content-wrapper">
              <div className="row">
                      <div className="col-12">
                          <h5 className="fundamental-heading display-4 text-center pt-3">Contacto</h5>
                      </div>
                  <div className="col text-center p-5">
                    <h3 className="find">NOS ENCONTRAMOS EN:</h3> 
                    <h4 className="consult mt-3">CONSULTORIO SUR</h4>
                    <p className="address mt-3">PENNSYLVANIA 291, CASA 7, CD DE LOS DEPORTES, 03710 CIUDAD DE MÉXICO, D.F.</p>
                    <img className="map-box mt-4 img-fluid" src={map1} alt="" />
                  </div>
                  <div className="col text-center p-5">
                    <h3 className="find">NOS ENCONTRAMOS EN:</h3> 
                    <h4 className="consult mt-3">CONSULTORIO SUR</h4>
                    <p className="address mt-3">ORIENTE 164 #406 COL. MOCTEZUMA 2A SECC CD MEX DELEG. VENUSTIANO CARRANZA C.P.15530 MX</p>
                    <img className="map-box mt-4 img-fluid" src={map2} alt="" />
                  </div>
              </div>
              <div className="row">
                  <div className="col-12 p-5 text-center">
                    <p className="help">ESTOY PARA  AYUDARTE</p> 
                    <h4 className="consult mt-3">PREVIA CITA</h4>
                    <h3 className="find">CONSULTORIO : 5785 5219</h3>
                    <p className="whats">WHATSAPP : 55 3459 2553</p>
                  </div>
              </div>
                  <main> 
                  <p className="text-primary text-center form-title pt-3">CONTACTO</p>
                <form method="post" className="contact-form pl-1 pr-1 pb-3" action="./contact-form.php">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="text-white" htmlFor="inputName">Nombre<span className="ast"> *</span></label>
                            <input value={this.state.inputName } onChange={event => this.setState({ inputName: event.target.value })} type="text" className="form-control" id="inputName" name="name" placeholder="Nombre" required aria-required="true" patter="[A-Za-z-0-9]+" />
                        </div>
                        <div className="form-group col-md-12">  
                                <label className="text-white" htmlFor="inputSubject">Asunto</label>
                                <input value={this.state.inputSubject} onChange={event => this.setState({ inputSubject: event.target.value })}type="text" className="form-control" id="inputSubject" name="subject" placeholder="Asunto" patter="[A-Za-z-0-9]+" />
                        </div>
                        <div className="form-group col-md-12">  
                            <label className="text-white" htmlFor="inputEmail4">Correo<span className="ast"> *</span></label>
                            <input value={this.state.inputEmail4} onChange={event => this.setState({ inputEmail4: event.target.value })} type="email" className="form-control" id="inputEmail4"  name="mail" placeholder="Correo Electrónico" required aria-required="true" />
                        </div>
                        <div className="form-group col-md-12">  
                            <label className="text-white" htmlFor="inputTextarea">Mensaje<span className="ast"> *</span></label>
                            <textarea value={this.state.inputTextarea} onChange={event => this.setState({ inputTextarea: event.target.value })} className="form-control" id="inputTextarea"  name="message" placeholder="Mensaje" required aria-required="true"></textarea>
                        </div>                            
                    </div>
                        <Recaptcha 
                          sitekey={TEST_SITE_KEY}
                          render="explicit"
                          onloadCallback={this.recaptchaLoaded}
                          verifyCallback={this.verifyCallback}
                          /> 
                        <button onClick = {event => this.handleFormSubmit(event)} type="submit" name="submit" className="mt-3 shadow btn btn-primary">Enviar</button>
                        <div>{this.state.mailSent &&<div>Gracias por contactarnos.</div>}</div>
                      </form>
                    </main>
                  </div>
              </div>
      </Styles>
    )
  }
}

export default Contacto;