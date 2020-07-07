import React, { Component } from 'react';
import { Textfield } from 'react-mdl';
import { API } from "aws-amplify";

function productReservation (note) {
   return API.post("reserve", "/reserve", {
        body: note
    });
}

class Reserva extends Component {
    constructor (){
        super();
        this.state = {
            fullname: "",
            email: "",
            contact: ""
        };
        
        this.onChange = this.onChange.bind(this)
    }

    onChange(evento) {
        this.setState({fullname: evento.target.value})
    }

    render(){
        

        return (
            <div className="dados-cliente">
                <h1>Preencha seus dados abaixo:</h1>
                <p>nome: <input name="fullname" onChange={(e) => this.onChange(e)} type="text" /> </p> <br/>
                <p>email:<input name="email" onChange={(e) => this.onChange(e)} type="text" /> <br/></p>
                <p>Contato:<input name="contact" onChange={(e) => this.onChange(e)} type="number" /> <br/></p>

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

            <button onClick = {() => productReservation(this.state.fullname)}> Enviar </button>
            </div>  
                 
        )
    }
}

export default Reserva;