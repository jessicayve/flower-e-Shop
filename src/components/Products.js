import styled from "styled-components"
import { product } from "../data"
import Product from "./Product"



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
const Products = () => {

  return (
  <Container>
    {product.map((product)=>(
        <Product product={product} key={product.id}/>
    ))}
  </Container>
  )
}

export default Products;