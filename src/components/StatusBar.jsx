import React from "react";

const StatusBar = (api) => {
  const [{ days, title, current_status }] = Object.values(api.value);  
  return (
    <>
      <p>{title}</p>
      <p>{current_status}</p>
      <ul>
        {days.map((day) => (
          <li>{day}</li>
        ))}
      </ul>
    </>
  );
};

export default StatusBar;
