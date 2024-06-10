import React from 'react'
import styled from 'styled-components'

const PartnersText = styled.div`
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 700;
    color: #B6B6B6; 
    padding-left: 10px;
`

const Body = styled.div`
    display: flex;
    justify-content:space-around;
    padding: 150px 100px 150px 100px;
    align-items: center;
    text-align:center;
    z-index: 1;
`

const Line = styled.div`
    display:flex;
    align-items: center;
`

const MainPartnersBlock = () => {
  return (
    <div><Body>
        <Line><img src="./images/PartnersTextLine.svg" alt="" />
        <PartnersText>Our sponsors and partners:</PartnersText></Line>
        <img src="./images/AdidasLogo.svg" alt="" />
        <img src="./images/WilsonLogo.svg" alt="" />
        <img src="./images/NikeLogo.svg" alt="" />
        <img src="./images/PumaLogo.svg" alt="" />
    </Body>
       
    </div>
  )
}

export default MainPartnersBlock
