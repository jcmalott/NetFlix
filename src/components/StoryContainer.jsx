import React from "react";

function StoryContainer(props) {
  return (
    <div className="basic-container">
      <div className={"story-container " + (props.isFlipped ? "story-flip-contents" : "")}>
        <div className="story-text">
          <h1 className="story-title">{props.title}</h1>
          <h2 className="story-subtitle">{props.subtitle}</h2>
        </div>

        <div className="device-container-outer">
          <div className="device-container-inner">
            <img className="display-screen" src={props.imageCover} alt=""></img>
            <div className={props.cssImageCover}>
              {displayContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function displayContent() {
    var section;

    if(props.isVideo){
      section = (
        <video className="display-video" autoPlay={true} loop={true}>
          <source src={props.imageContent} type="video/mp4"/>
        </video>
      );
    } else {
      section = (
        <div className="phone-container">
          <img className="phone-movie-img" src={props.imageContent} alt=""></img>
          <div className="phone-text">
            <div className="phone-title">Stranger Things</div>
            <div className="phone-subtitle">Downloading</div>
          </div>
          <img className = "phone-download-img" src = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt=""></img>
        </div>
      );
    }

    return section;
  }
}

export default StoryContainer;
