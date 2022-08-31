import { useEffect } from 'react'


const useUpdateTitle = (arg) => {


  useEffect(() => {
    document.title = arg;

  }, [arg])
}

export default useUpdateTitle
