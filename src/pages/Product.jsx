import { Add } from "@mui/icons-material";
import styled from "styled-components"
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";
import { tablet} from "../responsive";


const Container = styled.div`
    

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
    ${tablet({padding: "10px", flexDirection: "column"})}
`;
const ImgContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    width: 70%;
    ${mobile({display: "flex", width: "100%"})}
    ${tablet({display: "flex", width: "100%"})}
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`;
const Title = styled.h1`
    font-weight: 400;
`;
const Desc = styled.p`
    margin: 20px 0px;

`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const Filter = styled.div`
    display:flex;
    align-items: center;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}

`;
const FilterTitle = styled.span`
    margin-right: 20px;
    font-size:20px;
    font-weight:200;
`;
const FilterVersion = styled.select`
    margin-left: 10px;
    padding: 5px;

`;
const FilterOption = styled.option`
    
`;
const AddContainer = styled.div`
    width: 40%; 
    display: flex;
    align-content: center;
    justify-content: space-between;
    cursor:pointer;
    ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #ECA72C;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid #ECA72C;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #ECA72C;
    }
    ${mobile({padding: "20px"})}
`;

const Product = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src = "https://drive.google.com/uc?export=view&id=1TRkwT72b4jSJ8uhCZxwLvchwwp0CVXUx"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Airpods 1st Generation</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Beatae odit adipisci inventore doloribus tempore eligendi sapiente eveniet dolorem, 
                    reprehenderit cupiditate ad similique asperiores harum porro dolorum rem. Cum, inventore aliquam?
                </Desc>
                <Price>₱ 1000</Price>
                <FilterContainer>
                    <Filter>
                    <FilterTitle>Version</FilterTitle>
                    <FilterVersion>
                        <FilterOption>Airoha</FilterOption>
                        <FilterOption>Non-Airoha</FilterOption>
                        <FilterOption>Tiger Builder (For Pre-order)</FilterOption>
                    </FilterVersion>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product