import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    height: 878px;
    background-image: url(./images/BackMain.png);
    background-repeat: no-repeat;
    background-size: 100%;
`

const Title = styled.h1`
  font-size: 71px;
  color: transparent;
  font-family: "Roboto";
  font-style: italic;
  -webkit-text-stroke: 2px #FFFFFF;
  padding: 270px 0 0 80px;
  font-weight: 900;
`

const SubTitle = styled.h2`
  font-size: 51px;
  color: white;
  font-family: "Roboto";
  font-style: italic;
  padding: 21px 0 0 80px;
  font-weight: 1000;
  letter-spacing: 0.3px;
`

const SubSubTitle = styled.h2`
  font-size: 28px;
  color: #FF4d00;
  font-family: "Roboto";
  font-style: italic;
  padding: 0px 0 0 80px;
  font-weight: 600;
  letter-spacing: 0.5px;
`

const StartButton = styled.div`
  position: relative;
  height: 102px;
  background-color: #282828;
  width: 528px;
  border: 4px solid #FF4D00;
  margin: 84px 0 0 124px;
  border-radius: 70px;
  cursor: pointer;
  display:flex;
  justify-content:flex-end;
  align-items: center;
  font-size: 56px;
  font-family: 'Roboto';
  font-weight: Bold;
  color: white;
  transition: 0.4s;
`
function MouseOver(event) {
  event.target.style.background= '#ff4d00';
  let b1 = document.getElementById('b1');
  b1.style.margin = "0px 0px 0px 30px";
  let b2 = document.getElementById('b2');
  b2.style.margin = "0px 55px 0px 0px";
}
function MouseOut(event){
  event.target.style.background="";
  let b1 = document.getElementById('b1');
  b1.style.margin = "0px 30px 0px 0px";
  let b2 = document.getElementById('b2');
  b2.style.margin = "0px 30px 0px 0px";
}


const B1 = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  height: 102px;
  width: 240px;
  background-color: #ff4d00;
  top: 0;
  left: 0;
  z-index:0;
  pointer-events: none;
  transition: 0.5s;
`

const B2 = styled.span`
  margin-right: 40px;
  background-color: transparent !important;
  pointer-events: none;
  z-index:1;
  transition: 0.5s;
`

const MainFirstBlock = () => {
  return (
    <div>
      <Background>
          <Title>
            EMPIRE FIT<br />Fitness Center: 
          </Title>
          <SubTitle>
            harmony of body and spirit
          </SubTitle>
          <SubSubTitle>
          Discover the world of fitness with EMPIRE FIT
          </SubSubTitle>
          <StartButton onMouseOver={MouseOver} onMouseOut={MouseOut}><B1 id='b1'>TRAIN</B1><B2 id='b2'>WITH US</B2></StartButton>
      </Background>
    </div>
  )
}

export default MainFirstBlock
