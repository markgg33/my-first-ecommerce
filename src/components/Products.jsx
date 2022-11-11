import styled from 'styled-components'
import { itemProducts } from '../data'
import Product from './Product'
const Products = () => {

    const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
  return (
    <Container>
      {itemProducts.map((item) =>(
        <Product item = {item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products