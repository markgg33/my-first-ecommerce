import { Facebook, Instagram } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

const Image = styled.img`
 height: 50px;
 margin-top: 5px;
 display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;
const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display:flex;
    
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
            <Image src = "https://drive.google.com/uc?export=view&id=1-9n9g8O6asV2SzdhJuw1tLkpz_BMSNy3" />
            </Logo>
            <Desc>
                This section will be your lorem lorem whatever thingy for checking the text for spaces,
                and more of the styles used in this project. Happy *put crying meme* CODING!
            </Desc>
            <SocialContainer>
                <SocialIcon color = "226CE0">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color = "e4405f">
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

        </Center>
        <Right>

        </Right>
    </Container>
  )
}

export default Footer