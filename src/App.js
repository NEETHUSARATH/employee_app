import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/employeeform' exact element={<EmployeeForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
