import React from "react";
import useFetch from "../hooks/FetcHook";
import StatusBar from "../components/StatusBar";
import Header from "../components/Header";

const HomeView = () => {
  const { response, error, isLoading } = useFetch();
  if (isLoading) {
    return <h1>Cargando sitio...</h1>;
  }
  if (error) {
    return <h1>{error.toString()}</h1>;
  }
  console.log(response);
  return (
    <div>
      <Header />
      {response.status.apis.map((api) => (
        <StatusBar value={api} />
      ))}
    </div>
  );
};

export default HomeView;
