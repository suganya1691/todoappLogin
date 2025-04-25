import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";

function Login(){
    const [username,setUsername] = useState();
    const[error,setError] = useState(false);
    const name = 'sugan';
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username == 'sugan'){
            setError(false);
            navigate('/todolist');

        }else{
            setError(true);
        }

    }
    
    return(
        <><h2>Login to App</h2>
        <div>
            <p>{name}</p>
        <form onSubmit={handleSubmit}>
        <label name='username'>Username</label>
        <input type='text' name='username' onChange = {(e) => setUsername(e.target.value)}></input>
        {error && <p>Invalid USername</p>}
        <label name='username'>Password</label>
        <input type='password' name='password'></input>
        <button type='submit'>Login</button>
        </form>
      </div></>
    )

}

export default Login;