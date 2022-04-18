import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import CheckOut from './pages/CheckOut/CheckOut';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
