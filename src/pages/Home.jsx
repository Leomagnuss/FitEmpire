import React from 'react'
import Navbar from '../components/Navbar'
import MainFirstBlock from '../components/MainFirstBlock'
import MainPartnersBlock from '../components/MainPartnersBlock'
import styled from 'styled-components'
import MainTickBlock from '../components/MainTickBlock'
import MainBuyBlock from '../components/MainBuyBlock'

const MainDecor = styled.div`
 background-image: url("./images/BackDekorLine.svg");
 background-clip: padding-box;
 background-repeat: no-repeat;
 background-size: 100%;
` 

const BackDecorLine = styled.div`
  position: absolute;
`

const Home = () => {
  return (
    <div>
      
        <Navbar/>
        <MainFirstBlock/>
        <MainDecor>
        <MainPartnersBlock/>
        <MainTickBlock/>
        <MainBuyBlock/>
        </MainDecor>
      
    </div>
  )
}

export default Home
