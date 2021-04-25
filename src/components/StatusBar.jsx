import React from "react";
import "../asset/StatusBar.css";

const StatusBar = (props) => {
  const { days, title, current_status, average } = props.values;

  return (
    <div className="principal-statusbar">
      <div className="info">
        <div className="titulos_status">
          <div className="texto-info">{title}</div>
          <div className="status">{current_status}</div>
        </div>
        <div className="principal-bar">
          {days.map((day,i) => {
            if (day <= 60) {
              return <div className="menor" key={i} title={day}></div>;
            }
            if (day < 80) {
              return <div className="entre" key={i} title={day}></div>;
            }            
            return <div className="mayor" key={i} title={day}></div>;
           
          })}
        </div>
        <div className="principal-porcentaje">
          <div className="porcentaje">{average} %</div>
          <div className="dia">Today</div>
        </div>
      </div>
    </div>
  );
};

/*

 

*/

export default StatusBar;
