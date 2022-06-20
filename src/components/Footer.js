import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Instagram from '../images/instagram.png'
import Twitter from '../images/twitter.png'
import Facebook from '../images/facebook.png'
import Pinterest from '../images/pinterest.png'

const GlobalStyle = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
`

const FooterSection = styled.section`
  background-color: #F2F4F1;
  width: 100%;
  height: 320px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Box = styled.div`
  margin: 0 5vw 0 5vw;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Navegation = styled.ul`
  display: flex;
  list-style: none;

  li{
    margin-left: 90px;
    letter-spacing: 2.52px;
    color: #373737;
    font-size: 24px;
    &:hover{
      text-decoration: underline 2px #373737;
      cursor: pointer;
    }
  }
`
const Networks = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-between;
`
const NetworksImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`
const End = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #446061;
  width: 100%;
  height: 60px;
  p{
    color: #FFFFFF;
    font-size: 16px;
    opacity: 50%;
  }
`

export default function Footer(){
    return(
      <>
        <GlobalStyle/>
        <FooterSection>
          <Box>
            <Networks>
              <NetworksImg src={Instagram} alt="Imagem da rede social"/>
              <NetworksImg src={Twitter} alt="Imagem da rede social"/>
              <NetworksImg src={Facebook} alt="Imagem da rede social"/>
              <NetworksImg src={Pinterest} alt="Imagem da rede social"/>
            </Networks>
            <Navegation>
              <li>ABOUT</li>
              <li>RECIPES</li>
              <li>SUBSCRIBE</li>
            </Navegation>
          </Box>
        </FooterSection>
        <End>
          <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
        </End>
      </>
    )
  }