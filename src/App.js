import React from "react";
import { Routes, Route } from 'react-router-dom';

import Main from "./components/pages/Main";
import Artists from "./components/pages/Artists";
import PhotographerView from "./components/includes/PhotographerView"; 
import PhotographerViewAd from "./components/includes/PhotographerViewAd"; 
import PhotographerPersonalAll from "./components/includes/PhotographerViewPersonal"; 
import StylistView from "./components/includes/StylistView"; 
import FashionView from "./components/includes/FashionView"; 
import BeautyView from "./components/includes/BeautyView"; 
import Production from "./components/pages/Production";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
  <Routes>
        {/* Main Page */}
        <Route path="/" element={<Main />} />
        {/* Sub Page */}
        <Route path="/Artists" element={<Artists />} />
        <Route path="/PhotographerView" element={<PhotographerView />} />
        <Route path="/PhotographerViewAd" element={<PhotographerViewAd/>} />
        <Route path="/PhotographerViewPersonal" element={<PhotographerPersonalAll/>} />
        <Route path="/StylistView" element={<StylistView />} />
        <Route path="/FashionView" element={<FashionView />} />
        <Route path="/BeautyView" element={<BeautyView />} />
        <Route path="/Production" element={<Production />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
