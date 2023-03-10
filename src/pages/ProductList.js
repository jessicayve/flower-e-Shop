import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Footer from "../components/Footer"
import { mobile } from "../responsive"


const Container = styled.div``

const Title = styled.h1`
margin: 20px;`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin:20px;
${mobile({width:" 0px 20px", display:"flex", flexDirection:"column"})}
`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight:"0px"})}
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0px"})}
`
const Option = styled.option`
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Flowers</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option >
                            Size
                        </Option>
                        <Option value="DEFAULT">XS</Option>
                        <Option value="1">S</Option>
                        <Option value="2">M</Option>
                        <Option value="3">L</Option>
                        <Option value="4" >XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option value="DEFAULT">Newest</Option>
                        <Option value="1">Price (Low-High)</Option>
                        <Option value="2">Price (High-Low)</Option>
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