import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTodoForm = ({ addNewTodo}) => {

  const [addTodo, setAddTodo] = useState('')



  const handleTodo = (event) => {
    event.preventDefault();
    addNewTodo(addTodo)

  }

  return (

    <div className="mt-3 card card-body">

        <Form onSubmit={handleTodo}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add todo</Form.Label>
            <Form.Control type="text" placeholder="Enter todo" value={addTodo} onChange={(e) => setAddTodo(e.target.value)} />

          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

    </div>

  )
}

export default AddTodoForm
