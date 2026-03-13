import { useEffect, useMemo, useState } from "react"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Minus, Plus } from "phosphor-react"
import {
  Container,
  Wrapper,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductSize,
  PriceDetail,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
  Title,
  Top,
  TopButton,
  TopTexts,
  //TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  EmptyMessage
} from "./CartStyle"

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCartItems(storedCart)
  }, [])

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems]
    updatedCart[index].quantity += 1
    updateCart(updatedCart)
  }

  const handleDecrease = (index) => {
    const updatedCart = [...cartItems]

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1
    } else {
      updatedCart.splice(index, 1)
    }

    updateCart(updatedCart)
  }

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [cartItems])

  const shipping = subtotal > 0 ? 5.9 : 0
  const shippingDiscount = subtotal > 0 ? 5.9 : 0
  const total = subtotal + shipping - shippingDiscount

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0)
  }, [cartItems])

  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Title>YOUR CART</Title>

        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>Shopping Cart ({totalQuantity})</TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            {cartItems.length === 0 ? (
              <EmptyMessage>Your cart is empty.</EmptyMessage>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.size || "default"}-${item.color || "default"}`}
                >
                  <Product>
                    <ProductDetail>
                      <Image src={item.img} alt={item.name} />

                      <Details>
                        <ProductName>
                          <b>Product:</b> {item.name}
                        </ProductName>

                        <ProductId>
                          <b>ID:</b> {item.id}
                        </ProductId>

                        <ProductSize>
                          <b>Size:</b> {item.size || "Standard"}
                        </ProductSize>
                      </Details>
                    </ProductDetail>

                    <PriceDetail>
                      <ProductAmountContainer>
                        <Minus
                          size={18}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDecrease(index)}
                        />

                        <ProductAmount>{item.quantity}</ProductAmount>

                        <Plus
                          size={18}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleIncrease(index)}
                        />
                      </ProductAmountContainer>

                      <ProductPrice>
                        $ {(item.price * item.quantity).toFixed(2)}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>

                  <Hr />
                </div>
              ))
            )}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {subtotal.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ {shipping.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>
                $ -{shippingDiscount.toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>

            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  )
}

export default Cart