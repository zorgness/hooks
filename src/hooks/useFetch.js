import  {useState, useEffect, useDebugValue} from 'react'


const useFetch = (url) => {



   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);


   useDebugValue(data, data => JSON.stringify(data));


   const fetchData = async () => {

      try {

        const response = await fetch(url);
        if(!response.ok) {
          throw new Error('no response from server');
        }

        const fetchedData = await response.json();
        console.log(fetchedData);
        setData(fetchedData);
        setInterval(() => {
              setIsLoading(false);
        }, 2000);
       return () => clearInterval();

      } catch (error) {
        console.log(error.message);
      }

   }


   useEffect(() => {

    fetchData();

   }, [url]);

  //  useEffect(() => {



  //   fetch(url)
  //   .then(response => response.json())
  //   .then(json => {
  //     setData(json);
  //     setInterval(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //     return () => clearInterval();

  //   })
  //   .catch(err => { console.log(err.message); });
  // }, [url]);

  return {data, isLoading}

}

export default useFetch
