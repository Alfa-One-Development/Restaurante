import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Detalhes1 from './pages/Detalhes1';
import Detalhes2 from './pages/Detalhes2';
import Detalhes3 from './pages/Detalhes3';
import Home from './pages/Home';

import NavBar from './components/NavBar';
import './App.css'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
           <NavBar />

          <Route path="/" element={<Home />} />
          <Route path="/Detalhes1" element={<Detalhes1 />} />
          <Route path="/Detalhes2" element={<Detalhes2 />} />
          <Route path="/Detalhes3" element={<Detalhes3 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
