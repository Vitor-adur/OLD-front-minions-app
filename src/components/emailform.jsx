import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { API } from "aws-amplify";

function productReservation (dev) {
  return API.post("reserve", "/reserve", {
       body: dev
   });
}

class EmailForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        fullname: "",
        email: "",
        contact: ""
  };
    this.sendEmail = this.sendEmail.bind(this)
  }


  sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('gmail', 'template_GAmTPW84', e.target, 'user_4prs5PkBuqPUVKy8LnloR')
      .then((result) => {
//          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
//      }, (error) => {
//          console.log(error.text);
      });
  }

  onChange(evento) {
    this.setState({fullname: evento.target.value})
  }

  warningSend() {
      window.alert("Feito!")
  }

  render() {
    const {
      reserve
    } = this.props

    return(
      <div className="email--form">
        <form className="contact-form" onSubmit={this.sendEmail}>
          <label>Telefone para Contato</label>
          <input type="hidden" value={reserve} name="produto" />
          <input type="number" name="contact"/>
          <label>Nome Completo</label>
          <input type="text" name="fullname" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Cidade onde Mora</label>
          <input type="text" name="cidade" />
          <label>Fique a vontade para fazer algum comentário:</label>
          <textarea name="html_message" />
          <button onClick = {() => productReservation(this.state.fullname)}> Salvar </button>
          <input type="submit" value="Send" onClick={this.warningSend}/>
        </form>
      </div>
    )
  }
}

export default EmailForm