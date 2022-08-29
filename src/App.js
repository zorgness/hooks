import './App.css';
import React, {Component} from 'react';
import Todo from './component/Todo';
import FunctionCount from './component/FunctionCount';
import Container from './component/Container';
import { UserContext, ColorContext } from './component/MyContext';
import Profile from './component/Profile';

class App extends Component {

  state = {
    user: {
      name: "lisa",
      age: 8
    },
    colorUser: 'red'
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





    </div>
  )}
}

export default App;
