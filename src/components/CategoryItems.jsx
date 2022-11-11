import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
  margin: 20px;
  letter-spacing: 5px;
  font-weight: 900;
  font-style: italic;
  text-shadow: -1px 2px 2px #000,
				  1px 1px 2px #000,
				  1px -1px 0 #000,
				  -1px -1px 0 #000;
`
const Button = styled.button`

border: none;
border-radius: 12px;
font-size: 20px;
padding: 14px 40px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`

export const CategoryItems = ({item}) => {
  return (
    <Container>
        <Image src= {item.img}/>
        <Info> 
        <Title>{item.title}</Title>
        <Button>BUY NOW!</Button>
        </Info>
    </Container>
  )
}


