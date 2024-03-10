import './App.css';
import { useState } from 'react';
import Navbar from './component/navbar/Navbar';
import Banner from './component/banner/Banner';
import Rowpost from './component/RowPost/Rowpost';

function App() {
 
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost/>
    </div>
  );
}

export default App;
