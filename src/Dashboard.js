import React from "react"; 
import { useEffect, useState } from "react";
import { Outlet, useNavigate , Link} from "react-router";

function Dashboard(){

    return(
        <>
            <div>
               <h2>Welcome to Suganya's Portfolio</h2>
            <nav>
                <Link to='todolist'>Task Planner</Link>
                <Link to='userdetails'>User Info</Link>
            </nav>
            <Outlet/>
            </div>
        </>
    )
}

export default Dashboard;