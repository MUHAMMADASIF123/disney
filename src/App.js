import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import New from './components/New';
import Anti from './components/Anti';
import Soul from './components/Soul';
import Inside from './components/Inside';
import Grafield from './components/Grafield';
import Raya from './components/Raya';
import Legend from './components/Legend';
import Simpo from './components/Simpo';
import Meano from './components/Meano';
import Incredible from './components/Incredible';
import Music from './components/Music';
import Tengled from './components/Tengled';

function App() {
  return (
    <div className="App">
              <Header/> 
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}/>
          {/* <Route index element={<Home />} /> */}
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/anti" element={<Anti />} />
          <Route path="/soul" element={<Soul />} />
          <Route path="/legent" element={<Legend />} />
          <Route path="/simo" element={<Simpo />} />
          <Route path="/meano" element={<Meano />} />
          <Route path="/raya" element={<Raya />} />
          <Route path="/grafield" element={<Grafield />} />
          <Route path="/inside-out" element={<Inside/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/tangled" element={<Tengled/>} />
          <Route path="/incredible" element={<Incredible/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
