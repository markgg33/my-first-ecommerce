import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import { mobile } from '../responsive'
import { TtyOutlined } from '@mui/icons-material';

const Container = styled.div`
    height: 60vh;
    background-color: #BCD4DE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center", fontSize: "30px"})};
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "90%"})};
    `;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #abc4ab;
    color: white;
    cursor: pointer;
`;
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products. </Desc>
        <InputContainer>
        <Input placeholder = "Your E-mail" />
        <Button>
        <SendIcon/>
        </Button>
     </InputContainer>
    </Container>
  )
}

export default Newsletter