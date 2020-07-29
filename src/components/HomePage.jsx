import React from "react";
import headerLogo from "../icons/logo.svg";
import Footer from "./Footer";
import {homePageFooterlinks} from "../data/links";
import RegisterationForm from "./RegisterationForm";
import backgroundImage from "../images/bg.jpg";
import StoryContainer from "./StoryContainer";
import QuestionsDisplay from "./QuestionsDisplay";
import questions from "../data/questions";

function HomePage(props) {
  return (
    <div className="page-container">
      {header()}
      {registerContainer()}
      <StoryContainer
        title="Enjoy on you TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        cssImageCover="device-tv-img"
        imageCover="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        imageContent="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        isFlipped={false}
        isVideo={true}/>
      <StoryContainer
        title="Download your shows to watch offline."
        subtitle="Save your favorites easily and always have something to watch."
        cssImageCover="device-phone-img"
        imageCover="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        imageContent="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
        isFlipped={true}
        isVideo={false}/>
      <StoryContainer
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        cssImageCover="device-desktop-img"
        imageCover="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        imageContent="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
        isFlipped={false}
        isVideo={true}/>
      <QuestionsDisplay
        title="Frequently Asked Questions"
        questions={questions}/>
      <Footer
        title={() =>{
          return(
            <p>Questions? Call<a className="footer-number" href="tel:1-844-505-2993">1-844-505-2993</a></p>
        )}}
        pageLinks={homePageFooterlinks}/>
  </div>)




  function header() {
    return (
      <header className="header-homepage-container">
        <div style={{"margin": "0 45px"}}>
          <img src={headerLogo} alt="Netflix Logo"/>
          <a className="signIn-btn" href="/Login">Sign In</a>
        </div>
      </header>
    );
  }

  function registerContainer(){
    return(
      <div className="basic-container">
        <div className="register-image-container">
          <img className="register-image" src={backgroundImage} alt=""/>
          <div className="register-image-gradient"></div>
        </div>

        <div className="register-text">
          <h1 className="register-title">Unlimited movies, TV shows, and more.</h1>
          <h2 className="register-subtitle">Watch anywhere. Cancel anytime.</h2>
          <RegisterationForm setEmail={props.setEmail}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
