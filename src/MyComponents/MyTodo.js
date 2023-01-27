import React, { useState } from 'react';

export default function MyTodo({myTodo}) {
    const [title,setTitle]= useState("");
    const [desc,setDesc]= useState("");


    const submit=(e)=>{
        e.preventDefault();
       if(!title || !desc){
        alert("title cnnot be blank")
       }

        myTodo(title,desc)


    }

  return (
    <div className="container my-3">
        <h3>Add A Todo</h3>
      
      <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text"value={title} className="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp" />
               
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value={desc} className="form-control" id="desc" onChange={(e)=>{setDesc(e.target.value)}}/>
            </div>
         
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>


    </div>
  )
}
