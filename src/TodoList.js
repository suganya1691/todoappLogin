import React, { useRef } from "react";
import {useState, useEffect} from 'react';

function TodoList(){
    const[todos,setTodos] = useState(JSON.parse(localStorage.getItem('todoList')) || []);
    const[taskname,setTaskname] = useState();
    const completedCount = todos.filter((todo) => todo.isCompleted).length;
    const totalCount = todos.length;
    const taskNameRef = useRef();
    const [editIndex, setEditIndex] = useState(null);
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todos));

        return(() => {
            localStorage.removeItem('todoList');
        })
    },[todos])
    const addTodos = (e) =>{
        e.preventDefault();
        if(editIndex !== null){
           const update = [...todos];
           update[editIndex].taskName = taskname;
           setTodos(update);
           setEditIndex(null);
           taskNameRef.current.value ='';
        }else{
            const newtask = {
                taskName:taskname,
                id:Math.random()*1000,
                isCompleted:false
    
            }
            setTodos((prevtodos) => [...prevtodos,newtask])
        }
        
        //localStorage.setItem('todoList',JSON.stringify([...todos,newtask]));
    }
    const completeTodo = (itemId)=>{
        console.log('Item Id', itemId);
       console.log('All', localStorage.getItem('todoList'));
       setTodos((prevTodos) => 
        prevTodos.map((todo) =>
            todo.id === itemId ? {...todo, isCompleted:!todo.isCompleted} : todo
        
        )
       )
       const hhh = JSON.stringify(todos);
       //localStorage.setItem('todoList',hhh);
    }

    const editTask = (itemIndex) =>{
        taskNameRef.current.value = todos[itemIndex].taskName;
        //setTaskname(todos[itemIndex].taskName);
        setEditIndex(itemIndex);
    }
    const deleteTask = (itemId) =>{
        const updatedTodos = todos.filter((todo) => todo.id !== itemId);
        setTodos(updatedTodos);
    }
    return(
        <>
            <h2>TodoList</h2>
            <p>Task Completed - {completedCount}/{totalCount}</p>
            <input type='text' ref ={taskNameRef} name='addtodo' onChange={(e) => setTaskname(e.target.value)}></input>
            <button onClick={addTodos} >{editIndex !== null ? 'Update' : 'Add'}</button>
           {todos && <ul>{todos.map((todo,index) => 
            (<li key={todo.id} >
                <span onClick={() => completeTodo(todo.id)} style = {todo.isCompleted ? {textDecoration:'line-through'}:{}}>{todo.taskName}</span>
                <button type='button' onClick={()=>editTask(index)}>Edit</button>
                <button type='button'  onClick={()=>deleteTask(todo.id)}>Delete</button>
            </li>))}</ul>}
        </>
    )
}

export default TodoList;
