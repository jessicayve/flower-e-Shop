import { useMemo, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Minus, Plus } from "phosphor-react"
import { product as products } from "../data"
import { mobile } from "../responsive"
import { useEffect } from "react"

const Container = styled.div`
  background: #fffdfd;
`

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 32px 72px;
  display: grid;
  grid-template-columns: minmax(320px, 520px) minmax(320px, 1fr);
  gap: 48px;
  align-items: start;
  box-sizing: border-box;

  ${mobile({
    gridTemplateColumns: "1fr",
    padding: "24px 16px 40px",
    gap: "24px"
  })}
`

const ImgContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #fff7fa 0%, #fffdfd 100%);
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 12px 30px rgba(191, 93, 128, 0.08);
  box-sizing: border-box;
`

const ImageFrame = styled.div`
  width: 100%;
  height: 560px;
  border-radius: 22px;
  overflow: hidden;
  background: #fff;

  ${mobile({
    height: "340px"
  })}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const InfoContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 8px;
`

const Category = styled.span`
  display: inline-block;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  color: #b27c8d;
  font-weight: 700;
  margin-bottom: 14px;
`

const Title = styled.h1`
  margin: 0 0 18px;
  font-weight: 700;
  font-size: 2.4rem;
  color: #2f1f25;
  line-height: 1.1;

  ${mobile({
    fontSize: "2rem"
  })}
`

const Desc = styled.p`
  margin: 0 0 24px;
  color: #6f5861;
  line-height: 1.8;
  font-size: 1rem;
  max-width: 560px;
`

const Price = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: #c85c7e;
  margin-bottom: 28px;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f0dde4;
  margin: 0 0 28px;
`

const FilterContainer = styled.div`
  display: grid;
  gap: 18px;
  margin-bottom: 30px;
`

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  align-items: center;
  gap: 14px;

  ${mobile({
    gridTemplateColumns: "1fr",
    gap: "10px"
  })}
`

const FilterTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #4a313a;
`


const FilterSize = styled.select`
  width: 140px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #ead8df;
  background: white;
  outline: none;
  color: #4a313a;
`

const FilterSizeOptions = styled.option``

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`

const AmountButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: none;
  background: #fff3f7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Amount = styled.span`
  width: 46px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid #e8ccd6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  font-weight: 700;
  color: #2f1f25;
`

const AddToCartButton = styled.button`
  min-width: 190px;
  height: 48px;
  padding: 0 24px;
  border: none;
  border-radius: 12px;
  background: #bf5d80;
  color: white;
  font-weight: 700;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 8px 20px rgba(191, 93, 128, 0.25);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(191, 93, 128, 0.35);
  }

  &:active {
    transform: scale(0.97);
  }
`

const NotFoundBox = styled.div`
  max-width: 900px;
  margin: 40px auto 80px;
  padding: 40px 24px;
  text-align: center;
`


const ProductDetail = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()

  const product = useMemo(() => {
    return products.find((item) => item.id === id)
  }, [id])

  const [amount, setAmount] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M")
  

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const handleIncrease = () => {
    setAmount(amount + 1)
  }

  const handleAddToCart = () => {
    if (!product) return

    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price || 0,
      img: product.img,
      category: product.category || "Floral Design",
      size: selectedSize,
      quantity: amount
    }

    const currentCart = JSON.parse(localStorage.getItem("cart")) || []

    const existingProductIndex = currentCart.findIndex(
      (item) =>
        item.id === productToAdd.id &&
        item.size === productToAdd.size &&
        item.color === productToAdd.color
    )

    if (existingProductIndex >= 0) {
      currentCart[existingProductIndex].quantity += productToAdd.quantity
    } else {
      currentCart.push(productToAdd)
    }

    localStorage.setItem("cart", JSON.stringify(currentCart))
    window.dispatchEvent(new Event("cartUpdated"))
    alert("Product added to cart!")
    
  }

  if (!product) {
    return (
      <Container>
        <Navbar />
        <Announcement />
        <NotFoundBox>
          <Title>Product not found</Title>
          <Desc>
            This product does not exist or the selected route is invalid.
          </Desc>
        </NotFoundBox>
        <Newsletter />
        <Footer />
      </Container>
    )
  }

  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <ImageFrame>
            <Image src={product.img} alt={product.name} />
          </ImageFrame>
        </ImgContainer>

        <InfoContainer>
          <Category>{product.category || "Floral Design"}</Category>
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          

          <Price>$ {product.price?.toFixed ? product.price.toFixed(2) : product.price}</Price>
          <Divider />

          <FilterContainer>
            

            <FilterRow>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <FilterSizeOptions value="S">S</FilterSizeOptions>
                <FilterSizeOptions value="M">M</FilterSizeOptions>
                <FilterSizeOptions value="L">L</FilterSizeOptions>
              </FilterSize>
            </FilterRow>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <AmountButton onClick={handleDecrease} type="button">
                <Minus size={18} />
              </AmountButton>

              <Amount>{amount}</Amount>

              <AmountButton onClick={handleIncrease} type="button">
                <Plus size={18} />
              </AmountButton>
            </AmountContainer>

            <AddToCartButton onClick={handleAddToCart} type="button">
              ADD TO CART
            </AddToCartButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductDetail