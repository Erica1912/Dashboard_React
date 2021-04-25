import React from "react";
import "../asset/StatusBar.css";

const StatusBar = (api) => {
  const [{ days, title, current_status }] = Object.values(api.value);
  let contador = 0;
  let porcentaje=0
  for (let i = 0; i < days.length; i++) {
    contador = days[i]+contador;     
  }
  porcentaje = Math.round(contador/30)
  
  return (
    <div className="principal-statusbar">
      <div className="info">
        <div className="titulos_status">
          <div className="texto-info">{title}</div>
          <div className="status">{current_status}</div>
        </div>
        <div className="principal-bar">
          {days.map((day) => {
            if (day <= 60) {
              return <div className="menor"></div>;
            }
            if (day > 60 && day < 80) {
              return <div className="entre"></div>;
            }
            if (day > 80) {
              return <div className="mayor"></div>;
            }
          })}
        </div>
        <div className="principal-porcentaje">
          <div className="porcentaje">{porcentaje} %</div>
          <div className="dia">Today</div>
        </div>
      </div>
      
    </div>
  );
};

/*

 

*/

export default StatusBar;
