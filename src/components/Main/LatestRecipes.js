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
  height: 120vh;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`

const Title = styled.h2`
  height: 18vh;
  width: 100%;
  font-size: 3vh;
  color: #373737;
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`

const LinhaTitle = styled.div`
  height: 0.5vh;
  width:6%;
  margin-top: 3vh;
  background-color: #373737;
`

const Recipes = styled.section`
  width: 100%;
  display:flex;
  justify-content: space-evenly;
  height:80vh;
`

const Recipe = styled.div`
  height:100%;
  width: 26,5%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items:center;
  color: #373737;

  p{
    font-size: 3vh;
    margin-top: 10px;
  }
`

const Img = styled.img`
  width: 26,5%;
  height: 250px;
`

const LinhaRecipe = styled.div`
  height: 0.5vh;
  width:10%;
  margin-top: 100px;
  background-color: #373737;
`

export default function LatestRecipes() {
  return (
    <Latest>
      <Title>
        <h2>LATEST RECIPES</h2>
        <LinhaTitle></LinhaTitle>
      </Title>
      <Recipes>
        <Recipe>
          <Img src={bolo} />
          <LinhaRecipe></LinhaRecipe>
          <p>Red Velvet Cake</p>
        </Recipe>
        <Recipe>
          <Img src={pizza} />
          <LinhaRecipe></LinhaRecipe>
          <p>Margherita Pizza</p>
        </Recipe>
        <Recipe>
          <Img src={bebidas} />
          <LinhaRecipe></LinhaRecipe>
          <p>Peanut Smoothie</p>
        </Recipe>
      </Recipes>
    </Latest>
  )
}