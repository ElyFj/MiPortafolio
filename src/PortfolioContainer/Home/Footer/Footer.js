import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-parent">
            <img src={require ('../../../assets/Home/shape-bg.png')} alt="footer"/>
            <div className="centered-text">
                Elizabet Santana ©️ Misiones, Argentina
            </div>
            </div>

            
        </div>
    )
}
export default  Footer;