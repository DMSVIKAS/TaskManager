import './App.css'
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Signup from './components/registration/Signup';
import Signin from './components/registration/Signin';
import Dashboard from './pages/dashboard/Dashboard';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/main.scss';
import TaskManager from './pages/taskmanagement/TaskManager';
import EditTask from './components/taskmanager/EditTask';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/taskmanager' element={<TaskManager/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/EditTask/:itemId' element={<EditTask/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;