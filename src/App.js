
import './App.css';

import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import MyTodo from "./MyComponents/MyTodo";
import About from "./MyComponents/About";
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
  const onDelete = (todo) => {
    console.log("iam on delete of todo", todo);

    // this way react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    SetTodos(todos.filter((e) => {
      return e !== todo;
    }))


  }

  const myTodo = (title, desc) => {
    console.log("iam adding todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const addTodo = {
      sno: sno,
      title: title,
      desc: desc

    }
    SetTodos([...todos, addTodo])
    console.log(addTodo)

  }


  const [todos, SetTodos] = useState([
    {
      sno: 1,
      title: "go to the market",
      desc: "go to the market and done yor job"

    },

    {
      sno: 2,
      title: "go to the mall",
      desc: "go to the mall and done yor job"

    },

    {
      sno: 3,
      title: "go to the stadium",
      desc: "go to the stadium and done yor job"

    }

  ]);





  return (
    <>
      {/* <Router>
        <Header title="My Todos List" searchBar={true} />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <> */}
                <MyTodo myTodo={myTodo} />
                <Todos todos={todos} onDelete={onDelete} />

              {/* </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router> */}
    </>
  );
}
export default App;
