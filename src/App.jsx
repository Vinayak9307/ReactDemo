import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ No Router here
import Navbar from './components/Navbar';
import GetAllShares from './components/GetAllShares';
import Search from './components/Search';
import Update from './components/Update';
import Delete from './components/Delete';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<GetAllShares />} />
          <Route path="/search" element={<Search />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
