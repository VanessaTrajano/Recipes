import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import bolo from '../../images/bolo.png'
import pizza from '../../images/pizza.png'
import bebidas from '../../images/bebidas.png'

const GlobalStyle = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    `

const Latest = styled.div`
  background-color: #F2F4F1;
  width: 100%;
  height: 100vh;
`


export default function LatestRecipes() {
  return (
    <Latest>
      <div>
        <h2>LATEST RECIPES</h2>
        <div></div>
      </div>
      <div>
        <img src={bolo} />
        <div></div>
        <h3>Red Velvet Cake</h3>
      </div>
      <div>
        <img />
        <div></div>
        <h3>Margherita Pizza</h3>
      </div>
      <div>
        <img />
        <div></div>
        <h3>Peanut Smoothie</h3>
      </div>
    </Latest>
  )
}