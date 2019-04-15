import React, { Component } from 'react'
import styled from 'styled-components';
import sofa from '../assets/img/sofa.jpg';

const Styles = styled.div`
   .headroom {
     padding-top: 250px;
   }
   .fundamental-heading {
    font-size: 26px;
    font-weight: 900;
    font-family: Times, Times New Roman, Georgia, serif;
    text-shadow: 1px 0px 12px rgba(102,102,102,0.5);
}

.fundamental-text {
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    color: #808080;
}
`;

class Terapia extends Component {
  render() {
    return (
      <Styles>
      <div className="headroom">
            <div className="container content-wrapper">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h5 className="fundamental-heading mt-5 display-4">Servicios</h5>
                      <img className="fundamentales shadow p-2 mb-5 mt-3 bg-white rounded"  src={sofa} width="325px" alt="" />
                  </div>
              </div>
              <div className="row">
                      <div className="col-sm text-center p-5">
                          <h5 className="fundamental-heading">TERAPIAS
                          </h5>
                          <p className="fundamental-text w-33.3 p-3">Es el encuentro entre el psicólogo y el paciente en un ambiente de aceptación, confidencialidad y apertura que facilitará al paciente expresar los problemas y emociones que le aquejan para seguir un tratamiento que pueda ayudarle a resolverlas.</p>
                          <ul className="text-center ml-2">
                              <li className="bulleted-text text-left">TERAPIA INDIVIDUAL</li>
                              <li className="bulleted-text text-left">TERAPIA DE PAREJA</li>
                              <li className="bulleted-text text-left">TERAPIA FAMILIAR</li>
                              <li className="bulleted-text text-left">TERAPIA DE GRUPO</li>
                              <li className="bulleted-text text-left">COGNITIVO CONDUCTUAL</li>
                              <li className="bulleted-text text-left">TERAPIA TRANSPERSONAL INTEGRATIVA</li>
                          </ul>
                      </div>
                      <div className="col-sm text-center p-5">
                          <h5 className="fundamental-heading">TALLERES</h5>
                          <p className="fundamental-text w-33.3 p-3">Los temas que se tratan en los talleres psicológicos son aquellos que los pacientes escogen para mejorar su vida futura, que tienen tanta importancia en nuestra vida general pues mejoran la comunicación del paciente con las personas que le rodean.
                          </p>
                          <ul className="text-center ml-2">
                                  <li className="bulleted-text text-left">COMUNICACIÓN EN PAREJA</li>
                                  <li className="bulleted-text text-left">LÍMITES A LOS HIJOS</li>
                                  <li className="bulleted-text text-left">AUTOESTIMA</li>
                                  <li className="bulleted-text text-left">PÉRDIA Y DUELO</li>
                              </ul>
                      </div>
                </div>
          </div>
        </div>
      </Styles>
    )
  }
}

export default Terapia;