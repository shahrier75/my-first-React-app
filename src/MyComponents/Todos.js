import React from 'react'
import TodoIteam from  "../MyComponents/TodoIteam";

export default function Todos(Props) {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container"  style={myStyle}>
      <h3 className=" my-3" >Todos List</h3> 
     { Props.todos.length===0? "no todos display":
       
      Props.todos.map((todo) => {
        return(
          <>
        return <TodoIteam todo={todo} key={todo.sno} onDelete={Props.onDelete} /> <hr/>
        </>
        )
      })

    }
 
    
    </div>
  )
}
