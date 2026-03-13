import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToProductListPage } from "../routes/coordinator"
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height:"30vh"})}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    background-color: #908278;
    border-radius: 2px;
    opacity: 0.9;
    ${mobile({
    height: "40px",
    fontsize:"10px",
    
    
  })}
    
    
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;



const CategoryItem = ({ item }) => {
  
  const navigate = useNavigate()

    return (
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button onClick={() => goToProductListPage(navigate)}>SHOP NOW</Button>
        </Info>
      </Container>
    );
  };

export default CategoryItem