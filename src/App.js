import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/Main/About'
import LatestRecipes from './components/Main/LatestRecipes'
import Subscribe from './components/Main/Subscribe'

export default function App(){
  return(
    <>
      <Header/>
      <LatestRecipes/>
      <About/>
      <Subscribe/>
      <Footer/>
    </>
  )
}