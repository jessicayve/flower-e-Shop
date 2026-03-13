import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div`
  background: #fffdfd;
`

const Hero = styled.div`
  padding: 50px 40px 20px;
  text-align: center;
  background: linear-gradient(180deg, #fff8fb 0%, #fffdfd 100%);
`

const Title = styled.h1`
  margin: 0;
  font-size: 2.8rem;
  color: #2f1f25;
  font-weight: 700;

  ${mobile({
    fontSize: "2rem"
  })}
`

const Description = styled.p`
  margin: 16px auto 0;
  max-width: 680px;
  color: #8b6f79;
  line-height: 1.7;
  font-size: 1rem;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px 10px;
  gap: 20px;

  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px"
  })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`

const FilterText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #4a313a;
`

const Select = styled.select`
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #ead8df;
  background: white;
  color: #5c434c;
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #d89ab0;
  }
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Hero>
        <Title>Flowers Collection</Title>
        <Description>
          Discover floral arrangements designed to add elegance, softness and
          beauty to everyday spaces and unforgettable celebrations.
        </Description>
      </Hero>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select defaultValue="DEFAULT">
            <Option value="DEFAULT" disabled>
              Size
            </Option>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select defaultValue="Newest">
            <Option value="Newest">Newest</Option>
            <Option value="Low">Price (Low to High)</Option>
            <Option value="High">Price (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList