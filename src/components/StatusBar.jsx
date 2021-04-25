import React from "react";
import "../asset/StatusBar.css";

const StatusBar = (api) => {
  const [{ days, title, current_status }] = Object.values(api.value);

  return (
    <div className="principal-statusbar">
      
      <div className="info">
      <div >{title}</div>
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
    </div>
  );
};

/*
<p>{title}</p>
      <p>{current_status}</p>
      <ul>
        {days.map((day) => (
          <li>{day}</li>
        ))}
      </ul>*/

export default StatusBar;
