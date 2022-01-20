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

function App() {
   const [stu, setStu] = useState([{
name:"Mark",
mobile:"9829389849",
email:"mark@yahoo.com",
cls:"BW98WE"
   },
   {name:"Jacob",
   mobile:"9874618798",
   email:"jacob@gmail.com",
   cls:"BW09WD"},

   {name:"Larry",
   mobile:"8765431349",
   email:"larry@mail.com",
   cls:"BW67WE"}
]);
  return (
    <BrowserRouter>
    <div className="App" >
    <div> <Sidebar/></div>
    <div className='Content-div'>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/all-students' element={<AllStudents data={{stu,setStu}}/>}/>
      <Route path='/add-students' element={<AddStudents data={{stu,setStu}}/>}/>
      <Route path='/edit-students/:id' element={<EditStudent data={{stu,setStu}}/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </div>
    </div>
</BrowserRouter>
  );
}

export default App;
