import React from 'react';
import Login from "./FormPage/Login";

function RegisterationForm(props) {
  return (
    <form className="register-email-form">
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="register-email-form-container">
        <ul className="register-email-input">
          <input
            className="register-email-field"
            type="email"
            placeholder="Email Address">
          </input>
        </ul>
        <button className="btn register-btn-start" type="button" onClick={handeClick}>
          <span>GET STARTED</span>
          <span style={{"marginLeft": "0.5rem"}}><i className="fas fa-chevron-right"></i></span>
        </button>
      </div>
    </form>
  );


  function handeClick(event){
      let email = document.getElementsByClassName("register-email-field")[0];
      let emailAddress = email.value;

      if(emailAddress !== ""){
        props.setEmail(emailAddress);

        // return <Login email={emailAddress} />;
        // return <a href="/Login"></a>;
      } else {
        email.focus();
        email.placeholder = "EMAIL REQUIRED";
      }
      // check that email is correct @
      // <a href="/Login"></a>
  }
}

export default RegisterationForm;
