import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('./images/FooterBackground.svg');
  height: 401px;
  background-size: 100%;
  margin-top: 69px;
  filter: drop-shadow(0px -120px 70px rgb(18, 18, 18));
`

const FooterBlockLeft = styled.div`
  flex:1;
`

const FooterLogo = styled.div`
  padding: 143px 0 0 88px !important;
`

const FooterLogoText = styled.div`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 900;
  color: #fff;
  padding: 0 0 0 93px;
`

const FooterWorkTime = styled.div`
  display: flex;
  align-items: center;
  padding-top: 45px;
`

const FooterWorkTimePic = styled.div`
  padding: 0px 15px 0 88px;
`

const FooterWorkTimeText = styled.div`
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.7px;
`

const FooterBlockCenter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 220px;
`

const FooterGeoPic = styled.div`
  padding-right: 10px;
`

const FooterGeoText = styled.div`
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 300;
  color: #9E9E9E;
`

const FooterBlockRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 220px;
  justify-content: flex-end;
  padding-right: 50px;
`

const FooterWeb = styled.div`
padding-right: 15px;
`

const FooterEnd = styled.div`
  border-top: 1px solid #D9D9D9;
  border-width: 90%;
  background-color: #1F1F1F;
`

const FooterEndText = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Inter';
  font-size: 16px;
  color: #fff;
  padding: 10px 0 10px 0;
  font-weight: 100;
`

const FooterEndTextStart = styled.div`
  flex:1;
  text-align: center;
`

const FooterEndTextStart2 = styled.div`
  flex: 1;
  text-align: left;
`

const FooterEndTextEnd = styled.div`
  flex: 1;
  text-align: center;
`

const Footer = () => {
  return (
    <div>
        <FooterDiv>
          <FooterBlockLeft>
            <FooterLogo><img src="./images/FooterLogo.svg" alt="" /></FooterLogo>
            <FooterLogoText>THE BEST WORKOUTS</FooterLogoText>
            <FooterWorkTime>
              <FooterWorkTimePic><img src="./images/FooterClock.svg" alt="" /></FooterWorkTimePic>
              <FooterWorkTimeText>MON-FRI 11:00-19:00<br />SAT-SUN 12:30-17:30</FooterWorkTimeText>
            </FooterWorkTime>
          </FooterBlockLeft>
          <FooterBlockCenter>
            <FooterGeoPic><img src="./images/FooterGeoPic.svg" alt="" /></FooterGeoPic>
            <FooterGeoText>main Park J Adams<br />Mosawa, LA</FooterGeoText>
          </FooterBlockCenter>
          <FooterBlockRight>
            <FooterWeb><img src="./images/InstLogo.svg" alt="" /></FooterWeb>
            <FooterWeb><img src="./images/TwitterLogo.svg" alt="" /></FooterWeb>
            <FooterWeb><img src="./images/TelegramLogo.svg" alt="" /></FooterWeb>
          </FooterBlockRight>
        </FooterDiv>
        <FooterEnd>
          <FooterEndText>
            <FooterEndTextStart>LEGAL DOCUMENTS</FooterEndTextStart>
            <FooterEndTextStart2>CERTIFICATES </FooterEndTextStart2>
            <FooterEndTextEnd>ALL RIGHTS RESERVED®</FooterEndTextEnd>
          </FooterEndText>
        </FooterEnd>
    </div>
  )
}

export default Footer
