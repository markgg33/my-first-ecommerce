import React from 'react';
import Navbar from './components/Navbar';
import Announcements from './components/Announcements';
import Slider from './components/Slider';
import Categories from './components/Categories'
const App = () => {

  return (
  <div>
    <Announcements />
    <Navbar/>
    <Slider/>
    <Categories/>
  </div>
    
    )
}

export default App;
