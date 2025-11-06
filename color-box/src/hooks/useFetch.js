 import { useCallback, useEffect } from "react";
 import { useState } from "react";

 const useFetch = (url) => {

     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     const fetchData = useCallback(async() => {
         if (!url) return;
         setLoading(true);
         setError(null);

         const response = await fetch(url);
         const json = await response.json();
         setData(json);

         setLoading(false);
     }, [url])

     useEffect(() => {
         fetchData();
     }, [fetchData]);

     return { data, loading, error, refetch: fetchData };
 }

 export default useFetch;