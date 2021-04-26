import React from "react";
import "../asset/Overall.css";

/**
 * Overall component
 *
 * @author Erica Ruiz <eri.ruiz@hotmail.com>
 *
 * @param {React.ComponentProps} props of the Overall
 * @returns {JSX.Element} Overall
 */
const Overall = (props) => {
  const { average24h, average7d, average30d } = props.values;

  return (
    <div className="overall-principal">
      <div className="overall-text">OVERALL UPTIME</div>
      <div className="overall-info">
        <div className="overall-datos">
          {Math.round(average24h)} %<p className="overall-p"> Last 24 Hours</p>
        </div>
        <div className="overall-datos">
          {Math.round(average7d)} %<p className="overall-p"> Last 7 Days</p>
        </div>
        <div className="overall-datos">
          {Math.round(average30d)} %<p className="overall-p"> Last 30 Days</p>
        </div>
      </div>
    </div>
  );
};

export default Overall;
