import React, { useEffect, useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...arg) => {
    try {
      setIsLoading(true);
      const response = await apiFunc(...arg);
      setIsLoading(false);

      if (!response.ok) {
        setData([]);
        return setError(true);
      }

      setError(false);
      setData([...response.data]);

      return response.data;
    } catch (error) {
      console.log("useApi: ", error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return { data, setData, error, isLoading, request };
};
