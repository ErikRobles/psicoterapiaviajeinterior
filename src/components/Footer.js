import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

 


const Styles = styled.div`
 .footer {
    background-color: #25a7d9!important;
 }
`;

export default class Footer extends Component {
  render() {
    return (
        <Styles>
        <footer className="footer p-5 mt-5 text-center">
        <div className="container">
          <span className="text-white">Copyright &copy; 2019 RR Spark - Psicoterapia Viaje a Tu Interior</span>
          
              <p className="mt-3">
              <a className="pl-3 pr-3" href="https://www.linkedin.com/in/psic-guillermina-ambriz-laguna-93285b11/" target="blank">
              <i className="fa fa-linkedin fa-2x" style={{color: "white"}}></i>
              </a>
              <Link className="pl-3 pr-3" to="Contacto">
              <i className="fa fa-envelope fa-2x" style={{color: "white"}}></i>
              </Link>
              </p>
        </div>
      </footer>
      </Styles> 
    )
  }
}
