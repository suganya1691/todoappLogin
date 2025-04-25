import logo from './logo.svg';
import './App.css';
import Login from './Login';
import TodoList from './TodoList';
import { BrowserRouter, Router, Routes, Route } from 'react-router';

function App() {
 
  return (
    <div className="App">
      <h2>Login Page</h2>
      <BrowserRouter>
       
          <Routes>
            <Route path='' element={<Login />}/>
            <Route path='/todolist' element ={<TodoList />}></Route>
          
          </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
