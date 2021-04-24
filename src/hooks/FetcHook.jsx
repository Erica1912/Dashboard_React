import React from "react";

/**
 * Custom hook for fetching data
 * @param {string} url - Url to fetch
 * @param {options} [options={}] - Fetch options *
 * @returns {{response, error, loading}} - State data *
 * @example

 */
const useFetch = () => {
  const [response, setResponse] = React.useState([]);

  const [error, setError] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        
        const res = await fetch(`http://us-central1-cm-devops-294019.cloudfunctions.net/status`);
        const json = await res.json();

        setResponse(json);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setResponse(null);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    //timeinterval
  }, []);

  return { response, error, isLoading };
};

export default useFetch;
