import React from 'react'
import Announcement from "../components/Announcements"
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;
const Title = styled.h1`
    font-weight: 300;;
    text-align: center;
`;
const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({flexDirection: "column"})}
`;
const Info = styled.div`
    flex: 3;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "#534B62" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
    border-radius: 10px;
    
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`;

const TopText = styled.span`
    text-decoration:underline;
    margin: 0px 10px;
    cursor: pointer;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    border: none;
    border-radius: 10px;
    background-color: #1B1725;
    margin: 20px 0px;
    color: white;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`

`;
const ProductID = styled.span`

`;
const ProductVersion = styled.span`
    
`;
const PriceDetails = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content:center;
    margin: 20px 20px;
`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}

`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    display:flex;
    align-items:center;
    justify-content: center;
    ${mobile({marginBottom: "20px"})}
    
`;

const Summary = styled.div`
    flex: 1;
    border: none;
    border-radius: 10px;
    background-color: #1B1725;
    padding: 20px;
    height: 50vh;
    color: white;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    
`;
const SummaryItem = styled.div`
    margin: 70px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
    
`;
const SummaryItemPrice = styled.span`
    
`;
const SummaryButton = styled.button`
    width: 100%;
    padding: 20px;
    background-color: #534B62;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 700;
`;
const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR THIRDY CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type = "filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src= "https://drive.google.com/uc?export=view&id=1TRkwT72b4jSJ8uhCZxwLvchwwp0CVXUx"/>
                            <Details>
                                <ProductName><b>Product: </b>AIRPODS (1ST GENERATION / AIROHA CHIP)</ProductName>
                                <ProductID><b>ID: </b>A13RD20221210</ProductID>
                                <ProductVersion><b>Version:</b> Airoha Chip</ProductVersion>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                        <ProductPrice>₱ 1000</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Product>
                        <ProductDetails>
                            <Image src= "https://drive.google.com/uc?export=view&id=1ZopwwDOwuRdTc6IwUT4wYzjL6uaFMawa"/>
                            <Details>
                                <ProductName><b>Product: </b>AIRPODS (3RD GENERATION / AIROHA CHIP)</ProductName>
                                <ProductID><b>ID: </b>A33RD202212112</ProductID>
                                <ProductVersion><b>Version:</b> Airoha Chip</ProductVersion>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                        <ProductPrice>₱ 1300</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SUBTOTAL</SummaryItemText>
                        <SummaryItemPrice>₱ 4600</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>₱ 100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>₱ 100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >TOTAL</SummaryItemText>
                        <SummaryItemPrice>₱ 4500</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  );
};

export default Cart