import React from "react";
import useFetch from "../hooks/FetcHook";
import StatusBar from "../components/StatusBar";
import Header from "../components/Header";
import "../asset/HomeView.css";
import Overall from "../components/Overall";

const HomeView = () => {
  const { response, error, isLoading } = useFetch();

  if (isLoading) {
    return <h1>Cargando sitio...</h1>;
  }
  if (error) {
    return <h1>{error.toString()}</h1>;
  }
  const { apis, overall } = response.status;
  
  return (
    <div className="principalView">
      <Header />
      {apis.map((api) => (
        <StatusBar values={api} key={api.title} />
      ))}
      <Overall values={overall} />
    </div>
  );
};

export default HomeView;
