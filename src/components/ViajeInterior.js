import React, { Component } from 'react';
import CustomHeader from './CustomHeader';
import { Link } from 'react-router-dom';
import './ViajeInterior';
import amor from '../assets/img/amorasimismo.png';
import fortaleza from '../assets/img/fortaleza.png';
import herramientas from '../assets/img/herramientas.png';
import ambriz from '../assets/img/ambriz.jpg';
import styled from 'styled-components';

const Styles = styled.div`

`;

class ViajeInterior extends Component {
  render() {
    return (
      <React.Fragment>
          <CustomHeader />
          <Styles>
            <div className="pt-5">
              <div className="starter-phrase">
                      <h3 className="phrase">
                          El recorrido y trabajo que realizo en terapia con el paciente cubre tres aspectos fundamentales:
                      </h3>
                  </div>
              <div className="container mt-4 pt-4">
                  <div className="row">
                      <div className="col-sm text-center">
                          <img className="fundamentales shadow p-2 mb-5 bg-white rounded" src={amor} alt="alguién dijujando un corazon con crayola" />
                          <h5 className="fundamental-heading">AMOR A SÍ MISMO
                          </h5>
                          <p className="fundamental-text w-33.3 p-3">Es la valoración positiva que hace una persona de sí misma en función de sus pensamientos, emociones, experiencias y aceptación personal para respetarse y respetar a los demás.
                          </p>
                      </div>
                      <div className="col-sm text-center">
                          <img className="fundamentales shadow p-2 mb-5 bg-white rounded"  src={fortaleza} alt="alguién caminando por las montañas, puesto de sol atras." />
                          <h5 className="fundamental-heading">FORTALEZAS</h5>
                          <p className="fundamental-text w-33.3 p-3">La naturaleza humana posee dos fuerzas en su interior "fortalezas" y "debilidades". Aprende a desarrollar tus fortalezas y a dominar tus debilidades.
                          </p>
                      </div>
                      <div className="col-sm text-center">
                          <img className="fundamentales shadow p-2 mb-5 bg-white rounded"  src={herramientas} alt="muchas paraguas flotando, sol atras" />
                          <h5 className="fundamental-heading">HERRAMIENTAS</h5>
                          <p className="fundamental-text w-33.3 p-3">El psicólogo es un profesional que conoce diversas técnicas para solucionar las dificultades que enfrentas. Te brindará las herramientas más adecuadas para tu caso.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <img className="fundamentales shadow p-2 mb-5 mt-3 bg-white rounded"  src={ambriz} alt="psicologa Guillermina Ambriz Laguna" />
                          <h5 className="fundamental-heading">PSICÓLOGA</h5>
                          <p className="fundamental-text p-3">"Mi objetivo es acompañar a mi paciente en un viaje a su interior para analizar las causas de sus dificultades y preparale con técnicas y herramientas para que pueda tomar decisiones asertivas y vivir mejor"
                          </p>
                              <Link className="shadow-lg btn btn-primary" to="/CV"><p>CV<br />Guillermina Ambriz Laguna</p></Link>
                      </div>
                  </div>
              </div>
              </div>
              </Styles>
        </React.Fragment>
    )
  }
}

export default ViajeInterior;