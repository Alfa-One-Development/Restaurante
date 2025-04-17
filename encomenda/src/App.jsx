import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detalhes1 from './pages/Detalhes1';
import Detalhes2 from './pages/Detalhes2';
import Detalhes3 from './pages/Detalhes3';
import Home from './pages/Home';

import './App.css'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes1" element={<Detalhes1 />} />
          <Route path="/detalhes2" element={<Detalhes2 />} />
          <Route path="/detalhes3" element={<Detalhes3 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
