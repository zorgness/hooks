import React, {useState} from 'react'
import ClassDisplayKey from './ClassDisplayKey';
import FunctionDisplayKey from './FunctionDisplayKey';

const Container = () => {

  const [show, setShow] = useState(true);

  const btnDisplay = show ? 'show' : 'hide';

  return (
    <div className='text-center'>

      <button className='btn btn-primary m-3' onClick={() => setShow(!show)}>{btnDisplay}</button>

       {
        // show && <ClassDisplayKey />
        show && <FunctionDisplayKey />

       }
    </div>
  )
}

export default Container;
