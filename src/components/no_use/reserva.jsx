import React, { Component } from 'react';
import { Textfield } from 'react-mdl';
import { API } from "aws-amplify";

function sendmail (note) {
   return API.post("minions", "/minions", {
        body: note
    });
}

class Reserva extends Component {
    constructor (){
        super();
        this.state = {
            nome: "",
            email: ""
        };
        
        this.onChange = this.onChange.bind(this)
    }

    onChange(evento) {
        this.setState({nome: evento.target.value})
    }

    render(){
        

        return (
            <div className="dados-cliente">
                <h1>Preencha seus dados abaixo:</h1>
                <p>nome: <input name="nome" onChange={(e) => this.onChange(e)} type="text" /> </p> <br/>
                <p>email:<input name="email" onChange={(e) => this.onChange(e)} type="text" /> <br/></p>

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
                error="Digite apenas números!"
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

            <button onClick = {() => sendmail(this.state.nome)}> Enviar </button>
            </div>  
                 
        )
    }
}

export default Reserva;