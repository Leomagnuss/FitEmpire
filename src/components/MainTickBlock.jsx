import React from 'react'
import styled from 'styled-components'

const TitleBlock = styled.div`
    display: flex;
    align-items: center;
`

const TickBlock = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: flex-start;
`

const Title = styled.h1`
    font-size: 71px;
    color: transparent;
    font-family: "Roboto";
    font-style: italic;
    -webkit-text-stroke: 2px #FFFFFF;
    padding: 0 20px 0 140px;
    font-weight: 900;
`

const TitleTextTick = styled.div`
    display: grid;
    margin-top: 80px;
`

const TickTextBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 50px;
`

const TickPic = styled.div`
    display: grid;
`

const Tick = styled.div`
    padding-bottom: 39px;
`

const TextTick = styled.div`
    
`

const TextIn = styled.div`
    font-size: 29px;
    font-family: "Roboto";
    font-weight: 600;
    font-style: italic;
    padding:0 0 49px 25px;
    color: #ffffff;
`

const TextInColor = styled.span`
    color: #ff4d00;
`

const TickPhotoBlock = styled.div`
    margin-top: 0px;
`

const MainTickBlock = () => {
  return (
    <div>
        <TickBlock>
            <TitleTextTick>
                <TitleBlock>
                    <Title>Freedom</Title>
                    <img src="./images/Kettlebell.svg" alt="" />   
                </TitleBlock>
                <TickTextBlock>
                    <TickPic>
                    <Tick><img src="./images/TickPic.svg" alt="" /></Tick>
                    <Tick><img src="./images/TickPic.svg" alt="" /></Tick>
                    <Tick><img src="./images/TickPic.svg" alt="" /></Tick>
                    </TickPic>
                    <TextTick>
                        <TextIn>Complete freedom of your <TextInColor>training.</TextInColor></TextIn>
                        <TextIn><TextInColor>Trane</TextInColor> alone or in a group.</TextIn>
                        <TextIn>On your own or with a <TextInColor>professional.</TextInColor></TextIn>
                    </TextTick>
                </TickTextBlock>
            </TitleTextTick>
            <TickPhotoBlock><img src="./images/Tickimage.svg" alt="" /></TickPhotoBlock>
        </TickBlock>
    </div>
  )
}

export default MainTickBlock
