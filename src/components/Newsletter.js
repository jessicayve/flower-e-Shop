import { PaperPlaneRight } from "phosphor-react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.section`
  min-height: 58vh;
  background: linear-gradient(180deg, #fff8fb 0%, #fcf5f5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 20px;
  text-align: center;

  ${mobile({
    minHeight: "auto",
    padding: "50px 16px"
  })}
`

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  color: #2f1f25;
  margin-bottom: 16px;
  line-height: 1.1;

  ${mobile({
    fontSize: "2.2rem",
    marginBottom: "14px"
  })}
`

const Desc = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #7a646d;
  margin-bottom: 28px;
  max-width: 560px;
  line-height: 1.7;

  ${mobile({
    fontSize: "1rem",
    marginBottom: "22px"
  })}
`

const InputContainer = styled.div`
  width: 100%;
  max-width: 620px;
  min-height: 58px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eddbe2;
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(191, 93, 128, 0.08);

  ${mobile({
    maxWidth: "100%",
    minHeight: "52px"
  })}
`

const Input = styled.input`
  border: none;
  flex: 1;
  height: 100%;
  padding: 0 20px;
  font-size: 1rem;
  color: #4b3840;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #a48b94;
  }

  ${mobile({
    padding: "0 16px",
    fontSize: "0.95rem"
  })}
`

const Button = styled.button`
  width: 64px;
  height: 58px;
  border: none;
  background: linear-gradient(90deg, #d87093, #bf5d80);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0.04);
  }

  ${mobile({
    width: "58px",
    height: "52px"
  })}
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        Get timely updates about new floral collections, special offers and
        elegant products curated for every occasion.
      </Desc>

      <InputContainer>
        <Input placeholder="Your email address" />
        <Button type="button">
          <PaperPlaneRight size={24} weight="bold" />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter