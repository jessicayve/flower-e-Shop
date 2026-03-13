import styled from "styled-components"
import { mobile } from "../responsive"



const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.3),
    rgba(255,255,255,0.3)
    ), 
    url("https://images.unsplash.com/photo-1589666788379-dfbe8c6570c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") center ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
padding: 25px;
width: 40%;
background-color: white;
${mobile({width:"75%"})}



`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
    justify-content: center;
    
`
const Title = styled.h1`
font-size: 40px;
font-weight: 300;
text-align: center;


`
const Input = styled.input`
flex:1;
min-width: 40%;
margin:10px 0;
padding: 10px;

`

const Button = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background-color: teal;
color:white;
cursor: pointer;
margin-bottom: 10px;

`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="password"></Input>
                    <Button>LOGIN</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login