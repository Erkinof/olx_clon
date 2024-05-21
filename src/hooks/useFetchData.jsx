import { useEffect, useState } from "react";
import instance from '../api/instance';

const UseFetchData = (ENDPOINT) => {
   const [data, setData] = useState ([]);
   const [isLoading, setIsLoadng] = useState (false);
   useEffect(() => {
      setIsLoadng(true)
      instance.get(ENDPOINT)
      .then(response => {
         setData(response.data)
         setIsLoadng(false);
      })
      .catch(err => {
         console.log(err)
         setIsLoadng(false);
      })
      }, [])
      return [data, isLoading]
}

export default UseFetchData;
