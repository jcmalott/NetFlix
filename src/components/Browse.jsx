import React from "react";
import Footer from "./Footer";
import {browseFooterlinks, browseHeaderLinks} from "../data/links";
import {watchAgain, trending, continueWatching} from "../data/categories"
import logo from "../icons/logo.svg";

function Browse() {
  const [isDropDown, setDropDown] = React.useState(true);
  const categories = [watchAgain, continueWatching, trending];
  const backgroundImage = "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQ-CY2DQSSTYeOWZwlwto6Gyk-4A7TO7wRkFA5ZiUXPvQZUIcqcSGUU-bEXtVQpPPf5FjqwyjLhiJvYAfgsVZh4kuU0S.webp?r=efa";

  function hideDropDown() {
    setDropDown(!isDropDown);
  }

  return (
    <div className="page-container">
      {header()}
      {topContainer()}
      {bodyContainer()}
      <Footer title={() => {
          return (
            <div className="footer-socials">
              <a href="https://www.facebook.com/netflixus"><i class="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/Netflix/"><i class="fab fa-instagram"></i></a>
              <a href="https://twitter.com/netflix"><i class="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com/user/NewOnNetflix"><i class="fab fa-youtube"></i></a>
            </div>
        )}}
        copyright={true}
        pageLinks={browseFooterlinks}/>
    </div>);




  function header(){
    return(
      <div className="browse-header">
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="left-side-wrapper">
            <img className="navbar-logo" src={logo} alt="Netflix logo"></img>

            {/* Expanded Menu Width > 950px*/}
            <div className="links-nav">
              <ul className="navbar-nav">
                {browseHeaderLinks.map(link => {
                    return (
                      <li className="nav-item active">
                        <a className="nav-link" href={link.link}>{link.title}</a>
                      </li>
                  )})}
              </ul>
            </div>
          </div>

            {/* Dropdown Menu Width < 950px*/}
            <div className="links-dropdown">
              <button
                className="btn-dropdown"
                onMouseOver={hideDropDown}>
                Browse<i class="fas fa-sort-down"></i>
              </button>
              <div className="dropdown-content" hidden={isDropDown}>
                {browseHeaderLinks.map(link => {
                    return (
                      <a className="nav-link" href={link.link}>{link.title}</a>
                    )})}
              </div>
            </div>

          <form class="header-form">
            <button><i class="fas fa-search"></i></button>
            <button><i class="fas fa-gift"></i></button>
            <a href="https://www.netflix.com/referfriends"><i class="fas fa-bell"></i></a>
            <button><i class="fas fa-user-circle"></i></button>
          </form>
        </nav>
      </div>
    );
  }

  function topContainer(){
    return(
      <div className="browse-top">
          <div className="preview-image-container">
            <img className="preview-image" src={backgroundImage} alt="preview"></img>
            <div className="browse-image-gradient"></div>
          </div>
          <div className="preview-description">
            <img src="https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABaJoyJR0bZsIeLW4FY7vZJcvHV2FS6Me1on1VwTq6sluh9Bbp8qd2r5fUTNtJNFJTcJMYMSor9a2qRFx5WSK7_Ramm58tVMOKu-l.webp?r=27a" alt="preview title"></img>
            <h3>Archie's got an edge, Veronica's got a rep, Betty's got moxie, and Jughead's got attitude. Welcome to the new Riverdale.</h3>
            <div className="preview-btn-container">
              <button className="btn btn-light preview-buttons"><i class="fas fa-play preview-btn-icon"></i>Play</button>
              <button className="btn btn-grey preview-buttons"><i class="fas fa-info-circle preview-btn-icon"></i>More Info</button>
            </div>
          </div>
          <div className="btn-replay-container">
            <i class="fas fa-redo-alt"></i>
            <div className="btn-replay-text-container">
              <label>TV-14</label>
            </div>
          </div>
      </div>
    );
  }

  function bodyContainer(){
    return(
      <div className="browse-body">
        <table>
          {categories.map(category => {
            return(
              <div className="row-container">
                <tr><th className="row-header">{category.title}</th></tr>
                <tr>
                  {category.movies.map(movie => {
                     return(
                      <td style={{"padding": "0"}}>
                        <img className="browse-img" src={movie.link} alt={movie.title}></img>
                      </td>
                   )})}
                 </tr>
              </div>
          )})}
        </table>
      </div>
    );
  }
}

export default Browse;
