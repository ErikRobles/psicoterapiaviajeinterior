import React, { Component } from 'react';
import styled from 'styled-components';
import './CV';
import ReactDOM from 'react-dom';


const Styles = styled.div`
   .headroom {
     padding-top: 250px;
   }
`;

export default class CV extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
}
  render() {
    return (
        <Styles>
            <div className="headroom" ref={(ref) => this._div = ref}>
                <div className="container content-wrapper">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <main className="cv mt-5 mb-5">
                                <h2>DESCRIPCION DE PERFIL PROFESIONAL PSIC- GUILLERMINA AMBRIZ L.</h2>
                                <h3 className="text-left">Cédula Prof: <span className="text-primary">10326205</span></h3>
                                <h2 className="text-left">ENERO-2018</h2>
                                <h2 className="text-left">ENFOQUE COGNITIVO CONDUCTUAL, TRANSPERSONAL Y HUMANISTA.</h2>
                                <p className="cv-text text-left">
                                Manejo de terapia, individual, en adolescentes, adultos y personas de la tercera edad con padecimientos de ansiedad, depresión, estrés, dependencia emocional, soledad, tristeza, problemas de pareja o duelo. Manejo de pruebas proyectivas.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Bender-</span> para adolescentes y adultos: detección de retraso mental.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Machover-</span> test de la Proyección de la personalidad en el dibujo de la figura humana-adultos interpretación de la figura humana</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">HTP</span> (casa, árbol, persona) para niños y adultos- descripción de la personalidad, dibujo proyectivo</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Barsit-</span> medición rápida de habilidad intelectual en escolares.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Dominos-</span> medición de la capacidad intelectual, valora la capacidad de una persona para conceptualizar y aplicar el razonamiento a nuevos problemas.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Dibujo de la familia-</span> personalidad-evalúa aspectos emocionales del niño, reconoce las dificultades de adaptación al medio familiar.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Test de adaptación para adolescentes-</span> conocer actitudes de adaptación en, la familia, salud, sociedad y emociones.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Test inventario de hábitos de estudio-</span> detectar hasta que punto el estudiante conoce su oficio de estudiante en condiciones ambientales de estudio, planificación de estudio, utilización de materiales, asimilación de contenidos, sinceridad.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Test cuestionario de aptitudes-</span> aptitudes y habilidades para adolescentes</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Test cuestionario de intereses:</span> Áreas para las cuales son aptos los estudiantes</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Kuder-</span> escala de preferencias vocacional-descubrir preferencias vocacionales.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">HSPQ-</span> Cuestionario de personalidad para adolescentes (12-18 años) diagnóstico y tratamiento de problemas emocionales y de conducta.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Estudio psicológico mediante el rostro. -</span> detección de la personalidad mediante el rosto.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Estudio de CI-Emocional. -</span> evaluación de coeficiente emocional</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Adultos</span></p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Test terman Merril-</span> medición de coeficiente intelectual de las personas que cuentan con un grado de escolaridad de licenciatura. Abarca información o conocimientos, comprensión, significado de palabras, selección lógica, aritmética, juicio practico, analogías, ordenamiento de frases, clasificación, seriación.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Test de frases incompletas de (Sacks)-</span> prueba proyectiva, reflejo de los propios deseos, temores, actitudes en las áreas de adaptación familiar, área del sexo, área de relaciones interpersonales, concepto de si mismo.</p>
                                <p className="cv-text text-left"><span className="font-weight-bold">Zavic personalidad sobre valores e intereses-</span> laboral</p>
                            </main>
                        </div>
                    </div>
            </div>
    </div>
    </Styles>
    )
  }
}
