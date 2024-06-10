import React from 'react'
import styled from 'styled-components'

const BuyBlock = styled.div`
    display: grid;
`

const BuyTitle = styled.div`
    display: flex;
    align-items: center;
`

const Title = styled.h1`
    font-size: 71px;
    color: transparent;
    font-family: "Roboto";
    font-style: italic;
    -webkit-text-stroke: 2px #FFFFFF;
    padding: 0px 30px 0 240px;
    font-weight: 900;
`
const SubTitle = styled.div`
    font-family: "Roboto";
    font-size: 21px;
    color: #807f7f;
    font-weight: 700;
    padding-left: 30px;
`

const BuyBlockSubTitleText = styled.div`
    display: flex;
    font-family: "Roboto";
    font-size: 29px;
    color: white;
    font-weight: 600;
    font-style: italic;
    padding: 65px 0 65px 260px;
    align-items: flex-start;
`

const BuyBoxBlock = styled.div`
    
`

const BuyBox = styled.div`
    
`

const MainBuyBlock = () => {
    return (
        <div>
            <BuyBlock>
                <BuyTitle>
                    <Title>Be on style</Title>
                    <img src="./images/Cart.svg" alt="" />
                    <SubTitle>Certified product from the company</SubTitle>
                </BuyTitle>
                <BuyBlockSubTitleText><img src="./images/BuyBlockSubTitleText.svg" alt="" />All products can be purchased on the fitness center's <br /> website or in the center itself at the reception.</BuyBlockSubTitleText>
                <BuyBoxBlock>
                    <BuyBox>
                        
                    </BuyBox>
                </BuyBoxBlock>
            </BuyBlock>
        </div>
    )
}

export default MainBuyBlock
