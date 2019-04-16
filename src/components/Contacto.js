import React, { Component } from 'react'
import styled from 'styled-components';
import map1 from '../assets/img/map1.png';
import map2 from '../assets/img/mapterapia.png';
import Recaptcha from './RecaptchaFunction';
import axios from 'axios';


const Styles = styled.div`
   .headroom {
     padding-top: 300px;
   }
   .successText {
     border: 3px solid green;
     padding: 5px 15px;
     font-weight: bold;
     color: #fff;
   }
`;

//const API_PATH = 'http://www.rrspark.com/psicoterapiaviajeinterior/api/contact/index.php';
const API_PATH='http://www.psicoterapiaviajeinterior.com/api/api.php'
console.log(API_PATH);
class Contacto extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      mail: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit( e ) {
    e.preventDefault();
    console.log(this.state);
/*    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
    .then(result => {
      this.setState( {
        mailSent: result.data.sent
      })
      console.log(this.state);
    })
    .catch(error => this.setState( { error: error.message } ));
    */
    var formdata=new FormData();
    formdata.append("name",this.state.name);
    formdata.append("mail",this.state.mail);
    formdata.append("subject",this.state.subject);
    formdata.append("message",this.state.message);

    axios.post(API_PATH,formdata,{
      headers: {
     'Content-Type': 'multipart/form-data'
    }
    })
    .then(res=>{
  //    console.log("axios response "+JSON.stringify(res));
      console.log("rest data "+res.data);
      this.setState( {
        mailSent: res.data.sent
      })
      console.log(this.state);
    }).catch(error=>this.setState({error:error.message}));

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
                    <img className="map-box mt-4 img-fluid" src={map1} alt="google mapa del sitio 1" />
                  </div>
                  <div className="col text-center p-5">
                    <h3 className="find">NOS ENCONTRAMOS EN:</h3>
                    <h4 className="consult mt-3">CONSULTORIO SUR</h4>
                    <p className="address mt-3">ORIENTE 164 #406 COL. MOCTEZUMA 2A SECC CD MEX DELEG. VENUSTIANO CARRANZA C.P.15530 MX</p>
                    <img className="map-box mt-4 img-fluid" src={map2} alt="google mapa del sitio 2" />
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
                <form className="contact-form pl-1 pr-1 pb-3" id="contactform" action="#">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="text-white" htmlFor="inputName">Nombre<span className="ast"> *</span></label>
                            <input value={this.state.name} onChange={e => this.setState({ name: e.target.value})} type="text" className="form-control" id="name" name="name" placeholder="Nombre" required aria-required="true" patter="[A-Za-z-0-9]+" />
                        </div>
                        <div className="form-group col-md-12">
                                <label className="text-white" htmlFor="inputSubject">Asunto</label>
                                <input value={this.state.subject} onChange={e => this.setState({ subject: e.target.value})} type="text" className="form-control" id="subject" name="subject" placeholder="Asunto" patter="[A-Za-z-0-9]+" />
                        </div>
                        <div className="form-group col-md-12">
                            <label className="text-white" htmlFor="inputEmail4">Correo<span className="ast"> *</span></label>
                            <input value={this.state.mail} onChange={e => this.setState({ mail: e.target.value})} type="email" className="form-control" id="mail"  name="mail" placeholder="Correo Electrónico" required aria-required="true" />
                        </div>
                        <div className="form-group col-md-12">
                            <label className="text-white" htmlFor="inputTextarea">Mensaje<span className="ast"> *</span></label>
                            <textarea value={this.state.message} onChange={e => this.setState({ message: e.target.value})} className="form-control" id="message"  name="message" placeholder="Mensaje" required aria-required="true"></textarea>
                        </div>
                    </div>
                        <Recaptcha />
                        <button type="submit" onClick={e => this.handleFormSubmit(e)} name="submit" className="mt-3 shadow btn btn-primary">Enviar</button>
                        <div>{this.state.mailSent &&<div className="successText">Gracias por contactarnos.</div>}</div>
                        </form>
                    </main>
                  </div>
              </div>
      </Styles>
    )
  }
}

export default Contacto;
