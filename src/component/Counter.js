import React, {useReducer} from 'react'

const initialState = {count: 0};

const reducer = (state, action) => {

  switch(action.type) {
    case 'up':
      return {count: state.count + 1}
    case 'down':
      return {count: state.count - 1}
    case 'initialState':
        return initialState
    default:
      return state
  }



}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>


      <div className="row">
      <h1>Counter</h1>
      <h3>{state.count}</h3>
        <div className="col">
            <button className="btn btn-success m-3" onClick={() => dispatch({type: 'up'})}>+</button>
            <button className="btn btn-danger m-3" onClick={() => dispatch({type: 'down'})}>-</button>
            <button className="btn btn-info m-3" onClick={() => dispatch({type: 'initialState'})}>reset</button>
        </div>
      </div>

    </div>
  )
}

export default Counter
