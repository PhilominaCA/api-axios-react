import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import AllStudents from './Components/AllStudents';
import AddStudents from './Components/AddStudents';
import EditStudent from './Components/EditStudent';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

export const URL = 'https://61ee202dd593d20017dbac5d.mockapi.io/students/';

function App() {

  return (
    <BrowserRouter>
    <div className="App" >
    <div> <Sidebar/></div>
    <div className='Content-div'>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/all-students' element={<AllStudents/>}/>
      <Route path='/add-students' element={<AddStudents/>}/>
      <Route path='/edit-students/:id' element={<EditStudent/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </div>
    </div>
</BrowserRouter>
  );
}

export default App;
