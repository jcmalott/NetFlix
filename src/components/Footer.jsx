import React from "react";

function Footer(props){
  return(
    <footer className="basic-footer-container">
      {(!!props.title && props.title())}
      <ul className="footer-links">
        {props.pageLinks.map(link => {
          return (
            <a className="footer-link-item" href={link.page}>{link.title}</a>
          )
        })}
      </ul>
      {(props.copyright && <p className="footer-copyright">@ 1997-2020 Netflixm inc.</p>)}
    </footer>
  );
}

export default Footer;
