import logo from './logo.svg';
import './App.css';
import Login from './Login';
import TodoList from './TodoList';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import UserDetails from './UserDetails';
import { BrowserRouter, Router, Routes, Route , Navigate, Link} from 'react-router';


function App() {
 
  return (
    <div className="App">
      <h2>Task Planner</h2>
      <BrowserRouter>
       
          <Routes>
            <Route path='/' element={<Navigate to ='/login'></Navigate>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/dashboard' element={ <PrivateRoute><Dashboard /> </PrivateRoute>}>
              <Route path='/todolist' element ={ <TodoList /> }></Route>
              <Route path='/userdetails' element={<UserDetails/>}></Route>
            </Route>
            <Route path='*' element = {<h1>Not Found</h1>}></Route>
          </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
