import React from "react";
import Principal from "../img/coordinadora-principal.png";
import "../asset/Header.css";

/**
 * Header component
 *
 * @author Erica Ruiz <eri.ruiz@hotmail.com>
 *
 * @returns {JSX.Element} Header
 */
const Header = () => {
  const date = new Date();
  
  return (
    <div className="inicio">
      <img src={Principal} alt="Principal" className="imagen-principal" />
      <div className="principal">
        <div className="texto-principal">All systems operational {"     "}</div>
        <div className="texto">
          Refreshes {"  "} {date.getHours()} : {"  "} {date.getMinutes()} : {"  "}{" "}
          {date.getSeconds()} UTC-0400
        </div>
      </div>
    </div>
  );
};

export default Header;
