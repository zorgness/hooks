import  {useState, useEffect, useDebugValue} from 'react'


const useFetch = (url) => {



   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);


   useDebugValue(data, data => JSON.stringify(data));



   useEffect(() => {



    fetch(url)
    .then(response => response.json())
    .then(json => {
      setData(json);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearInterval();

    })
    .catch(err => { console.log(err.message); });
  }, [url]);

  return {data, isLoading}

}

export default useFetch
