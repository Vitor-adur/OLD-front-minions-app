import React, { Component } from 'react';
import { Textfield } from 'react-mdl';

class Reserva extends Component {
    render(){
        return (
            <div className="dados-cliente">
                <h1>Preencha seus dados abaixo:</h1>

                {/* Textfield with floating label */}
             <Textfield className="nome-completo"
                onChange={() => {}}
                label="Nome completo"
                floatingLabel
                style={{width: '400px'}}
            />

            {/* Textfield with floating label */}
            <Textfield className="email"
                onChange={() => {}}
                label="Email"
                floatingLabel
                style={{width: '400px'}}
            />
            
            {/* Numeric Textfield with floating label */}
            <Textfield className="celular-numero"
                onChange={() => {}}
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
                label="Celular"
                floatingLabel
            />

                <h1>fique a vontade para fazer um comentário sobre nosso serviços!</h1>
                {/* Floating Multiline Textfield */}
            <Textfield
              onChange={() => {}}
              label="Text lines..."
              rows={3}
              style={{width: '700px'}}
            />

            <button> Enviar </button>
            </div>  
                 
        )
    }
}

export default Reserva;