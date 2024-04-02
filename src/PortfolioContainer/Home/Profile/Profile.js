import React from "react";

import "./Profile.css";

export default function Profile({ handleContratameClick }) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/ElyJF">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/ely.gdesign/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/%F0%9D%94%BC%F0%9D%95%9D%F0%9D%95%9A%F0%9D%95%AB%F0%9D%95%92%F0%9D%95%93%F0%9D%95%96%F0%9D%95%A5-%F0%9D%95%8A%F0%9D%95%92%F0%9D%95%9F%F0%9D%95%A5%F0%9D%95%92%F0%9D%95%9F%F0%9D%95%92-452936252/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hola, yo soy <span className="highlighted-text">Elizabet</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              
              <h1>
                
              <span>I'AM </span>ENTHUSIASTIC <span>DEV</span>
              </h1>
              <span className="profile-role-tagline">
                Desarrollo del Frontend y Backend de páginas y aplicaciones.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={handleContratameClick}>
              Contrátame
            </button>

            <a
              href="Curriculum_Spanish.pdf"
              download="Ely Curriculum_Spanish.pdf"
            >
              <button className="btn highlighted-btn">Ten mi Currículum</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
