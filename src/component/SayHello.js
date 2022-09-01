import React, {useState} from 'react'
import useUpdateTitle from '../hooks/useUpdateTitle'

const SayHello = () => {

  const [text, setText] = useState('');
  useUpdateTitle(text);

  return (
    <div className='m-3'>
      <button onClick={() => setText('Hello World')}>Say Hello in Document Title</button>
    </div>
  )
}

export default SayHello
