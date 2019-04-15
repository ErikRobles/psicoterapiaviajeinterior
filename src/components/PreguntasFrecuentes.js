import React, { Component } from 'react'
import styled from 'styled-components';
import psiambriz from '../assets/img/psiambriz.jpg';
import num1 from '../assets/img/1.png';
import num2 from '../assets/img/2.png';
import num3 from '../assets/img/3.png';
import { Link } from 'react-router-dom';




const Styles = styled.div`
   .headroom {
     padding-top: 250px;
   }
`;

class PreguntasFrecuentes extends Component {
  render() {
    return (
      <Styles>
        <div className="headroom">
              <div className="container content-wrapper">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h5 className="fundamental-heading mt-5 display-4">Preguntas Frecuentes</h5>
                    </div>
                </div>
                <div className="row">
                        <div className="col-sm text-center p-5">
                            <h5 className="fundamental-heading">¿QUÉ ES UNA TERAPIA?</h5>
                            <p className="fundamental-text w-33.3 p-3">Es el desarrollo del paciente. Se da cuando con ayuda del psicoterapeuta el paciente es capaz de realizar cambios de pensamiento (ideas erroneas), conductas emocionales, actitudes y afectos para mejorar su calidad de vida y la de los que le rodean.</p>
                            
                        </div>
                        <div className="col-sm text-center p-5">
                            <h5 className="fundamental-heading">¿CUÁNTO TIEMPO DURA UNA TERAPIA?</h5>
                            <p className="fundamental-text w-33.3 p-3">La terapia no tiene un tiempo determinado ya que generalmente son varios los problemas que un paciente puede enfrentar.</p>
                        </div>
                </div>
                    <div className="row">
                        <div className="col-sm text-center p-5">
                                <h5 className="fundamental-heading">¿QUÉ ES UNA TERAPIA?</h5>
                                <p className="fundamental-text w-33.3 p-3">Es el desarrollo del paciente. Se da cuando con ayuda del psicoterapeuta el paciente es capaz de realizar cambios de pensamiento (ideas erroneas), conductas emocionales, actitudes y afectos para mejorar su calidad de vida y la de los que le rodean.</p>
                                
                        </div>
                            <div className="col-sm text-center p-5">
                                <h5 className="fundamental-heading">¿CUÁNTO TIEMPO DURA UNA TERAPIA?</h5>
                                <p className="fundamental-text w-33.3 p-3">La terapia no tiene un tiempo determinado ya que generalmente son varios los problemas que un paciente puede enfrentar.</p>
                            </div>
                    </div>
                        <div className="row">
                                <div className="col-sm text-center p-5">
                                        <h5 className="fundamental-heading">¿PUEDO LLEVAR A MI HIJO(A), ESPOSO(A), MADRE O PADRE A TERAPIA?</h5>
                                        <p className="fundamental-text w-33.3 p-3">Sí, cualquier persona que quiera tomar terapia para ayudarse a si mismo, y quiere trabajar y hacer un compromiso para mejorar su vida y la de los suyos puede tomarla.</p>
                                        <img className="fundamentales shadow p-2 mb-5 mt-3 bg-white rounded"  src={psiambriz} alt="" />
                                        <p className="psi">PSIC. GUILLERMINA AMBRIZ</p>
                                        <Link className="shadow btn btn-primary mt-2 mb-2" to="/CV"><p>CV<br />Guillermina Ambriz Laguna</p></Link>
                                </div>
                                    <div className="col-sm text-center p-5">
                                        <h5 className="fundamental-heading mb-5">¿QUÉ NECESITAS PARA TOMAR TERAPIA?</h5>
                                        <div className="itemize-wrapper">
                                            <div className="row border-bottom border-secondary">
                                                <div className="col-3 text-left">
                                                    <img className="numbers" src={num1} alt="" />
                                                </div>
                                                <div className="col-9">
                                                    <p className="psi float-right">RECONOCER QUE NECESITAS AYUDA</p>
                                                </div>
                                            </div>
                                            <div className="row border-bottom border-secondary mt-5">
                                                <div className="col-3 text-left">
                                                    <img className="numbers" src={num2} alt="" />
                                                </div>
                                                <div className="col-9">
                                                    <p className="psi float-right">PEDIR O SOLICITAR AYUDA A UN TERAPEUTA</p>
                                                </div>
                                            </div>
                                            <div className="row border-bottom border-secondary mt-5">
                                            <div className="col-3 text-left">
                                                    <img className="numbers" src={num3} alt="" />
                                            </div>
                                                <div className="col-9">
                                                    <p className="psi float-right">QUERER MEJORAR Y HACER UN COMPROMISO PARA TRABAJAR DE MANERA CONJUNTA CON EL TERAPEUTA</p>
                                                </div>
                                        </div>
                                        </div>                                     
                                    </div>
                              </div>
                        </div>
                </div>

      </Styles>
    )
  }
}

export default PreguntasFrecuentes;