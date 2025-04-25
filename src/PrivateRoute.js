import react from "react";
import { Navigate,useNavigate } from "react-router";
import {jwtDecode} from 'jwt-decode';

function PrivateRoute({children}){
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if(!token) <Navigate to='/login'></Navigate>
    try{
        const {exp} = jwtDecode(token);
         if(Date.now() > exp*1000){
            console.log('Token Expired');
            localStorage.removeItem('token');
            return navigate('/login');
        }
    }catch(err){
        localStorage.removeItem('token');
            return navigate('/login');
    }
    
   
}

export default PrivateRoute;