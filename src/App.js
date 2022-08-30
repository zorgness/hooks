import './App.css';
import React, {Component} from 'react';
import Todo from './component/Todo';
import FunctionCount from './component/FunctionCount';
import Container from './component/Container';
import { UserContext, ColorContext } from './component/MyContext';
import Profile from './component/Profile';
import Counter from './component/Counter';
import Progression from './component/Progression';

class App extends Component {

  state = {
    user: {
      name: "lisa",
      age: 8
    },
    colorUser: 'red',
    countOne: {
      value: 0,
      increment: 25,
      color: "success"
    },
    countTwo: {
      value: 0,
      increment: 25,
      color: "danger"
    },
  }

  render () {

  return (
    <div className="App">

      <Todo />

      <hr/>

      <FunctionCount />

      <hr />

      <Container />



      <hr />
      <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={this.state.colorUser}>
          <Profile />
        </ColorContext.Provider>
      </UserContext.Provider>

      <hr />

      <Counter />

      <hr />

      <Progression />








    </div>
  )}
}

export default App;
