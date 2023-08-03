
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
