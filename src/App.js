import './App.css';
import React, {Component} from 'react';
import Todo from './component/Todo';
import FunctionCount from './component/FunctionCount';
import Container from './component/Container';
import { UserContext, ColorContext } from './component/MyContext';
import Profile from './component/Profile';
import Counter from './component/Counter';
import Progression from './component/Progression';
import ProfileContainer from './component/ProfileContainer';
import Input from './component/Input';
import Title from './component/Title';
import Input2 from './component/Input2';
import FancyContainer from './component/FancyContainer';
import Layout from './component/Layout';
import Box from './component/Box';
import SayHello from './component/SayHello';
import MyContact from './component/MyContact';

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



        <MyContact />

        <SayHello />

        <hr />



      <h1>useLayoutEffect</h1>

      <Layout />

      <Box />

      <hr />

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

      <hr />

      <ProfileContainer />

      <hr />
      <Title />
      <Input />

      <hr />

      <Input2 />

      <hr />

      <FancyContainer />





    </div>
  )}
}

export default App;
