import React from 'react';
import useFetch from "../hooks/FetcHook";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const HomeView = () => {
    const [response, setResponse] = React.useState([]);
   
  return <div>{response.map((item) => (
      console.log(item)
  ))}</div>;
};

export default HomeView;
