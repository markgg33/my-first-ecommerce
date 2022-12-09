import styled from "styled-components"
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:center;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) , url("https://drive.google.com/uc?export=view&id=10KVg-G_FFq0nonvYRJh_cw1DlOcJBDAS") center;
    ${mobile({flexDirection: "column"})}
`;
const Wrapper = styled.div` //Wrapper shows the border style (edit here)
    padding: 20px;
    width: 25%;
    background-color: #FFC759;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.6);
    ${mobile({width: "75%", padding: "30px", marginBottom: "20px"})}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.div`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ECA72C;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #E09F3E;
    cursor: pointer;
    border-radius: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration:underline;
  cursor: pointer;
`
const Login = () => {
  return (
    <Container>
        
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Link>Forgot your Password? Click Here.</Link>
                <Link>Create your account here</Link>
                <Button>LOGIN</Button>
            </Form>
        </Wrapper>
    </Container>

  )
}

export default Login