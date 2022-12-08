import React, {useState} from 'react'
import styled from 'styled-components';
import {IoIosArrowDropupCircle} from 'react-icons/io';
import { mobile } from '../responsive';
  
const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 40px;
   height: 30px;
   font-size: 35px;
   z-index: 3;
   cursor: pointer;
   color: #E09F3E;
  

   &:hover{
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 40px;
   height: 30px;
   font-size: 35px;
   z-index: 3;
   cursor: pointer;
   color: black;
   }

   ${mobile({ margin: "0px -60px", color: "#E09F3E"})}
`


const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      }  
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };

    window.addEventListener('scroll', toggleVisible);

  return (
    <Button>
    <IoIosArrowDropupCircle onClick={scrollToTop} 
    style={{display: visible ? 'inline' : 'none', fontSize: "200%"}} />
    </Button>
  )
}


export default ScrollButton