import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("error");

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(url, { ...options });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      setData(result);

      setError("");
      setLoading(false);
    } catch (error) {
      setError(`Error occured: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
}
