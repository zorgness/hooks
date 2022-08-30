import React, {useState, useCallback} from 'react'
import Percent from './Percent'
import Button from './Button'

const Progression = () => {

  const [countOne, setCountOne] = useState({value:0, color:"success", increment:25})
  const [countTwo, setCountTwo] = useState({value:0, color:"danger", increment:20})

  const incrementCountOne = useCallback(
    (increment) => {
      countOne.value < 100 && setCountOne({...countOne, value: countOne.value + increment });
      console.log('incrementCountOne');
     }, [countOne])

  const incrementCountTwo = useCallback(
    (increment) => {
      countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + increment });
      console.log('incrementCountTwo');
     }, [countTwo])

  return (

    <div className="container">
      <Percent text="countOne" value={countOne.value} color={countOne.color} />
      <Button handleClick={incrementCountOne} color={countOne.color} increment={countOne.increment}>Count 1</Button>

      <Percent text="countTwo" value={countTwo.value} color={countTwo.color} />
      <Button handleClick={incrementCountTwo} color={countTwo.color} increment={countTwo.increment} >Count 2</Button>

    </div>
  )
}

export default Progression
