import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <div className="data-fiscal">
        <a
          href="http://qr.afip.gob.ar/?qr=EGp1_Oq1RjHRDhXXQs6DuA,,"
          target="_F960AFIPInfo"
        >
          <img
            src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"
            alt="Data Fiscal"
          />
        </a>
      </div>
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
