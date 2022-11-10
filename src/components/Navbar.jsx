import SearchIcon from '@mui/icons-material/Search';
import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@mui/icons-material/';
import { Badge} from '@mui/material';

const Container = styled.div`
  height: 100px;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.6);
  position: sticky;
  top: 0;
  z-index: 100;

  // remove values if necessary (e.g Modifying site to mobile)
   //Removes the gap between announcement and navbar
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-content: center;
  justify-content:space-between;;
`
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-start; // change flex value to start or end
`

const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`

const Center = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Image = styled.img`
 height: 70px;
 margin-top: 5px;
 align-items: center;

 display: flex;
`
const Input = styled.input`
  border: none;
  width: 250px;
`

const Logo = styled.div`
   font-weight: bold;
   font-size: 50px; 
   
`
const MenuItems = styled.div`
   font-size:14px; 
   cursor: pointer;
   margin-left: 25px;

`

const Navbar = () => {

  return (
    <Container>
      <Wrapper>
        <Left> 
        <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
      <Center>
      <Logo>
          <Image src = "https://drive.google.com/uc?export=view&id=1-9n9g8O6asV2SzdhJuw1tLkpz_BMSNy3" />
        </Logo>
      </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
          <Badge badgeContent={1} color="primary">
          <ShoppingCartOutlined/>
          </Badge>
          </MenuItems>
        </Right>   
      </Wrapper>
    </Container>
  )
};

export default Navbar