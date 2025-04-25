import logo from './logo.svg';
import './App.css';
import Login from './Login';
import TodoList from './TodoList';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Router, Routes, Route , Navigate} from 'react-router';


function App() {
 
  return (
    <div className="App">
      <h2>Task Planner</h2>
      <BrowserRouter>
       
          <Routes>
            <Route path='/' element={<Navigate to ='/login'></Navigate>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/todolist' element ={
              <PrivateRoute>
                <TodoList />
              </PrivateRoute>}></Route>
          
          </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
