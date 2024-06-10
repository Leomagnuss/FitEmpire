import React from 'react'
import styled from 'styled-components'

const TitleBlock = styled.div`
    display: flex;
    align-items: center;
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

const TickBlock = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: flex-start;
`

const TickPhotoBlock = styled.div`
    margin-top: 0px;
`

const MainTickBlock = () => {
  return (
    <div>
        <TickBlock>
            <TitleBlock>
                <Title>Freedom</Title>
                <img src="./images/Kettlebell.svg" alt="" />   
            </TitleBlock>
        <TickPhotoBlock><img src="./images/Tickimage.svg" alt="" /></TickPhotoBlock>
        </TickBlock>
        
    </div>
  )
}

export default MainTickBlock
