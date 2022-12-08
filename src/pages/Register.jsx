import styled from "styled-components"
import { mobile } from "../responsive";
const Container = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:center;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) , url("https://drive.google.com/uc?export=view&id=10KVg-G_FFq0nonvYRJh_cw1DlOcJBDAS") center;
`;
const Wrapper = styled.div` //Wrapper shows the border style (edit here)
    padding: 20px;
    width: 40%;
    background-color: #FFC759;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.6);
    ${mobile({width: "75%"})}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ECA72C;
`;
const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #E09F3E;
    cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY.</b>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register