import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import ScrollButton from '../components/ScrollButton'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <div>
    <Announcements/>
    <Navbar/>
    <Slider/> 
    <Categories/> 
    <Products/>
    <ScrollButton/>
    <Newsletter/>
    <Footer/>
    </div>
    )
  
}

export default Home;