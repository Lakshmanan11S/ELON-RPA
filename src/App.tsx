import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePatient from './Pages/CreatePatient';
import PatientFind from './Pages/PatientFind';
import Logout from './Pages/Logout';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/createPatient' element={<CreatePatient/>}/>
      <Route path='/patientFind' element={<PatientFind/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App