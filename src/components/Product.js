import { MagnifyingGlass, ShoppingCart } from "phosphor-react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToProductDetailPage } from "../routes/coordinator"

const Card = styled.div`
  flex: 1 1 260px;
  max-width: 300px;
  min-width: 260px;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 14px 32px rgba(119, 81, 92, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(119, 81, 92, 0.16);
  }
`

const ImageArea = styled.div`
  height: 270px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover .info {
    opacity: 1;
  }
`

const Image = styled.img`
  max-height: 210px;
  max-width: 80%;
  object-fit: contain;
  z-index: 2;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.08);
  }
`

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background: rgba(44, 26, 34, 0.18);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.35s ease;
`

const Icon = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);

  &:hover {
    background: #fdecef;
    transform: scale(1.08);
  }
`

const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const ProductCategory = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #b27c8d;
  font-weight: 700;
`

const ProductName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #2f1f25;
  line-height: 1.4;
`

const ProductPrice = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #c85c7e;
`

const Product = ({ product }) => {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price || 0,
      img: product.img,
      category: product.category || "Floral Design",
      quantity: 1
    }

    const currentCart = JSON.parse(localStorage.getItem("cart")) || []

    const existingProductIndex = currentCart.findIndex(
      (item) => item.id === productToAdd.id
    )

    if (existingProductIndex >= 0) {
      currentCart[existingProductIndex].quantity += 1
    } else {
      currentCart.push(productToAdd)
    }

    localStorage.setItem("cart", JSON.stringify(currentCart))
    window.dispatchEvent(new Event("cartUpdated"))
     alert("Product added to cart!")
  }

  return (
    <Card>
      <ImageArea>
        <Image src={product.img} alt={product.name} />

        <Info className="info">
          <Icon onClick={handleAddToCart} type="button">
            <ShoppingCart size={22} />
          </Icon>

          <Icon
            onClick={() => goToProductDetailPage(navigate, product.id)}
            type="button"
          >
            <MagnifyingGlass size={22} />
          </Icon>
        </Info>
      </ImageArea>

      <Content>
        <ProductCategory>{product.category || "Floral Design"}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        {product.price && <ProductPrice>$ {product.price}</ProductPrice>}
      </Content>
    </Card>
  )
}

export default Product