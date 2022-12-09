import { Facebook, Instagram, Room} from '@mui/icons-material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components'
import { mobile } from '../responsive';
import { tablet } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})};
    ${tablet({ flexDirection: "column"})};
`;

const Image = styled.img`
 height: 50px;
 margin-top: 5px;
 display: flex;
 ${mobile({height: "60px", marginLeft: "75px"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})};
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#BCD4DE"})}
    ${tablet({backgroundColor: "#BCD4DE"})}
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

const Title = styled.h3`

    margin-bottom: 30px;

`;

const List = styled.ul`

    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
`;

const ListItem = styled.li`

    width: 50%;
    margin-bottom: 10px;

`;

const ContactItem = styled.div`

    margin-bottom: 20px;
    display: flex;
    align-content: center;

`;

const Payment = styled.img`

    width: 100px;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
            <Image src = "https://drive.google.com/uc?export=view&id=1-9n9g8O6asV2SzdhJuw1tLkpz_BMSNy3" />
            </Logo>
            <Desc>
                <b>Thirdy</b> offers Good Quality Products that comes with good prices and discounts. Order yours now!
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
            <Title>
                Useful Links
            </Title>
        <List>
            <ListItem>Controllers</ListItem>
            <ListItem>Peripherals</ListItem>
            <ListItem>Airpods</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem>Wishlist</ListItem>
        </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>123 Mandaluyong City 
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/>+63 9234567890
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"10px"}}/>contactdis@thirdy.com
            </ContactItem>
            <Payment src = "https://drive.google.com/uc?export=view&id=1ENgKf34F0R64GpAZFJG_foVNrxDJBT36"/>
        </Right>
    </Container>
  )
}

export default Footer