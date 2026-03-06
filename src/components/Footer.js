import { EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin, Phone } from "phosphor-react"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;


`
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})}
`
const Title = styled.h3`
margin-bottom: 30px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor:"#fff8f8"})}
`

const ContactItem =styled.div`
margin-bottom: 20px;
display: flex;
align-content: center;
`

const Payment = styled.img`
width: 50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Jessica Yve</Logo>
            <Desc>
            There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon>
                <LinkedinLogo size={80} />
                <SocialIcon>
                <GithubLogo size={30}  />
                </SocialIcon>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>All Flowers</ListItem>
          <ListItem>Vases </ListItem>
          <ListItem>Candles</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wedding Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
            <MapPin style={{marginRight:"10px"}} size={20} />
                622 Dixie Path, South Tobinchester 999
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight:"10px"}} size={20} />
                +1 234 56 78
            </ContactItem>
            <ContactItem>
            <EnvelopeSimple style={{marginRight:"10px"}} size={20} />
                yve.jessica@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

        </Right>
    </Container>
  )
}

export default Footer