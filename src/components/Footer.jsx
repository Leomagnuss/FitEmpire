import React from 'react'
import styled from 'styled-components'



const FooterBlock = styled.div`
  background-image: url('./images/FooterBackground.svg');
  height: 401px;
  background-size: 100%;
  margin-top: 69px;
  /* filter: drop-shadow(-10px -10px -10px rgba(0,0,0,0.3)) */
  filter: drop-shadow(0px -120px 70px rgb(18, 18, 18));
`

const FooterLogo = styled.div`
   padding: 143px 0 0 88px;
`

const Footer = () => {
  return (
    <div>
        <FooterBlock>
            <FooterLogo><img src="./images/FooterLogo.svg" alt="" /></FooterLogo>
        </FooterBlock>    
    </div>
  )
}

export default Footer
