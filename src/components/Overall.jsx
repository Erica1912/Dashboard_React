import React from "react";
import "../asset/Overall.css";

const Overall = (props) => {
  const {  average24h, average7d, average30d } = props.values;
  
  return (<div>
      <div>{Math.round( average24h)} %</div>
      <div>{Math.round(average7d)} %</div>
      <div>{Math.round(average30d)} %</div>
  </div>);
};

export default Overall;
