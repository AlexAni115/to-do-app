import React, { useEffect } from 'react'
import  { useState } from 'react'




function App() {
  const [allTodo,setTodo] = useState ([])
  const [newtitle,setTitle] = useState("")
  const [newDescription,setDescription]= useState("")
  const [editingIndex, setEditingIndex] = useState(-1)
      let [completed,setCompleted]=useState("All")

      const  handleAddTodo =()=>{
        let newTodoItem = {
          title:newtitle,
          description: newDescription
        }
        let updatedTodoArr = [...allTodo];
        updatedTodoArr.push(newTodoItem);
        setTodo(updatedTodoArr)
        localStorage.setItem('todoList',JSON.stringify(updatedTodoArr))
      }

      const handleDelete = (i)=>{
       let reducedTodo = [...allTodo]
       reducedTodo.splice(i)
       localStorage.setItem('todoList',JSON.stringify(reducedTodo))
       setTodo(reducedTodo)
      }

      const handleEdit = (i) => {
        const { newtitle, newDescription } = allTodo[i];
        setTitle(newtitle);
        setDescription(newDescription);
        setEditingIndex(i);
      }

      useEffect(()=>{
       let savedTodo= JSON.parse(localStorage.getItem('todoList'));
       if (savedTodo){
        setTodo(savedTodo)
       }
      },[])
  return <>
      <div className="container">
        <h1>
            My Todo
        </h1>
        
    </div>
    <div className="main"> 
        <form className="row g-3">
            <div className="col-auto ">
             <label for="inputPassword2" className="visually-hidden"></label>
             <input value = {newtitle} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" id="inputPassword2" placeholder="Todo Name"/>
           </div>
           <div className="col-auto">
               <label for="inputPassword2" className="visually-hidden"></label>
               <input value = {newDescription} onChange={(e)=>setDescription(e.target.value)} type="text" className="form-control" id="inputPassword2" placeholder="To do Discription"/>
             </div>
           <div className="col-auto">
             <button onClick={handleAddTodo} type="submit" className="btn btn-success mb-3" >Add Todo</button>
           </div>
         </form>
    </div>
    <div className="section">
    <div className="tools"> 
        <h2>My tools</h2>
    </div>
    <div>
        <h2 className="filter">
            Status Filter:
            <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  All
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Completed</a></li>
                  <li><a className="dropdown-item" href="#">Not Completed</a></li>
                  
                </ul>
              </div>
        </h2>
    </div>
 
  

  
 </div>

 {
  allTodo.map((e,i)=>{
    return <div className="row" key={i}>
    <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name:{e.title}</h5>
                <p className="card-text">{e.description  }</p>
                <p className="card-text">Status:<div className="dropdown">
                  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Completed
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item btn-danger" type="button">Not Completed</button></li>
                    
                  </ul>
                </div></p>
                <div className="button"><a onClick={(i)=>handleEdit(i)} href="#" className="btn btn-success">Edit</a>
                <a href="#" onClick={()=>handleDelete(i)} className="btn btn-danger">Delete</a></div>
                
              </div>
            </div>
          </div>
          </div>
  })
 }
  
 



      

      
    
  </>
}

export default App