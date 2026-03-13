import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div``

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 14px;
  flex-wrap: wrap;
`

export const TopButton = styled.button`
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid black")};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
`

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  ${mobile({ flexDirection: "column" })}
`

export const Info = styled.div`
  flex: 3;
`

export const EmptyMessage = styled.p`
  font-size: 18px;
  color: #666;
  padding: 30px 0;
`

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  ${mobile({ flexDirection: "column" })}
`

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;

  ${mobile({
    width: "100%",
    maxWidth: "260px",
    height: "260px"
  })}
`

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ProductName = styled.span``

export const ProductId = styled.div``

export const ProductSize = styled.span``

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 20px;
  height: fit-content;
  padding: 20px;
`

export const SummaryTitle = styled.h1`
  font-weight: 200;
`

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? "500" : "400")};
  font-size: ${(props) => (props.type === "total" ? "24px" : "16px")};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`