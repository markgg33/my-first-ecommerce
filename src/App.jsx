import React from 'react';
import Navbar from './components/Navbar';
import Announcements from './components/Announcements';
import Slider from './components/Slider';
import Categories from './components/Categories'
import ScrollButton from './components/ScrollButton';
import Products from './components/Products';


const App = () => {

  return (
  <div>
    <Announcements />
    <Navbar/>
    <Slider/> 
    <Categories/> 
    <Products/>
    <ScrollButton/> 
  </div>
    
    )
}

export default App;
