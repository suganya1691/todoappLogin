import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";

function Login(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const[error,setError] = useState(false);
    const [errmsg,setErrmsg] = useState();
    
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const resp = await fetch('/api/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username,password})
        })
        const data = await resp.json();
        console.log('Data', data);
        if(data.token){
            localStorage.setItem('token',data.token);
            navigate('/todolist');
            //setError(false);
        }else{
            
            setError(true);
            setErrmsg(data.error);
            setPassword('');
            setUsername('');
        }
       

    }
    
    return(
        <><h2>Login to App</h2>
        <div>
           
        <form onSubmit={handleSubmit}>
        <label name='username'>Username</label>
        <input type='text' name='username' onChange = {(e) => setUsername(e.target.value)}></input>
        {error && <p>{errmsg}</p>}
        <label name='username'>Password</label>
        <input type='password' name='password' onChange = {(e) => setPassword(e.target.value)}></input>
        <button type='submit'>Login</button>
        </form>
      </div></>
    )

}

export default Login;