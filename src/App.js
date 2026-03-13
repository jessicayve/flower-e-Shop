import React from 'react'
import Router from './routes/Router'
import { createGlobalStyle } from "styled-components"



export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const App = () => {
  return (
    <>
    <GlobalStyled/>
<Router/>

    </>
  )
}

export default App;