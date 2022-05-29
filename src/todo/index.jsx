import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import './style.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo =(todoText)=>{
    const newTodo = {
      text:todoText,
      isDone:false,
      id:Date.now()
    }
    setTodos([...todos,newTodo])
  }

  const removeTodo = (todo) => {
    // console.log(todo.id);
   todo.id=null;
  //  console.log(todo.id);
    function filtered(todo){
      if(Number(todo.id)){
        return true;
      }
      return false;
    }
    let arrNew = todos.filter(filtered);
    setTodos(arrNew)
    
  }
  

  const toggleTodoCompletion = (todo) => {
    // console.log(todo.id);
    todo.isDone=!todo.isDone;
    const arr=todos.map((todo)=>(todo));
    setTodos(arr)
  }

  const onSubmit = (value, formikBag) => {
    addTodo(value.text)
    formikBag.resetForm();
  };
  return (
    <article className="container">
      <div>
        <Formik initialValues={{ text: "" }} onSubmit={onSubmit}>
          <Form>
            <Field name="text" placeholder='new task' />
            <button type="submit">Add task</button>
          </Form>
        </Formik>
      </div>
      <div className="container">
        <h2>Tasks</h2>
        <ul>
          {todos.map((todo) => (
            <li ><input type="checkbox" onChange={()=>{toggleTodoCompletion(todo)}}/>{JSON.stringify(todo.text)}<span onClick={()=>{removeTodo(todo)}}>x</span></li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Todo;
