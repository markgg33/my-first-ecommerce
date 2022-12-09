import SearchIcon from '@mui/icons-material/Search'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@mui/icons-material/'
import { Badge} from '@mui/material'
import {mobile, tablet} from "../responsive"
import React from "react"
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from '../pages/Home'
import ProductList from '../pages/ProductList'

const Container = styled.div`
  height: 100px;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.6);
  position: sticky;
  top: 0;
  z-index: 100;
  ${mobile({ height: "60px"})};
  // remove values if necessary (e.g Modifying site to mobile)
   //Removes the gap between announcement and navbar
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-content: center;
  justify-content:space-between;
  ${mobile({ padding: "10px 0px"})};
  
  
`;
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-start; // change flex value to start or end
 ${mobile({ width: "40px"})}
`;

const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 ${mobile({flex: 2, justifyContent: "center", marginRight: "15px"})}
 ${tablet({flex: 2, justifyContent: "center", marginRight: "20px"})}
`;

const Center = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;

`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none"})};
  ${tablet({ display: "none"})};
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ width: "80px", marginLeft: "7px"})};
  ${tablet({ width: "80%", marginLeft: "5px"})};
`;
const Image = styled.img`
 height: 70px;
 margin-top: 5px;
 align-items: center;
 display: flex;
 ${mobile({ height: "30px", margin: "3px", display: "none"})};
 ${tablet({ height: "60px", margin: "10px 3px"})};
`;
const Input = styled.input`
  border: none;
  display: flex;
  ${mobile({ width: "60px"})};
  ${tablet({ width: "100%"})};
`;

const Logo = styled.div`
   font-size: 50px; 
   
`;
const MenuItems = styled.div`
   font-size:14px; 
   cursor: pointer;
   margin-left: 25px;
   color: black;
   ${mobile({ fontSize: "12px", marginTop: "6px" , marginLeft: "20px"})};
`;


const Navbar = () => {

  return (
    <Container>
      <Wrapper>
        <Left> 
        <Language>EN</Language>
          <SearchContainer>
            <Input placeholder = "Search"/>
            <SearchIcon style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
      <Center>
      <Logo>
          <Image src = "https://drive.google.com/uc?export=view&id=1-9n9g8O6asV2SzdhJuw1tLkpz_BMSNy3" />
        </Logo>
      </Center>
        <Right>
          <MenuItems>HOME</MenuItems>
          <MenuItems>PRODUCTS</MenuItems>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
          <Badge badgeContent={2} max={99} color="primary">
          <ShoppingCartOutlined/>
          </Badge>
          </MenuItems>
        </Right>   
      </Wrapper>
    </Container>
  )
};

export default Navbar