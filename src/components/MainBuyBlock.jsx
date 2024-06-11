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
    padding: 10px 150px 0 150px;
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
    z-index: 2;
`

const BuyBoxAfter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`

const BuyBox2 = styled.div`
    display: flex;
    position: relative;
    height: 350px;
    width: 294px;
    background: linear-gradient(213deg, rgba(255,77,0,1) 0%, #1b1b1b 63%);
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

const BuyBoxFront2 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    -webkit-filter: drop-shadow(5px 5px 5px #2222227f);
    filter: drop-shadow(5px 5px 5px #2222227f);
    pointer-events: none;
    z-index: 0;
    opacity: 0.3;
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

const BottlePic2 = styled.div`
    margin-left: 180px;
    pointer-events: none;
    z-index: 1;
`

const BuyBoxText2 = styled.div`
    position: absolute;
    top: 50px;
    left: 30px;
    font-family: 'Roboto';
    font-size: 30px;
    font-weight: 600;
    font-style: italic;
    color: #fff;
    pointer-events: none;
`

const BuyBoxText2sec = styled.div`
    display: flex;
    position: absolute;
    top: 155px;
    left: 30px;
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 600;
    font-style: italic;
    color: #E70000;
    pointer-events: none;
    align-items: flex-start;
`

const SecSpan = styled.span`
    color: #E70000;
    font-size: 13px;
    margin-left: 5px;
`

const BuyBoxText2sec2 = styled.div`
    position: absolute;
    top: 184px;
    left: 30px;
    font-family: 'Roboto';
    font-size: 48px;
    font-weight: 600;
    font-style: italic;
    color: #fff;
    pointer-events: none;
    text-decoration-line: underline;
`

const BuyBox2Button = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'Roboto';
    font-size: 36px;
    font-style: italic;
    font-weight: 600;
    top: 272px;
    left: 20px;
    height: 55px;
    width: 129px;
    background-color: #282828;
    border: 4px solid #E74500;
    border-radius: 39px; 
    cursor: pointer;
    pointer-events: auto;
`

function MouseOver() {
   let BuyBefore = document.getElementById('firstBuyBlock');
   let BuyAfter = document.getElementById('SecondBuyBlock');
   BuyBefore.style.zIndex = 0;
   BuyAfter.style.opacity = 1;
   BuyBefore.style.opacity = 0;
   BuyBefore.style.transition = '0.7s';
   BuyAfter.style.transition = '0.7s';
}

function MouseOut() {
    let BuyBefore = document.getElementById('firstBuyBlock');
    let BuyAfter = document.getElementById('SecondBuyBlock');
    BuyAfter.style.opacity = 0;
    BuyBefore.style.opacity = 1;
    BuyBefore.style.zIndex = 3;
    BuyBefore.style.transition = '0.7s';
    BuyAfter.style.transition = '0.7s';

}

function MouseOver2() {
    let BuyBefore2 = document.getElementById('firstBuyBlock2');
    let BuyAfter2 = document.getElementById('SecondBuyBlock2');
    BuyBefore2.style.zIndex = 0;
    BuyAfter2.style.opacity = 1;
    BuyBefore2.style.opacity = 0;
    BuyBefore2.style.transition = '0.7s';
    BuyAfter2.style.transition = '0.7s';

    
 }
 
 function MouseOut2() {
     let BuyBefore2 = document.getElementById('firstBuyBlock2');
     let BuyAfter2 = document.getElementById('SecondBuyBlock2');
     BuyAfter2.style.opacity = 0;
     BuyBefore2.style.opacity = 1;
     BuyBefore2.style.zIndex = 3;
     BuyBefore2.style.transition = '0.7s';
     BuyAfter2.style.transition = '0.7s';
  }
  function MouseOver3() {
    let BuyBefore3 = document.getElementById('firstBuyBlock3');
    let BuyAfter3 = document.getElementById('SecondBuyBlock3');
    BuyBefore3.style.zIndex = 0;
    BuyAfter3.style.opacity = 1;
    BuyBefore3.style.opacity = 0;
    BuyBefore3.style.transition = '0.7s';
    BuyAfter3.style.transition = '0.7s';
    
 }
 
 function MouseOut3() {
     let BuyBefore3 = document.getElementById('firstBuyBlock3');
     let BuyAfter3 = document.getElementById('SecondBuyBlock3');
     BuyAfter3.style.opacity = 0;
     BuyBefore3.style.opacity = 1;
     BuyBefore3.style.zIndex = 3;
     BuyBefore3.style.transition = '0.4s';
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
                        <BuyBox id='firstBuyBlock' onMouseOver={MouseOver}>
                            <BuyBoxFront><img id='b1' src="./images/BuyBoxFront.svg" alt="" /></BuyBoxFront>
                            <BottlePic1><img id='b1' src="./images/BottlePic2.svg" alt="" /></BottlePic1>
                            <BuyBoxText1>Fit Bottle</BuyBoxText1>
                        </BuyBox>
                        <BuyBoxAfter id='SecondBuyBlock' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                            <BuyBox2 id='b2'>
                                <BuyBoxFront2><img src="./images/BuyBoxFront.svg" alt="" /></BuyBoxFront2>
                                <BottlePic2><img src="./images/BottlePic2_2.svg" alt="" /></BottlePic2>
                                <BuyBoxText2>Fit Bottle</BuyBoxText2>
                                <BuyBoxText2sec>7.49$<SecSpan>-20%</SecSpan></BuyBoxText2sec>
                                <BuyBoxText2sec2>5.99$</BuyBoxText2sec2>
                                <BuyBox2Button>BUY</BuyBox2Button>
                            </BuyBox2>
                        </BuyBoxAfter>
                    </BuyBoxCont>
                    <BuyBoxCont>
                        <BuyBox id='firstBuyBlock2' onMouseOver={MouseOver2}>
                            <BuyBoxFront><img id='b12' src="./images/BuyBoxFront.svg" alt="" /></BuyBoxFront>
                            <BottlePic1><img id='b12' src="./images/BottlePic2.svg" alt="" /></BottlePic1>
                            <BuyBoxText1>Fit Bottle</BuyBoxText1>
                        </BuyBox>
                        <BuyBoxAfter id='SecondBuyBlock2' onMouseOver={MouseOver2} onMouseOut={MouseOut2}>
                            <BuyBox2 id='b22'>
                                <BuyBoxFront2><img src="./images/BuyBoxFront.svg" alt="" /></BuyBoxFront2>
                                <BottlePic2><img src="./images/BottlePic2_2.svg" alt="" /></BottlePic2>
                                <BuyBoxText2>Fit Bottle</BuyBoxText2>
                                <BuyBoxText2sec>7.49$<SecSpan>-20%</SecSpan></BuyBoxText2sec>
                                <BuyBoxText2sec2>5.99$</BuyBoxText2sec2>
                                <BuyBox2Button>BUY</BuyBox2Button>
                            </BuyBox2>
                        </BuyBoxAfter>
                    </BuyBoxCont><BuyBoxCont>
                        <BuyBox id='firstBuyBlock3' onMouseOver={MouseOver3}>
                            <BuyBoxFront><img id='b1' src="./images/BuyBoxFront.svg" alt="" /></BuyBoxFront>
                            <BottlePic1><img id='b1' src="./images/BottlePic2.svg" alt="" /></BottlePic1>
                            <BuyBoxText1>Fit Bottle</BuyBoxText1>
                        </BuyBox>
                        <BuyBoxAfter id='SecondBuyBlock3' onMouseOver={MouseOver3} onMouseOut={MouseOut3}>
                            <BuyBox2 id='b23'>
                                <BuyBoxFront2><img src="./images/BuyBoxFront.svg" alt="" /></BuyBoxFront2>
                                <BottlePic2><img src="./images/BottlePic2_2.svg" alt="" /></BottlePic2>
                                <BuyBoxText2>Fit Bottle</BuyBoxText2>
                                <BuyBoxText2sec>7.49$<SecSpan>-20%</SecSpan></BuyBoxText2sec>
                                <BuyBoxText2sec2>5.99$</BuyBoxText2sec2>
                                <BuyBox2Button>BUY</BuyBox2Button>
                            </BuyBox2>
                        </BuyBoxAfter>
                    </BuyBoxCont>
                </BuyBoxBlock>
            </BuyBlock>
            
        </div>
    )
}

export default MainBuyBlock
