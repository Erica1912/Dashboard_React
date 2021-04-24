import React from 'react';
import useFetch from "../hooks/FetcHook";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const HomeView = () => {
    const { response, error, isLoading } = useFetch();
  if (isLoading) {
    return <h1>Cargando sitio...</h1>;
  }
  if (error) {
    return <h1>{error.toString()}</h1>;
  }
   
  return <div>{response.map((item) => (
      console.log(item)
  ))}</div>;
};

export default HomeView;
