import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Footer from './component/Footer';
import Product from './page/Product';


function App() {
  return (
    <div className="App">
       <Navbar />
       <Outlet />
        <Routes>
            <Route path='/home' element={ <Home />}/>
            <Route path='/about' element={ <About />}/>
            <Route path='/product' element={ <Product />}/>
            <Route path='/contact' element={ <Contact />}/>
            <Route path='/login' element={ <Login />}/>
          </Routes>   
     <Footer />
     <Outlet />
    </div>
  );
}

export default App;
