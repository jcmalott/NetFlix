import React from "react";
import Footer from "../Footer";
import BasicBackground from "./BasicBackground";
import Form from "./Form";
import {signinFooterlinks} from "../../data/links";

function NetflixForm({title}) {

  return (
    <div className="page-container">
      <BasicBackground />
      <div className="login-body">
        <div className="login-container">
          <Form title={title}/>
        </div>
      </div>
      <div className="sigin-footer-wrapper">
        <Footer
          title={() =>{
            return(
              <p>Questions? Call<a className="footer-number" href="tel:1-844-505-2993">1-844-505-2993</a></p>
          )}}
          pageLinks={signinFooterlinks}/>
      </div>
    </div>);
}

export default NetflixForm;
