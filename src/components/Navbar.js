import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { SearchIcon } from "@chakra-ui/icons"
import { Badge } from "@mui/material"
import { ShoppingCart, X } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import {
  goToHomePage,
  goToLoginPage,
  goToRegisterPage,
  goToCartPage
} from "../routes/coordinator"
import { mobile } from "../responsive"
import logo from "../img/logo.png"

const Container = styled.div`
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #f3e4ea;

  ${mobile({
    height: "72px"
  })}
`

const Wrapper = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  ${mobile({
    padding: "0 16px",
    gap: "10px"
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;

  ${mobile({
    flex: "1"
  })}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: #5e4a51;

  ${mobile({
    display: "none"
  })}
`

const SearchContainer = styled.div`
  border: 1px solid #ead8df;
  align-items: center;
  display: flex;
  margin-left: 25px;
  padding: 8px 10px;
  border-radius: 999px;
  background: white;
  min-width: 210px;

  ${mobile({
    display:"none"
  })}
`

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  background: transparent;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;

  ${mobile({
    flex: "0 0 auto"
  })}
`

const Logo = styled.img`
  height: 260px;
  object-fit: contain;
  cursor: pointer;
  display: block;
  
  ${mobile({
    height: "180px",
   
  })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
  position: relative;

  ${mobile({
    gap: "10px",
    flex: "0 0 auto"
  })}
`

const MenuItem = styled.button`
  font-size: 13px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #4f3b42;
  font-weight: 600;

  ${mobile({
    display: "none"
  })}
`

const CartButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const MiniCart = styled.div`
  position: absolute;
  top: calc(100% + 14px);
  right: 0;
  width: 360px;
  max-height: 480px;
  overflow-y: auto;
  background: white;
  border: 1px solid #f1dce4;
  border-radius: 22px;
  box-shadow: 0 18px 40px rgba(86, 53, 64, 0.14);
  padding: 18px;
  z-index: 80;

  ${mobile({
    width: "calc(100vw - 24px)",
    right: "-8px",
    maxHeight: "70vh"
  })}
`

const MiniCartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const MiniCartTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #2f1f25;
`

const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MiniCartEmpty = styled.p`
  margin: 10px 0 0;
  color: #7a656d;
  font-size: 0.95rem;
`

const MiniCartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const MiniCartItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

const MiniCartImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  object-fit: cover;
  background: #faf6f8;
`

const MiniCartInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const MiniCartName = styled.p`
  margin: 0 0 6px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2f1f25;
`

const MiniCartMeta = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #876f78;
`

const MiniCartPrice = styled.p`
  margin: 8px 0 0;
  font-size: 0.92rem;
  font-weight: 700;
  color: #bf5d80;
`

const MiniCartFooter = styled.div`
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid #f2e3e8;
`

const MiniCartRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  color: #47343b;
  font-weight: 600;
`

const MiniCartActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const SecondaryButton = styled.button`
  flex: 1;
  min-width: 120px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid #d9b7c3;
  background: white;
  color: #5b444c;
  font-weight: 700;
  cursor: pointer;
`

const PrimaryButton = styled.button`
  flex: 1;
  min-width: 120px;
  height: 44px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(90deg, #d87093, #bf5d80);
  color: white;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(191, 93, 128, 0.2);
`

const Navbar = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)
  const miniCartRef = useRef(null)

  useEffect(() => {
    const updateCartData = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      setCartItems(cart)

      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
      setCartCount(totalItems)
    }

    updateCartData()

    window.addEventListener("cartUpdated", updateCartData)
    window.addEventListener("storage", updateCartData)

    return () => {
      window.removeEventListener("cartUpdated", updateCartData)
      window.removeEventListener("storage", updateCartData)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
        setIsMiniCartOpen(false)
      }
    }

    if (isMiniCartOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMiniCartOpen])

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  )

  const handleOpenCartPage = () => {
    setIsMiniCartOpen(false)
    goToCartPage(navigate)
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 14 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo
            src={logo}
            alt="Flower eShop"
            onClick={() => goToHomePage(navigate)}
          />
        </Center>

        <Right ref={miniCartRef}>
          <MenuItem onClick={() => goToRegisterPage(navigate)}>
            REGISTER
          </MenuItem>

          <MenuItem onClick={() => goToLoginPage(navigate)}>
            SIGN IN
          </MenuItem>

          <CartButton
            type="button"
            onClick={() => setIsMiniCartOpen((prev) => !prev)}
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCart size={30} style={{ cursor: "pointer" }} />
            </Badge>
          </CartButton>

          {isMiniCartOpen && (
            <MiniCart>
              <MiniCartHeader>
                <MiniCartTitle>Your Cart</MiniCartTitle>
                <CloseButton
                  type="button"
                  onClick={() => setIsMiniCartOpen(false)}
                >
                  <X size={18} />
                </CloseButton>
              </MiniCartHeader>

              {cartItems.length === 0 ? (
                <MiniCartEmpty>Your cart is empty.</MiniCartEmpty>
              ) : (
                <>
                  <MiniCartList>
                    {cartItems.map((item, index) => (
                      <MiniCartItem
                        key={`${item.id}-${item.size || "default"}-${index}`}
                      >
                        <MiniCartImage src={item.img} alt={item.name} />

                        <MiniCartInfo>
                          <MiniCartName>{item.name}</MiniCartName>
                          <MiniCartMeta>
                            Qty: {item.quantity}
                            {item.size ? ` • Size: ${item.size}` : ""}
                          </MiniCartMeta>
                          <MiniCartPrice>
                            $ {((item.price || 0) * item.quantity).toFixed(2)}
                          </MiniCartPrice>
                        </MiniCartInfo>
                      </MiniCartItem>
                    ))}
                  </MiniCartList>

                  <MiniCartFooter>
                    <MiniCartRow>
                      <span>Subtotal</span>
                      <span>$ {subtotal.toFixed(2)}</span>
                    </MiniCartRow>

                    <MiniCartActions>
                      <SecondaryButton
                        type="button"
                        onClick={handleOpenCartPage}
                      >
                        View Cart
                      </SecondaryButton>

                      <PrimaryButton
                        type="button"
                        onClick={handleOpenCartPage}
                      >
                        Checkout
                      </PrimaryButton>
                    </MiniCartActions>
                  </MiniCartFooter>
                </>
              )}
            </MiniCart>
          )}
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar