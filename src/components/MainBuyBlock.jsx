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
    display: flex;
    justify-content: space-around;
    padding: 10px 100px 0 100px;
`

const BuyBoxCont = styled.div`
    position: relative;
`

const BuyBox = styled.div`
    display: flex;
    position: relative;
    height: 350px;
    width: 294px;
    background: linear-gradient(40deg, rgba(255,77,0,1) 0%, rgba(91,91,91,1) 63%);
    border-radius: 10px;
    align-items: center;
    transition: 0.3s ease-in-out;
`

const BuyBoxAfter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`

const BuyBox2 = styled.div`
    display: flex;
    position: relative;
    height: 350px;
    width: 294px;
    background: linear-gradient(40deg, rgba(255,77,0,1) 0%, #161616 63%);
    border-radius: 10px;
    align-items: center;
    transition: 0.3s ease-in-out;
`

const BuyBoxFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    -webkit-filter: drop-shadow(5px 5px 5px #2222227f);
    filter: drop-shadow(5px 5px 5px #2222227f);
    pointer-events: none;
`

const BottlePic1 = styled.div`
    margin-left: 106px;
    pointer-events: none;
`

const BuyBoxText1 = styled.div`
    position: absolute;
    top: 274px;
    left: 28px;
    font-family: 'Roboto';
    font-size: 43px;
    font-weight: 600;
    font-style: italic;
    color: #fff;
    pointer-events: none;
`

function MouseOver (event) {
    let b1 = document.getElementById('b1');
    b1.style.opacity = 0;
    b1.style.transform = 'translate 120px';
    event.target.style.opacity = 0;
    let b2 = document.getElementById('b2');
    b2.style.opacity = 1;
    
}

function MouseOut (event) {
    event.target.style.opacity = 1;    
}

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
                    <BuyBoxCont>
                        <BuyBox id='firstBuyBlock' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                            <BuyBoxFront><img id='b1' src="./images/BuyBoxFront.svg" alt="" /></BuyBoxFront>
                            <BottlePic1><img id='b1' src="./images/BottlePic2.svg" alt="" /></BottlePic1>
                            <BuyBoxText1>Fit Bottle</BuyBoxText1>
                        </BuyBox>
                        <BuyBoxAfter>
                            <BuyBox2>
                                <BottlePic1><img id='b1' src="./images/BottlePic2.svg" alt="" /></BottlePic1>
                                <BuyBoxText1>Fit Bottle</BuyBoxText1>
                            </BuyBox2>
                        </BuyBoxAfter>
                    </BuyBoxCont>
                </BuyBoxBlock>
            </BuyBlock>
        </div>
    )
}

export default MainBuyBlock
