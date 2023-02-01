import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  const data = localStorage.getItem('user')
  const currentUser = JSON.parse(data)

  const ProtectecRoutes = ({ children }) => {
    if (!currentUser) return <Navigate to='/login' />
    else return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <ProtectecRoutes>
            <Home />
          </ProtectecRoutes>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
