import React from 'react'
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
const SubscribeSection = styled.section`
  background-color: #DFE4DE;
  width: 100%;
  height: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h3`
  color: #373737;
  letter-spacing: 4.2px;
  font-size: 3.5vh;
`
const SubTitle = styled.p`
  margin-top: 30px;
  color: #373737;
  letter-spacing: 2.05px;
  font-size: 3.2vh;
  font-weight: normal;
`
const Input = styled.input`
  margin-top: 50px;
  background-color: #EFF1EE;
  color: #707070;
  font-size: 2.6vh;
  padding: 50px;
  width: 740px;
  height: 100px;

  border-style: none;
`
const Button = styled.button`
  margin-top: 50px;
  background-color: #DFE4DE;
  border: solid 4px #373737;

  width: 230px;
  height: 70px;

  font-size: 2.6vh;
  color: #373737;
  font-weight: bold;
  transition: 0.5s;
  &:hover{
    cursor: pointer;
    background-color: lightgrey;
  }
`

export default function Subscribe(){
    return(
      <>
      <GlobalStyle/>
      <SubscribeSection>
        <Title>SUBSCRIBE</Title>
        <SubTitle>Sign up for newsletter</SubTitle>
        <Input type="text" placeholder="Your Email"/>
        <Button>S U B M I T</Button>
      </SubscribeSection>
      </>
    )
  }