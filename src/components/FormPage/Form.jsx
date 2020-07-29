import React from "react";

const Form = ({title}) => {
  const [isChecked, setChecked] = React.useState(true);

  function handleCheck(){
    setChecked(!isChecked);
  }

  return(
    <form method="post">
      <p className="login-title" >{title}</p>
      <div>
        <input className="login-input login-form-fields" type="email" placeholder="Email Address"></input>
      </div>
      <div>
        <input className="login-form-fields" type="password" placeholder="Password"></input>
      </div>
      <div>
        <button className="btn login-button login-form-fields">
          {title}
        </button>
      </div>

      <div className="login-container-bottom">
       <a href="">
         <img className="facebook-logo" src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="facebook logo"></img>
       <span>Login with Facebook</span>
       </a>
      </div>
    </form>
  );
}

export default Form;
