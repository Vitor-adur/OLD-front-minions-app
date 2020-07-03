import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class EmailForm extends Component {
  constructor(props) {
    super(props)

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
          <input type="number" name="contact_number"/>
          <label>Nome Completo</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Cidade onde Mora</label>
          <input type="text" name="cidade" />
          <label>Fique a vontade para fazer algum comentário:</label>
          <textarea name="html_message" />
          <input type="submit" value="Send" onClick={this.warningSend}/>
        </form>
      </div>
    )
  }
}

export default EmailForm