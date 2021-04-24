import useFetch from "../hooks/FetcHook";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Fragment, useState } from "react";

const HomeView = () => {
    const { response, error, isLoading } = useFetch("", null, []);
   if (isLoading) {
      return <h1>Cargando sitio...</h1>;
    }
    if (error) {
      return <h1>{error.toString()}</h1>;
    }
  return <div>{response.map((response) => (
      console.log(response)
  ))}</div>;
};

export default HomeView;
