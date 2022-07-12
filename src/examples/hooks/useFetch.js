import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setState({ data, isLoading: false, hasError: null });
    } catch (error) {
      setState({ data: null, isLoading: false, hasError: error });
    }
  };
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.isLoading,
  };
};
