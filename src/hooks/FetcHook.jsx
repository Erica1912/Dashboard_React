import React from "react";
import ResponseAdapter from '../adapters/ResponseAdapter'

/**
 * Custom hook for fetching data
 * @param {string} url - Url to fetch
 * @param {options} [options={}] - Fetch options *
 * @returns {{response, error, loading}} - State data *
 * @example

 */
const useFetch = () => {
  const [response, setResponse] = React.useState(null);

  const [error, setError] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `${window.protocol}://us-central1-cm-devops-294019.cloudfunctions.net/status`
        );
        const json = await res.json();
        setResponse(ResponseAdapter.FactoryAll(json));
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setResponse(null);
        setError(error);
        setIsLoading(false);
      }
    };

    const interval = setInterval(fetchData, 120*1000);
    fetchData();
    return () => clearInterval(interval);
    //timeinterval
  }, []);

  return { response, error, isLoading };
};

export default useFetch;
