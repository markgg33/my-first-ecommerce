import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@mui/icons-material/';
import { Badge} from '@mui/material';
//import myImage from './dataBlitz.png'

const Container = styled.div`
  height: 80px;
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

const Input = styled.input`
  border: none;
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
          3RDy
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