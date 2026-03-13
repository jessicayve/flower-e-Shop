import styled from "styled-components"
import { product } from "../data"
import Product from "./Product"

const Section = styled.section`
  padding: 70px 40px;
  background: #fffafc;
`

const Header = styled.div`
  margin-bottom: 34px;
  text-align: center;
`

const Title = styled.h2`
  margin: 0;
  font-size: 2.2rem;
  color: #2f1f25;
  font-weight: 700;
`

const Subtitle = styled.p`
  margin: 14px auto 0;
  max-width: 620px;
  color: #8b6f79;
  line-height: 1.7;
  font-size: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`

const Products = () => {
  return (
    <Section>
      <Header>
        <Title>Top Products</Title>
        <Subtitle>
          Explore our most loved floral pieces, from soft romantic bouquets to
          elegant decorative arrangements for special moments.
        </Subtitle>
      </Header>

      <Container>
        {product.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </Container>
    </Section>
  )
}

export default Products