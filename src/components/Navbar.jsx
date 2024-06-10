import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    position: fixed;
    min-width: 100%;
    height: 98px;
    display: flex;
    background-color: #282828ae;
    justify-content: space-around;
    align-items: center;
    font-family: 'Overpass';
    z-index:100;
`

const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <div>
      <Header>
        <img src="./images/LogoHeader.svg" alt="" />
        <NavButton>MAIN</NavButton>
        <NavButton>ABOUT US</NavButton>
        <NavButton>ABONIMENTS</NavButton>
        <NavButton>INSTRUCTORS</NavButton>
      </Header>
    </div>
  )
}

export default Navbar
