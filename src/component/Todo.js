import React, {useState} from 'react'
import AddTodoForm from './AddTodoForm'
import { v4 as uuidv4 } from 'uuid';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Todo = () => {

  const [todos, setTodo] = useState([
    {id:1, todo: 'buy milk'},
    {id:2, todo: 'buy bread'}
  ])

  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const myTodoList = todos.map(todo => {
    return (
      <li className="list-group-item" key={todo.id}>{todo.todo}</li>
    )
  })

  const addNewTodo = (newTodo) => {

    if(newTodo !== '') {
      setTodo([...todos, {
        id: uuidv4(),
        todo: newTodo
      }
      ])
      setWarning(false);
      setShow(false);
    } else {
      setWarning(true);
      setShow(true);
    }

  }

  const messageWarning = warning & show &&
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    <p>
      Change this and that and try again. Duis mollis, est non commodo
      luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
      Cras mattis consectetur purus sit amet fermentum.
    </p>
  </Alert>



  return (
    <div className="container">
      <h1>Todo: {todos.length}</h1>

      {messageWarning}
      <ul className="list-group">
        {myTodoList}
      </ul>

      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  )
}

export default Todo
